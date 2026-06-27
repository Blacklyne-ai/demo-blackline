# Judgement Calls & Operator TODOs — Blackline Motor Company

A demo rebuild of blacklinemotorcompany.com. Content is scraped **verbatim** from the live
site; nothing about cars, prices or reviews is invented. Items below need an operator decision
or a real data source before production / go-live.

## Data sources
- **Inventory (100 cars):** scraped from the WordPress REST API (`/wp-json/wp/v2/blackline-cars`)
  plus the rendered JetEngine detail pages (for clean make/model/colours/engine and the full
  spec description). Stored as a static snapshot in `src/content/cars/*.json`. **Production:**
  couple to a live feed (WordPress headless / JetEngine export) so stock stays current.
- Galleries capped at **6 photos per car** for demo weight (source has ~20 each). Raise the cap
  when wired to a CDN. Images optimised to ≤1600px webp (119 MB → 30 MB).
- Vehicle descriptions: the marketing "BUY NOW, PAY 2027" boilerplate (identical on every car)
  was stripped; the real per-car spec block is kept verbatim.

## Sell / valuation form (the core flow)
- The multi-step wizard validates and composes a **WhatsApp** message with the vehicle + contact
  details (interim, no backend). **Operator-TODO:** decide where leads go — email / WhatsApp
  Business / CRM (e.g. GHL) — and wire a real endpoint. Add GDPR/PDPL consent before any tracking.
- Make + Year + Regional-Specs are required (Model required too, as on the source); Kilometers
  optional. Make/Year/KM/Specs option lists are **verbatim** from the source form.

## Contact / location
- Phones, WhatsApp (+971 54 212 2197), email and the Ras Al Khor address are per the operator
  brief + site footer. **The site also announces a relocation** to "Showroom 54, Block 4,
  Ras Al Khor" (their `/new-showroom` page). **Operator-TODO:** confirm the current trading
  address before go-live and update `src/data/site.ts`.
- **Google Place ID:** not found in the site source. The map uses a text query embed and the
  real Google review short-link (`g.page/r/CRX-W0607VMaEAE`). The "466 reviews · 5/5" figure is
  the verbatim widget value. **Operator-TODO:** supply the Place ID to wire a live rating; never
  fake review content.

## Brands we buy / sell-my-[brand] landing pages
- 12 brands, each with a `/sell-my-[brand]` page (verbatim intro, model list and FAQ). Brand
  marks are rendered as **type**, not logos. **Operator-TODO:** supply licensed brand logo assets
  if real logos are wanted (trademark).

## Previously sold
- The source page is a dynamic JetEngine grid (no static content scraped). The rebuilt page is an
  honest **trust page**: real reviews + verbatim customer testimonials + a representative gallery
  of *current* stock clearly labelled as illustration (no fabricated "sold" claims).
  **Operator-TODO:** connect the real previously-sold feed.

## Legal / brand
- Old "Developed by TiKaNiyyaT" credit **removed**.
- Trade licence / legal firmierung for Dubai (Impressum) is a placeholder — **Operator-TODO**.
- Site language is English only (source is EN). Arabic is a future Operator-TODO if wanted.

## Design judgement calls
- Logo is monochrome → champagne accent is **derived** (not in the logo), used sparingly; the
  diagonal logo "line" is reused as a motif. See STYLE-GUIDE.md.
- Inventory photos are light studio shots → framed against black ("gallery" treatment) rather
  than forced into a dark overlay.
- No hero film: superluxury's rented-car drone clip was removed; the hero uses a real Blackline
  flagship image instead.
