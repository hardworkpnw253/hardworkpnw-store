# HardworkPNW Storefront — hardworkpnw.store

Production-ready static storefront for the "HardworkPNW 2nd Chance Rebel Workwear" brand.
No build step. Pure HTML/CSS/JS + JPEG assets. Safe to deploy as-is to Vercel static hosting.

## Deploy (Vercel)
- Framework preset: **Other** (static). No build command, no output directory overrides.
- Entry point: `index.html` at the project root.
- Point the `hardworkpnw.store` domain (root + www) at the Vercel project per the DNS setup.

## Structure
- `index.html` — single-page site: nav, hero, values ticker, shop (first drop + Empire
  Collection), ten-brand empire section, brand board, story, contact, footer, order modal.
- `assets/css/style.css` — full stylesheet (light/dark via prefers-color-scheme, responsive).
- `assets/js/main.js` — mobile menu, nav scroll state, order-inquiry modal. No dependencies.
- `assets/img/` — 18 JPEGs extracted from the preview artwork and compressed for web (~2.2 MB total).

## Content notes
- All 15 products, names, descriptions, prices, and Etsy market ranges are copied verbatim
  from the preview file `~/workspace/your_files/hardworkpnw-2nd-chance-workwear/`.
- 11 product images are the real concept renders; 4 products (jacket, beanie, sticker pack,
  pendant) use the preview's CSS graphic placeholders — no real photos exist for those yet.
- No checkout backend by design. "Message us to order" opens an inquiry modal with the real
  contact channels: call 564-654-3734, email Hardworkpnw@yahoo.com, Facebook message.
- Fonts load from Google Fonts CDN (Oswald + Barlow Condensed). Everything else is local.
