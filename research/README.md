# Luxury Mattresses for Less: website (DRAFT)

One plain page: `index.html`, `styles.css`, `copy.js`, fonts in `fonts/`, pictures in `img/`. No build step. Push to `main` and Vercel puts it live at https://parents-mattress-draft.vercel.app/research/ (this version). Every path is relative, so the folder also opens straight from a file (double-click `index.html`).

`logo sheet.html` shows both logo choices at every size, on light and dark.

## Add a photo
In `index.html`, find the comment that starts `PHOTO:`. Put the photo in `img/` (for example `img/mattress-1.jpg`, about 1200 by 900 pixels), then replace the `<p class="photo-empty">` line with the `<img>` line in the comment, and describe the mattress in its `alt` text. Real photos only. Before adding one, check it does not show the house, the street or anything that gives away the address. If photos never come, delete the whole `<figure class="photo">`; the page is finished without it.

## Add the Facebook Marketplace link
Find the comment that starts `FACEBOOK:` and swap the sentence above it for the linked one in the comment, pasting the real address where it says `PASTE-LINK-HERE`.

## Show what's in stock now
Find the comment that starts `IN STOCK:`. In the list under it, copy the example row once for each mattress (size, brand, price), fill it in, and delete the word `hidden` from the `<section id="in-stock" ... hidden>` line. Only list what is really there. To hide the list again, put `hidden` back.

## When Hunter approves (remove the DRAFT marking, in one commit)
1. `index.html`: delete the `<div class="draft-bar">` and `<div class="draft-mark">` lines and the `<meta name="robots" ...>` line.
2. `styles.css`: delete the "DRAFT marking" block (optional; nothing uses it once the two lines are gone).
3. `vercel.json`: remove the `X-Robots-Tag` header.
4. `robots.txt`: change `Disallow: /` to `Allow: /`.
5. If the site moves to a .com, change the `og:image` address in `index.html` to the new one.

## Logos
Drawn by `make-logos-fable.mjs` in the job folder (`ONWARD\teams\PARENTS\jobs\003\work`), which writes every logo, favicon and `og.png` into `img/` (lettering in Century Schoolbook, TeX Gyre Schola). The ONWRD credit is the ONWRD kit's full-color `onwrd-primary-for-dark.svg`, copied unmodified: Hunter wants the ONWRD tag on this site in color, always.

## Fonts
One family everywhere: Century Schoolbook, in its free form TeX Gyre Schola (regular, italic, bold, bold italic), under the GUST Font License, which allows web use. The license is in `fonts/`. The files are subset to Latin and converted to woff2 with fontTools. The only other face on the page is the yellow DRAFT bar (Arial), which goes away with the DRAFT marking.

## The layout
The page is one bordered sheet of boxes (`.sheet`) whose 2px gaps show the ink background as the rules. To add or move a box, give it `class="box"` and, on wide screens, a `grid-column` in `styles.css`. Colors: shiplap white, ink, ticking blue, and a sale-tag red for prices and the claim line. No brown.
