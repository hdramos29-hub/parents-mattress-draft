# Luxury Mattresses for Less: website v3 (DRAFT), "The price tag"

A full redesign of v2, built 2026-11-10. Same facts and claims as v2, new design. v2 is left in place so the two can be compared at `/v2/` and `/v3/`.

Plain page, no build step: `index.html`, `styles.css`, `config.js`, `copy.js`, fonts in `fonts/`, images in `img/`.

## The idea
The business is one fact: the same mattress for a fraction of the price. So the page is built around a price tag.
- A gold price tag hangs off the corner of the mattress photo with the starting prices.
- A two-bar chart shows full retail next to the typical price here (20 to 30% of retail).
- Brands are set as small tags. Dashed lines stand in for quilt stitching.
- Colors: paper, ink, mattress-ticking navy, one price-sticker gold. No brown, no red.
- Type: Zilla Slab for headings and prices, Atkinson Hyperlegible Next for reading (easy on older eyes). Both SIL OFL, licenses in `fonts/`.

## How it works for a buyer
- Phone: a bar with Text us and Email stays at the bottom of the screen.
- The five size buttons open a text that already says which size they want.
- With scripts off, Text buttons still open a blank text and size buttons open an email.

## Settings
`config.js` holds the one number buyers text (`textNumber`, currently 859-962-7610).

## Photo
`img/mattress.jpg` is a crop of v2's `hero.jpg` (Unsplash License, Costa Live). Replace with one of Dad's photos cropped to mattress top and side when available. Never show the house.

## Not changed from v2
Claims and wording of the facts (typically 70 to 80% under retail, under 3 months old, the brand list), prices, delivery line, payment line. Delivery wording waits on the parents' answer.

## When Hunter approves
Same steps as `v2/README.md`: remove the draft bar and robots meta, open up robots, then follow `v2/DNS.md`. Launch moves the chosen version to the repo root.
