# Style Guide — Blackline Motor Company

Premium pre-owned car dealer, Dubai (Ras Al Khor). Buy · Sell · Consignment.
A 2026 redesign of the old WordPress/Elementor site. Dark, cinematic, editorial.

## Logo colours (pixel-extracted)
The logo + icon are **strictly monochrome** — pixel analysis of the brand mark returned
only black `#000000` and white `#ffffff` (plus anti-alias greys). There is no colour in
the brand. The mark is a white **B** with a diagonal **line** through it — the brand is
literally *Black* + a *line*.

| | Hex |
|---|---|
| Primary | `#000000` (black) |
| On-dark text | `#ffffff` (white) |

Because the logo is monochrome, the accent is **derived, not copied**: a single restrained
warm metal (champagne) is used *sparingly* for prices, primary CTAs and hairline highlights.
This differentiates Blackline from the gold-saturated reference builds while staying
Dubai-premium. The signature **diagonal line** from the logo returns as a graphic motif
(`.bl-line`, section accents).

## Palette (dark monochrome — single source of truth: `src/styles/global.css :root`)
| Token | Hex | Use |
|---|---|---|
| `ink` | `#09090B` | Page ground |
| `coal` | `#101013` | Alternating section |
| `graphite` | `#16161A` | Cards / panels |
| `steel` | `#24242A` | Raised / border fill |
| `ivory` | `#F3F1EA` | Primary text on dark |
| `mist` | `#ABA69C` | Secondary text |
| `faint` | `#74716A` | Tertiary / labels |
| `gold` | `#C7A977` | Accent — prices/CTAs/hairlines ONLY |
| `gold-lite` | `#E2CCA2` | Highlight / hover |
| `gold-deep` | `#9E8254` | Deep metal / borders |

Logo-pixel analysis has priority. Accent used sparingly by design.

## Type
- **Display:** Sora (architectural geometric sans) — confident, modern, austere. Chosen over a
  serif to differentiate from the reference builds and match the black-and-white "line" identity.
- **UI / specs / prices:** Inter — clean, tabular numerals for AED prices and mileage.
- Self-hosted woff2, latin subset only, `font-display: optional` → CLS ≈ 0.

## Imagery
All inventory photos are the dealer's own **studio shots on a light seamless backdrop** with a
baked-in BLACKLINE watermark. Rather than force a muddy dark overlay, the design frames these
light photos against the deep-black page — a **gallery / lightbox** aesthetic that embodies the
black-and-white brand. Cars sit in rounded dark frames; the black surrounds the white photo.

## ★ MOBILE RULE (non-negotiable)
Every vehicle / brand grid is `grid-cols-1` on mobile → `sm:grid-cols-2` → `lg:grid-cols-3`.
**Never two cars side-by-side on a phone.** The multi-step sell wizard is single-column with
52–54px touch targets and a clear step indicator. Tested at 390px.

## Voice
Confident, concise, trust-building — English (Dubai/international). Verbatim trust language:
"Top Prices for High-Spec Vehicles", "Free no obligation price", "Instant Payment, No Fees",
"Sell your car in 4 easy steps". No market-shouting, no invented claims, no fake reviews.

## Components
`Nav` (floating glass pill, Buy mega-menu by make/body, Call + WhatsApp + Get-my-valuation),
`Hero` (split: headline + framed flagship), `SellWizard` (2-step valuation → WhatsApp lead),
`CarCard` (image carousel, wishlist, AED price + monthly + specs), `BrandGrid`, `WhyChooseUs`,
`Footer`. Wishlist via `localStorage` (key `bl-wishlist`). Cookie/consent note, no tracking.

## Tech
Astro 5 static · Tailwind v3.4 · @lucide/astro (icons only, no emojis) · @fontsource (Sora+Inter)
· Content Collection `cars` (100 real vehicles) · `/dist` HTML · Cloudflare Pages.
