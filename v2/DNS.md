# Pointing luxurymattressesforless.com at this site (NOT YET: wait for Hunter's approval of the preview)

The domain was bought at Namecheap. The site is hosted on Vercel (project `parents-mattress-draft`).

## What Hunter will do, in this order
1. In Vercel: open the project, **Settings**, then **Domains**, then **Add Existing**. Add `luxurymattressesforless.com` and also `www.luxurymattressesforless.com`. Vercel then shows the exact record values for this project.
2. In Namecheap: **Domain List**, **Manage** next to the domain, then the **Advanced DNS** tab.
3. Delete the records Namecheap put there by default (the parking `CNAME` for `www` and the `URL Redirect` for `@`). They conflict.
4. Add these two records, copying the values Vercel shows on its Domains page:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | the A record value Vercel shows for the apex domain |
| CNAME Record | `www` | the CNAME value Vercel shows for `www` (this project's own `...vercel-dns-017.com` address) |

5. Wait a few minutes (up to a few hours). Vercel's Domains page changes to **Valid Configuration** when it works.

## Why the exact values are not written here
Vercel's own docs (read 2026-11-10) say the apex domain uses an A record and a subdomain uses a CNAME, and that each project has its own CNAME value, so the values are not the same for every project. The right ones are on the project's Domains settings page. Do not copy values from other projects or old guides.

## Two things to settle before launch
- **Which page the domain shows.** This Vercel project serves the whole repo, so the domain would show the older page at the root, not `/v2/`. Before pointing the domain, either move v2 to the root of this repo or add a rewrite from `/` to `/v2/`. Not done yet.
- **The DRAFT marking.** noindex, the robots file and the DRAFT bar stay until Hunter approves launch (see the README).
