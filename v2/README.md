# Luxury Mattresses for Less: website v2 (DRAFT), "The roadside sign"

Plain page: `index.html`, `styles.css`, `copy.js`, fonts in `fonts/`, photos in `img/`. No build step; every path is relative, so double-clicking `index.html` works. Goes live at `/v2/` of the `parents-mattress-draft` repo (new folder only).

## Photos (all Unsplash License, free for commercial use, no credit required; credited here anyway)
- `img/hero.jpg`: Costa Live, quilted mattress top (photo-1759176171789-0aa3f84d15ca).
- `img/bedroom.jpg`: white bedroom with a made bed (photo-1741559935512-3b018321e35f). Chosen because it has no brown textile or floor.
- `img/farmhouse.jpg`: no longer used on the page (the mileage block was cut on 2026-11-10). Safe to delete.
Licenses were not re-read on the Unsplash pages today.

## When Dad's photos are used
His nine photos are in `ONWARD\teams\PARENTS\reference\dad photos`. Most show a brown-gray wood floor and a brown throw, and some show another brand's label, so crop tight to mattress top and side (image1 is the strongest) and save over `img/hero.jpg` at the same crop. Never show the house.

## Text number
`config.js` holds the one number buyers text (`textNumber`, digits with country code, currently 859-962-7610). Every "Text us" button reads it. With scripts off the Text buttons stay hidden and the Email buttons still work.

## What we have now
A plain line saying stock changes every week and to ask for the size. The inventory list comes later; until then do not list stock by hand.

## Domain
See `DNS.md` for the records to add at Namecheap. Not to be done until Hunter approves the preview.

## When Hunter approves (one commit)
1. `index.html`: delete the `draft-bar` and `draft-mark` lines and the `robots` meta.
2. `styles.css`: delete the DRAFT block (optional).
3. `vercel.json`: remove the `X-Robots-Tag` header. `robots.txt`: `Disallow: /` becomes `Allow: /`.

## Fonts
Overpass (400, 600, 800, 900), SIL OFL, license in `fonts/OFL-Overpass.txt`. The footer signature is `img/website-by-bench.png` (Website by BENCH, the Lit by the fire style Hunter chose on 2026-10-08), a plain image, no font needed.
