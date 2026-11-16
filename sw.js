/* Service Worker: speichert die Simulation fuer die Offline-Nutzung.
   Bei Aenderungen an index.html: VERSION hochzaehlen (v3 -> v4) und mit hochladen.
   Dieselbe Bezeichnung muss am Ende der index.html bei caches.open(...) stehen.
   Netz zuerst: Ist ein Netz da, erscheint eine neue Version sofort beim ersten Aufruf.
   Ohne Netz (oder nach 3 s ohne Antwort) kommt die gespeicherte Kopie. */
const VERSION = "sehfehler-v6";
const DATEIEN = ["./", "index.html", "manifest.json", "icon-180.png", "icon-192.png", "icon-512.png"];
const ZEITLIMIT_MS = 3000;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(k => Promise.all(k.filter(n => n !== VERSION).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;            // fremde Seiten nicht anfassen
  const istSeite = e.request.mode === "navigate";
  const schluessel = istSeite ? "index.html" : e.request;
  e.respondWith(
    caches.open(VERSION).then(c => {
      const netz = new Promise((ok, fehler) => {
        const t = setTimeout(() => fehler(new Error("Zeitlimit")), ZEITLIMIT_MS);
        fetch(istSeite ? "index.html" : e.request, { cache: "no-cache" }).then(antwort => {
          clearTimeout(t);
          if (antwort && antwort.ok) c.put(schluessel, antwort.clone());
          ok(antwort);
        }, err => { clearTimeout(t); fehler(err); });
      });
      return netz.catch(() => c.match(schluessel, { ignoreSearch: true }).then(g => g || fetch(e.request)));
    })
  );
});
