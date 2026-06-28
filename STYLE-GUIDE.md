# Style Guide — Blackline Motor Company

Premium pre-owned car dealer, Dubai (Ras Al Khor). Buy · Sell · Consignment.
A 2026 redesign of the old WordPress/Elementor site. **Light, airy, editorial** — warm
white canvas with a few genuinely dark feature bands (consignment band, footer) for
contrast and brand. The inventory photos are studio shots on a light backdrop, so the
cars sit natively as clean white gallery tiles on the bright page.

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

## Palette (LIGHT — single source of truth: `src/styles/global.css :root`)
Token names are kept from the original build but values are LIGHT: `ink` = page ground,
`ivory` = dark text.
| Token | Hex | Use |
|---|---|---|
| `ink` | `#FAF9F5` | Warm-white page ground |
| `coal` | `#F4F1E9` | Sand — alternating section |
| `graphite` | `#FFFFFF` | Cards / panels |
| `steel` | `#E7E3DA` | Light raised / fill |
| `ivory` | `#181613` | PRIMARY dark text + hairlines |
| `mist` | `#5C5851` | Secondary text |
| `faint` | `#918C83` | Tertiary / labels |
| `gold` | `#8E6D36` | Deep bronze accent (readable on white) — prices/CTAs/hairlines |

**Dark feature bands** (consignment band, footer) use a fixed dark palette:
`night #0E0D0B`, `coalnight #16140F`, `cream #F4F2EB` (text on dark), `gilt #C7A977`
(champagne on dark). The black wordmark `logo-ink.png` is used on the light nav; the
white `logo.png` on the dark footer. Logo-pixel analysis has priority; the brand is
black + white, so the site is the *white* half with black structure (nav text, footer,
CTAs) — the literal Blackline duality.

## Type
- **Display:** Sora (architectural geometric sans) — confident, modern, austere. Chosen over a
  serif to differentiate from the reference builds and match the black-and-white "line" identity.
- **UI / specs / prices:** Inter — clean, tabular numerals for AED prices and mileage.
- Self-hosted woff2, latin subset only, `font-display: optional` → CLS ≈ 0.

## Imagery
All inventory photos are the dealer's own **studio shots on a light seamless backdrop** with a
baked-in BLACKLINE watermark. They sit natively on the bright page as clean **white gallery
tiles** (rounded card, hairline border, soft shadow). Badges/controls over a photo are dark
(`coalnight`) so they stay legible against the light studio background.

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
