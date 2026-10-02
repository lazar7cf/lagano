---
name: Cafe Lagano
description: Warm café window lettering, open drinks rows and a table shared with friends.
colors:
  cream: "#f2eee6"
  sand: "#e6ded1"
  ink: "#20201d"
  muted: "#625e54"
  olive: "#445038"
  olive-light: "#d7ddcc"
  espresso: "#34261f"
  clay: "#944d36"
  line: "rgba(32,32,29,.18)"
  light-line: "rgba(242,238,230,.3)"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(38px,4.4vw,64px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.035em"
  display-serif:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(54px,6.2vw,88px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(42px,4.2vw,60px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.025em"
  menu-headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(48px,4.6vw,66px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.025em"
  title:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.025em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
  text-link:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
  navigation:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  menu-item:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
  menu-price:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.6
  menu-meta:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
  caption:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
  wordmark:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "43px"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "-.03em"
rounded:
  square: "0"
spacing:
  gutter: "clamp(20px,4.5vw,64px)"
  step-12: "12px"
  step-16: "16px"
  step-20: "20px"
  step-24: "24px"
  step-30: "30px"
  step-36: "36px"
  step-48: "48px"
  step-64: "64px"
  step-80: "80px"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 19px"
  button-primary-hover:
    backgroundColor: "{colors.espresso}"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.olive}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "14px 19px"
  button-light-hover:
    backgroundColor: "{colors.olive-light}"
  text-link:
    typography: "{typography.text-link}"
    padding: "10px 0"
  text-link-hover:
    textColor: "{colors.clay}"
  search-field:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "12px 44px 12px 30px"
    width: "100%"
  category-navigation:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
  menu-item:
    textColor: "{colors.ink}"
    typography: "{typography.menu-item}"
    padding: "14px 0"
  menu-item-regional-name:
    textColor: "{colors.olive}"
  hours-row:
    textColor: "{colors.cream}"
    typography: "{typography.body}"
    padding: "19px 0"
  map-disclosure-summary:
    textColor: "{colors.cream}"
    padding: "14px 0"
---

# Design System: Cafe Lagano

## Overview

**Creative North Star: "Café Window Lettering"**

Café Window Lettering gives Lagano a sturdy, welcoming voice: clear signage, a familiar serif name, warm paper and deep olive surfaces. The atmosphere is that of a contemporary European neighbourhood café, with Balkan sociability expressed through conversation and the real drinks rather than decorative cultural motifs.

The system is open and editorial. Strong type, unequal rectangular photographs and deliberate space carry the identity; useful rules organize information. It should feel relaxed and human, with enough visual confidence to avoid a generic café template. The pinned brand brief rejects luxury restaurant styling, SaaS presentation, decorative cards and pills, gradients and excessive shadows.

**Key Characteristics:**

- Sturdy Archivo signage with a preserved Instrument Serif wordmark.
- Deep olive fields and warm paper, with clay reserved for interaction accents.
- Open typographic rows, clear reading rails and aligned prices.
- Sharp photographs at varied scales, with natural café light.
- Short, calm state transitions and complete reduced-motion support.

## Colors

The palette combines earthy depth with warm paper; all normative color values are in the frontmatter and come directly from the stylesheet.

### Primary

- **Deep Olive** (`olive`): large identity fields, principal controls, category navigation, regional drink emphasis and text selection.
- **Pale Olive** (`olive-light`): supporting text and status indicators on olive, light-button hover and category scrollbar detail.

### Secondary

- **Warm Clay** (`clay`): link hover and the visible keyboard focus outline on paper. Its job is to signal an action, rather than decorate a section.
- **Espresso** (`espresso`): the darker hover state of the olive primary button.

### Neutral

- **Warm Paper** (`cream`): the page and shared header, light buttons, and primary text on olive fields.
- **Natural Sand** (`sand`): the fallback surface beneath photographs and the map.
- **Charcoal** (`ink`): principal text and the search underline.
- **Warm Gray** (`muted`): secondary copy, sizes, captions, metadata and placeholders on paper.
- **Paper Rule** (`line`): understated separators for menu rows, footer details and the mobile navigation.
- **Olive Rule** (`light-line`): separators in opening hours and the map disclosure on olive.

**The Field and Signal Rule.** Olive and paper establish the atmosphere; clay marks hover and focus. Preserve the light text and light focus treatment when a control sits on olive.

## Typography

**Display and Body Font:** Archivo, with Arial and sans-serif fallbacks.

**Wordmark and Selected Headline Font:** Instrument Serif, with Georgia and serif fallbacks.

**Character:** Archivo brings the directness of café signage and keeps the menu easy to read. Instrument Serif preserves the recognizable lowercase name and adds a conversational voice to selected headlines; it is not applied to every heading. Both families are self-hosted with `font-display: swap`; Archivo is supplied as a variable face (400–700), and Instrument Serif as normal and italic faces (400).

### Hierarchy

- **Display:** the bold sans headline and its larger serif phrase use the `display` and `display-serif` roles. The serif phrase is italic. Both are tightly spaced, with the actual desktop clamps in the frontmatter; mobile recomposes them into separate lines and uses (31–46px) sans and (48–65px) serif clamps.
- **Headline:** the `headline` role serves conversational section headings. The menu's main title has its own `menu-headline` role. Mobile section headings use a (37–48px) clamp; the menu title uses a (38–46px) clamp and (1.03) line height.
- **Title:** category names use the sturdy `title` role, reducing from (26px) to (25px) on mobile. They form reading rails rather than decorative labels.
- **Body:** the `body` role is the (16px) base at (1.6) line height. Secondary story copy reduces to (15px) on phones. The source limits story copy to (43ch), menu introduction to (55ch), and hero copy to (29ch) on desktop or (42ch) on mobile.
- **Label and Navigation:** controls use the `label` role; desktop navigation uses `navigation`. Mobile navigation grows to (16px) and category links use (13px). These roles remain sentence case.
- **Menu:** names use `menu-item`, sizes use `menu-meta`, and prices use `menu-price`. Prices use tabular numerals and never wrap. Names may wrap; regional names use olive and (600) weight. At the (1100px) breakpoint names and prices use (15px), returning to (16px) in the single-column mobile menu.
- **Caption and Wordmark:** captions are quiet `caption` text, reducing to (11px) on mobile. The wordmark is lowercase serif at the `wordmark` role, reducing to (37px) on mobile. The existing small CAFE lockup belongs to this identity asset; it is not an eyebrow pattern for new sections.

**The Two Voices Rule.** Use Archivo for information and sturdy signage; reserve Instrument Serif for the name and selected conversational emphasis. Do not repeat a serif-and-italic heading formula throughout a page.

## Layout

The centered container is `min(calc(100% - var(--gutter)*2),1280px)`. Its fluid gutter is the actual `gutter` token, maintaining at least (20px) per side and up to (64px). Spacing is not a strict mathematical scale: the frontmatter records repeated values, while the source adjusts section padding and component gaps to the content.

Desktop compositions use unequal columns and shared baselines. The hero uses (1.8fr / .8fr), tightening to (1.6fr / 1fr) below (1100px); the story uses a (12-column) grid with a (24px) gap. The preview uses (1.7fr / .7fr). These are examples of the broader rule that photographs and text may have different weights, rather than a mandated page template.

The menu gives category headings a separate rail: category/content columns are (.55fr / 1.45fr) with a (50px) gap, changing to (.6fr / 1.4fr) and (30px) below (1100px). Items form two columns separated by (38px), then (26px). Each item uses a flexible name column and an automatic price column. On phones, headings precede a single list of rows; existing anchor IDs continue to identify categories.

The shared header is sticky, with a desktop height of (80px) and mobile height of (72px). The category bar sticks below it at (56px), or (52px) on mobile. Anchor offsets account for both bars. At `max-width: 767px`, primary compositions stack, the story becomes a (6-column) grid, the category rail scrolls horizontally, and the navigation becomes a short dropdown. Without JavaScript, navigation links remain visible and the complete menu remains readable.

Photography is clipped into sharp containers with `object-fit: cover`. The hero aspect ratio changes from (1.4) to (1.17), and the main story photograph from (1.5) to (1.3). Smaller photos may be portrait or nearly square; each crop has its own focal point. Preserve reserved image dimensions and adjust `object-position` when replacing temporary photographs with real café images.

Print CSS hides the navigation, tools, photographic breaks and visit/footer furniture; the menu stays printable, with (8px) row padding and category sections protected from page breaks where possible.

**The Open Reading Rule.** Separate content with whitespace and useful rules. Keep names and prices in aligned rows, with flexible names and unbroken prices, instead of placing each drink inside a container.

## Elevation & Depth

There are no box shadows, gradients, translucent panels or decorative raised surfaces. Depth comes from olive/paper alternation, photographic scale and the contrast between heavier signage and quieter copy. Sticky layers use the existing header/category stacking order (20 / 10); the keyboard skip link sits above them (40). Fine rules organize data without making it look boxed in.

**The Flat Surface Rule.** A component is flat at rest and during interaction. Use color, underlining and visible focus to communicate state; do not add elevation to simulate affordance.

## Shapes

The form language is sharp: buttons and the search input explicitly use the `square` radius, and photographs remain rectangular. Menu rules and navigation underlines are straight and purposeful. The one round status dot is a tiny functional exception (6px diameter, 50% radius), paired with written open/closed text; it is not a source for rounded component styling.

Arrow, search and disclosure controls use restrained inline SVG. The recurring arrow is (20px) with a (1.5) stroke; it supports a destination or action. Do not multiply icons as decoration. The current search-clear × glyph is excluded from the reusable icon vocabulary under the documenter's craft-floor rule.

## Components

### Buttons

Direct, rectangular actions with calm color states.

- **Primary:** olive/paper with the `button-primary` padding, (52px) minimum height, (26px) internal gap, and (14px / 500) label text. Hover moves to espresso.
- **Light:** paper/olive on an olive field; hover moves to pale olive. The source uses this same pairing for the visit actions.
- **Text Link:** an underlined text action with a (44px) minimum height, (22px) gap and (1px) bottom border. Default paper-surface hover is clay. On olive, supporting links are pale olive and brighten to paper on hover.
- **Focus:** the global outline is (2px) clay with a (5px) offset. Controls on olive use paper. Color transitions last (250ms) with the shared easing. No pressed, loading or disabled variants are currently defined.

### Inputs / Fields

The menu search is a reading tool, not a boxed form.

- **Style:** transparent background, a charcoal (1px) bottom border, square corners, the frontmatter padding and a (50px) minimum height. The desktop field wrapper is at most (340px); mobile is full width. A muted search SVG sits at the left, and the caret is olive.
- **Focus:** the global clay outline remains visible; the placeholder retains the muted color at full opacity.
- **State:** results update in a polite live region. A non-empty query reveals a (44px) clear target; Escape clears and restores input focus. An empty-result state offers the primary reset action. Search controls appear only after JavaScript enhancement, preserving the complete static menu. Error and disabled states are not defined.

### Navigation

Clear links with an understated state indicator.

- **Shared navigation:** desktop links have (44px) minimum targets, (30px) gaps and a (1px) underline that expands from the left on hover or the current page. The visit link uses olive and (600) weight.
- **Mobile:** links have (48px) minimum targets. The enhanced navigation is an anchored paper dropdown with a bottom rule; it does not take over the screen. The toggle exposes `aria-expanded` and `aria-controls`, and its two (1px) lines rotate into a close shape. Escape closes it and restores toggle focus. Clicking a link, clicking outside or leaving it with keyboard focus closes it.
- **Categories:** the olive rail has a (2px) paper underline for hover and the current reading location. Desktop gaps are (30px), mobile gaps (24px). Keyboard focus uses a paper outline with an inward offset (-4px). Selection clears search to expose the complete category; the current category scrolls into view when needed. The category transition lasts (300ms).

### Menu Rows

Open, precise and easy to scan.

- **Shape:** no surrounding card, background fill or radius; a (1px) paper rule separates rows.
- **Spacing:** the frontmatter row padding and an (18px) name/price gap; desktop minimum height is (64px), mobile (56px).
- **Content:** names and prices stay aligned at the baseline. Sizes sit beneath names at (4px) separation. Regional drinks use an olive (600) name, without adding a badge. Prices and sizes remain factual content from the menu data.

### Opening Hours and Status

Hours use paired day/time rows on olive, separated by light rules. Rows have (19px) vertical padding on desktop and (17px) on mobile; times use tabular numerals and do not wrap. The opening indicator pairs its small dot with explicit text, using pale olive for open and paper for closed. Do not rely on color alone to convey status.

### Map Disclosure

A native disclosure keeps the map accessible while making the directions link easy to reach. Its summary has a (52px) minimum target and a light top rule, with pale-olive hover and paper focus. The inline plus rotates (45deg) when open over (250ms). The map is (280px) tall on desktop and (230px) on mobile. The supplied map and route remain the existing verified destinations.

### Motion and Accessible State

The shared easing is `cubic-bezier(.16,1,.3,1)`. A single already-visible hero image settles from scale (1.025) to (1) over (850ms), and only when `prefers-reduced-motion: no-preference` matches. There are no hidden reveal sequences. With reduced motion, CSS disables all animation and transition, native anchor scrolling becomes immediate, and JavaScript category-rail scrolling uses its instant mode.

Keep semantic headings, descriptive image alternatives, the skip link, visible focus, external-destination announcements and adequate targets. Inline decorative SVG is hidden from assistive technology. Preserve actual `aria-current`, `aria-expanded` and live-region states rather than styling a visual imitation of them. The focus-free main target exists only as the skip link's destination.

## Do's and Don'ts

### Do:

- **Do** use the frontmatter's exact olive, paper and text colors with their established light/dark roles.
- **Do** keep Archivo as the information voice and preserve the lowercase Instrument Serif wordmark.
- **Do** build clear reading rails and aligned rows with flexible names, unbroken prices and useful rules.
- **Do** vary photograph scale within sharp containers and keep images replaceable through reserved dimensions and adjustable crops.
- **Do** use visible keyboard focus, written status, semantic state attributes and the complete reduced-motion behavior.
- **Do** keep menu facts and destinations tied to the project's existing verified sources.

### Don't:

- **Don't** introduce cards around every item, nested cards, pill controls, giant radii, gradients, glass effects or decorative shadows.
- **Don't** turn every section into the same serif-and-italic split composition or add repeated eyebrow labels.
- **Don't** use cultural motifs, luxury cues or decorative icons as a substitute for the café's warm, sociable character.
- **Don't** hide the menu or navigation behind JavaScript, or let sticky controls cover anchor targets.
- **Don't** add reveal choreography, parallax or looping decorative motion to the restrained interaction vocabulary.
- **Don't** present temporary café photographs as actual Lagano premises, staff or customers, or invent prices and business details.
