# Luxury Mattresses for Less: website v4 (DRAFT), "The quiet showroom"

Second redesign, built 2026-11-10 after Hunter's note on v3: the gold was harsh and the tone too "fun". A very cheap name-brand mattress makes people assume something is wrong with it, so the site's first job is to look clean and professional. v2 and v3 are left in place for comparison.

Plain page, no build step: `index.html`, `styles.css`, `config.js`, `copy.js`, fonts in `fonts/`, images in `img/`.

## The idea
- White, soft linen gray, charcoal and one deep navy. No bright color anywhere.
- Newsreader (serif) for headings, Hanken Grotesk for reading. Both SIL OFL, licenses in `fonts/`.
- The headline leads with quality ("returned like new"), and the price follows in the next sentence.
- The answer to "what's the catch" is on the page three times: four plain assurances under the hero, the "Where they come from" section, and a short "Fair questions" list that starts with "Are these used mattresses?".
- Prices are a quiet three-line list, not a sticker.

## For the buyer
Phone: Text us and Email stay at the bottom of the screen. The five size buttons open a text that already names the size. With scripts off, Text buttons open a blank text and size buttons open an email.

## Wording added in v4 (Hunter to confirm)
- "Online mattress brands let people try a mattress at home and send it back." (general background)
- "You come by appointment, look it over and lie on it, and you only pay if you want it."
- Not claimed, because not confirmed: that the mattresses are cleaned or sanitized. If the parents do that, it is the strongest line the page could carry.

## Photos
Still the two Unsplash photos from v2 (`bedroom.jpg`, and `quilt.jpg` cropped from `hero.jpg`). Real photos of their mattresses in a clean bright room would help most.

## When Hunter approves
Same steps as `v2/README.md` and `v2/DNS.md`. Launch moves the chosen version to the repo root.

## In stock now (added 2026-11-10, Hunter's idea)
Each mattress shows the maker's list price with a link to the maker's own product page, next to our price, so a buyer can check the saving themselves. The three rows on the draft are EXAMPLES (marked on the page): the model names and list prices are real (read from saatva.com and helixsleep.com search results on 2026-11-10, sizes not double-checked), but they are not the parents' stock and "our price" is made up. Replace with real stock before launch, and remove the Example pills. Later the inventory tool writes these rows.
Wording choice: "Maker's list price", not "retail", because makers are nearly always running a sale. The note under the list says so.

## First screen comparison (added 2026-11-10, Hunter's request)
Two featured mattresses sit on the first screen under "In stock now": maker's price (a link to the maker's live page) beside our price. Also examples for now. Stock wording changed: the plan is a live inventory list (phone entry or a scanner), so the page says the list is live and a mattress comes off when it sells. That sentence is only true once the inventory tool exists; do not launch with it before then.

## Changes from Hunter's notes, 2026-11-10 evening
- Headline is now "High-end, like-new mattresses, typically 70 to 80% under retail." ("returned" was unclear). Starting prices moved into the paragraph under it.
- Each maker price has a small green dot that pulses (2.4s, off for people who ask for reduced motion). "live at" is gray text; only the site name is a blue underlined link.
- No explanatory small print under the lists. The Example pills are gone; the draft bar says the mattresses and prices are examples.
- Before launch: the maker prices must really be current. Plan a daily automatic check of each linked page, or drop the word "live" and the dot.
- 21st.dev was reviewed signed out (notes in Hunter's Drive, "Mattress site - 21st.dev design picks"). Borrowed: the ping timing idea for the live dot, a plain white hero, a clearly colored link.
