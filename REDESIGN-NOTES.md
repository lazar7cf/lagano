# Cafe Lagano redesign

The existing vanilla HTML/CSS/JavaScript stack and `index.html` / `menu.html` routes are retained. No runtime dependency, framework, or build step is required. Serve this folder as static files.

## Shared content and menu maintenance

- `styles.css` contains the shared colors, typography, spacing, responsive layouts, buttons and motion rules.
- `script.js` progressively enhances the shared mobile navigation, Berlin-time opening indicator, menu search and category navigation. The navigation and complete menu remain available without JavaScript.
- `partials/header.html` and `partials/footer.html` are the single source for both pages' shared markup.
- `assets/data/menu.json` preserves the original seven categories and all 83 entries, including descriptions, serving sizes, duplicate Latte Macchiato variants, spelling, and the Sahne surcharge.
- Menu prices display German decimal commas without changing their values. Menu structured data is generated from the same source. Sahne remains a surcharge rather than a misleading standalone offer.
- After changing shared markup or menu data, run `node scripts/sync-content.mjs`. The checked-in pages include the complete resulting HTML, so hosting requires no Node installation.

## Verification commands

```sh
node --check script.js
node --check scripts/sync-content.mjs
node --check scripts/check-site.mjs
node scripts/sync-content.mjs --check
node scripts/check-site.mjs
git diff --check
```

There was no package manifest, lint setup, test runner, or build command in the original project. The dependency-free checker validates local files and anchors, metadata, image dimensions/alt text, local fonts, and the generated menu/price metadata. Browser checks additionally cover responsive rendering, menu data against the original Git version, search, category anchors, mobile navigation, no-JavaScript access and opening-status boundaries.

For local preview: `python -m http.server 4173 --bind 127.0.0.1`, then open `http://127.0.0.1:4173/`.

## Temporary photography

**Temporary placeholder photography — replace with real Cafe Lagano photography before production.**

All live photography is locally stored in `assets/images/placeholders/`, with optimized 640px and 1280px WebP variants (also 1600px for the hero). The hero additionally uses AVIF with a WebP fallback, reducing the 1280px image from 753KB to 245KB and the mobile variant to about 54KB. Photos describe the mood and are not photographs of Cafe Lagano, its actual premises, staff or customers. Alt text intentionally describes the pictured scene without claiming otherwise.

Replace image variants with real photography of equivalent dimensions. The shared `object-fit`, `object-position`, aspect ratios and reserved heights keep the layout independent of the exact composition. Adjust focal points in `styles.css` if needed.

Sources, downloaded October 3, 2026, under the [Pexels license](https://www.pexels.com/license/):

| Asset stem | Source |
| --- | --- |
| `hero-cafe` | [Three hands holding espresso cups](https://www.pexels.com/photo/three-hands-holding-espresso-cups-on-wooden-table-36087314/) |
| `cafe-interior` | [Sunlit café table and wooden chairs](https://www.pexels.com/photo/cafe-table-in-a-wooden-interior-lit-by-the-sunlight-13696472/) |
| `barista` | [Pouring milk into coffee](https://www.pexels.com/photo/close-up-shot-of-a-person-pouring-latte-on-a-cup-of-coffee-5461658/) |
| `coffee-detail` | [Cappuccino on a wooden table](https://www.pexels.com/photo/close-up-shot-of-a-cup-of-cappuccino-on-a-saucer-10356006/) |
| `cafe-social` | [Two people holding coffee cups](https://www.pexels.com/photo/close-up-photo-of-people-holding-cups-8351183/) |
| `drinks` | [Aperitif on a café table](https://www.pexels.com/photo/glass-with-aperol-on-a-table-19143385/) |

Selected photographs were visually checked for unrelated café logos and signage. The original `hero.png` visibly says “AURA CAFE” and is no longer referenced. All original image files are retained for project history, but none appear on the redesigned pages.

Archivo and Instrument Serif are self-hosted WOFF2 fonts. Their SIL Open Font License files are included in `assets/fonts/`; no Google Fonts request is made by the site. Archivo supplies the sturdy café-signage voice for body copy, navigation and menu headings; Instrument Serif preserves the existing wordmark and selected conversational headings.

## Refinement pass

The shared system uses deep olive fields, warm paper, sharp rectangular photographs and open typographic rows. The homepage now moves from a shared coffee scene through one concise Balkan hospitality passage, actual drinks and prices, then hours and directions. Unequal image sizes and a compact mobile composition replace repeated split sections. The map remains available in a native disclosure beside the real directions link.

The drinks page uses a compact introduction, sticky category navigation, a search line, and aligned names and prices. Its photographic breaks have different scales rather than repeated decorative containers. Homepage drink selections are generated from the existing menu JSON alongside the complete menu and structured data.

This pass was visually reviewed on both routes at desktop and mobile widths, with overflow and price wrapping checked at 375, 390, 430, 768, 1024, 1440 and 1512 pixels. Browser checks covered search, empty-result recovery, category navigation, keyboard dismissal of the mobile navigation and the map disclosure. The independent finish review found no material visual defect. Temporary photography remains easy to replace with real venue images.

## Business content requiring confirmation

The following original values appear to be placeholders and are intentionally excluded from the public website and structured data:

- Phone: `+49 (0) 7031 123456` / `tel:+497031123456`.
- Email: `hello@cafelagano.de`.
- Instagram: `https://instagram.com` (generic service homepage, not a Cafe Lagano profile).
- Three unsubstantiated testimonials from Maria K., Stefan B. and Anna M., plus their aggregate rating and dates.
- The unconfirmed `cafelagano.de` canonical/business URL and venue-specific geo pin.

Add confirmed contact, reservation and Instagram destinations to the shared header/footer and visit sections before production. Until then, visit CTAs use the existing Google Maps directions URL; there is no fake reservation flow or made-up profile.

Address and hours are retained from the original homepage and JavaScript:

- Marktplatz, 71063 Sindelfingen.
- Monday–Thursday: 09:00–22:00.
- Friday–Saturday: 09:00–23:00.
- Sunday: 10:00–21:00.

The old menu footer's conflicting `Mo–So: 09:00–22:00` summary was removed. The existing Maps directions URL and Marktplatz map embed are retained. The status indicator uses Europe/Berlin rather than the visitor's timezone and correctly handles Saturday-night/Sunday and Sunday-night/Monday opening times. These regular hours do not assert special holiday hours.
