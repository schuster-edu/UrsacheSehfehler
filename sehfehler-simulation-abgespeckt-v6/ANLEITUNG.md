# Simulation „Auge & Sehfehler“ (abgespeckt) – GitHub Pages und iPads

## Einmalig: GitHub Pages
1. GitHub → New repository → Name z. B. `sehfehler` → Public → Create.
2. „uploading an existing file“ → die 6 Dateien aus diesem Ordner hochladen (index.html, sw.js, manifest.json, icon-180.png, icon-192.png, icon-512.png). Die Datei ANLEITUNG.md ist optional. Keine Ordner anlegen, alles auf oberster Ebene → Commit.
3. Settings → Pages → Source: „Deploy from a branch“ → Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten: https://DEIN-NAME.github.io/sehfehler/

## Je iPad (Di oder Do früh, nicht erst im Unterricht)
1. Adresse in Safari öffnen, unten rechts „✓ Offline bereit“ abwarten. Bei orange „Seite gleich neu laden“: neu laden.
2. Teilen → „Zum Home-Bildschirm“ (falls gesperrt: Teilen → „Lesezeichen hinzufügen“).
3. Test: Flugmodus an → Symbol öffnen → Simulation läuft?

## Bei Änderungen später
In sw.js die Version erhöhen (sehfehler-v6 → v7) und in index.html bei `caches.open("sehfehler-v6")` identisch. Neu hochladen, jedes iPad einmal online öffnen.

## Tipps
Tipp-Leiste ist immer sichtbar. Im Code `tp=0` = ausgeblendet (Lernzielkontrolle), `tp=1-4` = nur diese Tipps. Tipp 1 hat eine klickbare Lösung (Knopf „Lösung anzeigen“).
Phase 3: `#m=exp&d=fern&a=0.833&li=0&al=0&b=0&sp=auge-brille-modus`
Kontrolle ohne Hilfen: dasselbe plus `&tp=0`

## Stand
Ungetestet auf echtem Schul-iPad/Safari (Offline, Webfilter github.io, Home-Bildschirm).

## Zusatzaufgabe für Schnelle (★ Zusatz)
Der Knopf „★ Zusatz“ ist immer sichtbar (Aufgabe + klickbare Lösung). Ein Klick blendet den Längenregler ein, auch wenn er per `sp=auge` versteckt ist. Mit `za=0` im Code ist der Knopf ausgeblendet.

## Zurücksetzen
„Linse zurücksetzen“ setzt nur die Linse (Wölbung) zurück, nicht die Augenlänge.
