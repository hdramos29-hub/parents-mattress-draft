# Luxury Mattresses for Less: website v2 (DRAFT), "The roadside sign"

Plain page: `index.html`, `styles.css`, `copy.js`, fonts in `fonts/`, photos in `img/`. No build step; every path is relative, so double-clicking `index.html` works. Goes live at `/v2/` of the `parents-mattress-draft` repo (new folder only).

## Photos (all Unsplash License, free for commercial use, no credit required; credited here anyway)
- `img/hero.jpg`: Costa Live, quilted mattress top (photo-1759176171789-0aa3f84d15ca).
- `img/bedroom.jpg`: white bedroom with a made bed (photo-1741559935512-3b018321e35f). Chosen because it has no brown textile or floor.
- `img/farmhouse.jpg`: Roger Starnes Sr, white farmhouse (photo-1782852634404-972610f87807).
Licenses were not re-read on the Unsplash pages today.

## When Dad's photos are used
His nine photos are in `ONWARD\teams\PARENTS\reference\dad photos`. Most show a brown-gray wood floor and a brown throw, and some show another brand's label, so crop tight to mattress top and side (image1 is the strongest) and save over `img/hero.jpg` at the same crop. Never show the house.

## Facebook link, in-stock list
Comments in `index.html` starting `FACEBOOK:` and `IN STOCK:` say what to change. To show the list, delete `hidden` on the `#in-stock` section.

## Distance sign
Driving miles from Independence, KY, checked with OpenStreetMap routing on 2026-10-09: Indianapolis 120, Nashville 265, Michigan 220 (to the state line at Toledo), rounded to the nearest 5.

## When Hunter approves (one commit)
1. `index.html`: delete the `draft-bar` and `draft-mark` lines and the `robots` meta.
2. `styles.css`: delete the DRAFT block (optional).
3. `vercel.json`: remove the `X-Robots-Tag` header. `robots.txt`: `Disallow: /` becomes `Allow: /`.

## Fonts
Overpass (400, 600, 800, 900), SIL OFL, license in `fonts/OFL-Overpass.txt`. The footer signature is `img/website-by-bench.png` (Website by BENCH, the Lit by the fire style Hunter chose on 2026-10-08), a plain image, no font needed.
