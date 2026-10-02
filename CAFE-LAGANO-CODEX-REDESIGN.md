# CAFE LAGANO — Full Redesign Brief for Codex

You are working directly inside the existing Cafe Lagano website project.

Your task is to completely redesign the existing website visually and improve its UX while preserving the project structure, existing functionality, routes, and legitimate business information.

The redesign is NOT complete after redesigning the homepage.

You MUST redesign both:

1. The homepage
2. The existing Menu / Getränke / Speisekarte page

---

## 1. FIRST: INSPECT THE PROJECT

Before making any changes, inspect the entire existing project.

Review:

- all source files
- components
- routes
- pages
- CSS / styling system
- assets
- public folders
- current responsive behavior
- existing sections
- navigation
- links
- menu data
- prices
- metadata
- image files
- current framework/build setup

Live reference if useful:

https://lagano.vercel.app/

Do NOT blindly rewrite the project.

Do NOT change frameworks unless there is an exceptional technical reason.

If the project is vanilla HTML/CSS/JS, keep it vanilla.

If it uses React, Next.js, Vite, or another existing stack, work within that architecture.

---

# 2. BRAND

Business:

**CAFE LAGANO**

Location:

**Marktplatz, 71063 Sindelfingen, Germany**

Concept:

Cafe Lagano combines relaxed Balkan café culture with a contemporary European coffee-bar atmosphere.

The personality should feel:

- warm
- relaxed
- social
- stylish
- authentic
- modern
- welcoming
- slightly Mediterranean / Balkan

The name "Lagano" communicates taking things easy, slowing down, sitting with friends, drinking coffee, and enjoying time.

The design should communicate this feeling immediately.

---

# 3. WHAT THIS WEBSITE SHOULD NOT FEEL LIKE

Do NOT make it feel like:

- a luxury fine dining restaurant
- a generic coffee shop template
- a SaaS landing page
- a generic Webflow restaurant template
- an overly experimental portfolio
- a nightclub
- a black-and-gold luxury restaurant
- an AI-generated website

Avoid obvious AI design clichés.

Avoid:

- endless rounded cards
- cards inside cards
- giant border radiuses everywhere
- glassmorphism
- glowing gradients
- floating blobs
- excessive shadows
- neon colors
- random decorative icons
- huge pill-shaped buttons
- icon feature grids
- fake app-style UI

The website should feel like it was designed by a professional hospitality branding studio.

---

# 4. MAIN DESIGN DIRECTION

Create a warm editorial café aesthetic.

Think:

European neighbourhood café  
+ Balkan hospitality  
+ modern specialty coffee shop  
+ subtle Mediterranean influence

The site should feel like a place where someone wants to sit for two hours with coffee and friends.

Use:

- strong typography
- authentic-feeling photography
- warm natural colors
- whitespace
- subtle asymmetry
- editorial layouts
- tactile details
- restrained animations
- simple navigation
- excellent mobile UX

---

# 5. COLOR SYSTEM

Use a warm palette inspired by coffee, wood, olive tones, café interiors, and natural materials.

Suggested palette:

Warm cream background:

`#F2EEE6`

Secondary warm background:

`#E6DED1`

Charcoal text:

`#20201D`

Deep espresso:

`#34261F`

Muted olive:

`#68705A`

Warm terracotta accent:

`#A35F42`

Soft border:

`rgba(32,32,29,0.14)`

Do not let pure white dominate the design.

Use cream/off-white as the main light surface.

Maintain strong accessibility and contrast.

---

# 6. TYPOGRAPHY

Typography should be one of the main parts of the visual identity.

Use an editorial serif for large display headings.

Good directions include:

- Instrument Serif
- DM Serif Display
- Cormorant Garamond
- Playfair Display

Choose whichever fits the project best.

Use a clean modern sans-serif for body/UI text.

Examples:

- Inter
- Manrope
- DM Sans
- Geist

Do not use too many font families or weights.

Large headings can have tighter line-height.

Body copy should remain highly readable.

---

# 7. GLOBAL LAYOUT

Use a centered max-width system of approximately:

`1200–1320px`

Suggested page padding:

Desktop:
`40–64px`

Tablet:
`24–32px`

Mobile:
`18–22px`

Use deliberate vertical spacing.

Let sections breathe.

Do not put every section inside a visible card or container.

Use typography, photography, spacing, and subtle background changes to create rhythm.

---

# 8. PLACEHOLDER PHOTOGRAPHY

There are currently NO real Cafe Lagano photos available.

Do not let this limit the redesign.

Use high-quality temporary café/lifestyle placeholder photography so the website can already look presentation-ready.

The temporary photography should feel like:

- contemporary European café
- warm natural daylight
- espresso and coffee details
- cups on wooden tables
- barista preparation
- warm café interiors
- olive / cream / brown materials
- friends casually socializing
- café terrace
- drinks
- coffee closeups
- subtle Mediterranean/Balkan atmosphere

Avoid:

- people staring directly into camera
- obvious corporate stock imagery
- fake luxury restaurant photos
- nightclub imagery
- dark moody bar photos
- cheesy staged food photography
- unrelated café logos
- visible foreign brand names
- images with AI-generated text/signage

If internet access is available in the environment, use tasteful royalty-free temporary images from sources such as Unsplash or Pexels.

Prefer downloading the temporary images into the project rather than using scattered external URLs.

Suggested asset structure:

```text
/public/images/placeholders/
  hero-cafe.jpg
  coffee-detail.jpg
  cafe-interior.jpg
  cafe-social.jpg
  drinks.jpg
  terrace.jpg
  menu-coffee.jpg
  menu-drinks.jpg
```

Adapt to the existing project structure if necessary.

Add a development comment or documentation note:

> Temporary placeholder photography — replace with real Cafe Lagano photography before production.

Do NOT display the word "PLACEHOLDER" visibly on the website.

Use robust:

- `object-fit`
- `object-position`
- consistent aspect ratios
- responsive image containers

The layout must not depend on the exact composition of any temporary image.

Real Cafe Lagano photography should later be replaceable with minimal or no layout changes.

---

# 9. HEADER / NAVIGATION

Redesign the navigation to feel simple and polished.

Desktop suggestion:

Left:

**CAFE LAGANO**

Right:

- Story
- Getränke
- Öffnungszeiten
- Kontakt

CTA:

**Reservieren**

The header may initially overlay the hero if visually appropriate.

On scroll it can transition into a compact cream/solid header.

Keep this subtle.

Mobile:

Use a clean hamburger navigation.

Do not create a dramatic fullscreen menu unless it clearly improves the experience.

Both homepage and menu page must use the same shared header.

---

# 10. HOMEPAGE HERO

Completely redesign the current hero.

Do NOT prominently use any current image that contains branding from another café.

The existing hero image may contain unrelated café branding.

Do not expose another café name.

Create a cinematic but restrained editorial hero.

Preferred structure:

Large image taking approximately 55–70% of the visual weight.

Eyebrow:

**CAFE LAGANO · SINDELFINGEN**

Main headline:

**Kaffee. Freunde.  
Ganz lagano.**

Alternative:

**Ein bisschen Balkan.  
Ganz viel Lagano.**

Supporting copy:

**Ein Ort für guten Kaffee, lange Gespräche und ein Stück Balkan mitten in Sindelfingen.**

Primary CTA:

**Getränkekarte ansehen**

Secondary CTA:

**Auf Instagram**

Optional subtle location line:

**Marktplatz · Sindelfingen**

Avoid generic copy such as:

- Experience the perfect blend
- Where tradition meets modernity
- Willkommen in einer Welt...
- Tauchen Sie ein...
- Erleben Sie...

Keep German copy natural, short, and human.

---

# 11. INTRO / BRAND STATEMENT

Immediately after the hero, use a bold editorial statement.

Example direction:

**Guter Kaffee.  
Gute Leute.  
Kein Stress.**

Follow with a short paragraph explaining the spirit of Lagano.

Do NOT make this a generic "About Us" card.

Use typography and whitespace.

---

# 12. STORY SECTION

Keep the concept of the existing story section, but redesign it completely.

Suggested layout:

Desktop:

- large image left
- editorial text right

Content structure:

Small eyebrow

Large serif heading

Suggested heading:

**Balkan-Spirit.  
Sindelfingen.  
Und ganz viel Zeit.**

The copy should explain that Balkan café culture is not about quickly drinking coffee and leaving.

It is about:

- sitting down
- talking
- meeting people
- enjoying time together

Keep it concise.

Do not romanticize it excessively.

---

# 13. WHY LAGANO SECTION

Do NOT use a generic 4-card feature grid.

Use an editorial numbered layout.

Example:

**01 — Kaffee**

Espresso, Cappuccino oder etwas Kaltes. Hauptsache in Ruhe.

**02 — Balkan Klassiker**

Cockta, Cedevita und ein paar Dinge, die sofort vertraut wirken.

**03 — Leute**

Lagano funktioniert am besten in guter Gesellschaft.

**04 — Mitten in Sindelfingen**

Direkt am Marktplatz.

Use real existing project content where possible.

Do not invent business claims.

---

# 14. HOMEPAGE MENU PREVIEW

Create a strong menu preview section.

Heading:

**Was darf’s sein?**

Show only a preview of menu categories or selected existing menu items.

Do NOT place the entire menu on the homepage.

Possible category presentation:

- Kaffee
- Softdrinks
- Balkan Klassiker
- Bier & Wein
- Cocktails

These are EXAMPLES ONLY.

Use actual categories from the existing project.

Do not invent prices.

CTA:

**Komplette Karte ansehen**

This button MUST link to the redesigned menu page.

---

# 15. ATMOSPHERE / PHOTO SECTION

Add a visual section showing the café mood.

Suggested heading:

**So fühlt sich Lagano an.**

Use an editorial image composition.

For example:

- one large landscape image
- two smaller vertical images

or a restrained staggered composition.

Do not use a generic equal-card gallery.

The imagery should communicate:

- coffee
- interiors
- social atmosphere
- drinks
- café terrace
- details

Use temporary placeholder photography for now.

---

# 16. OPENING HOURS

Create a strong but simple opening hours section.

Suggested heading:

**Noch auf einen Kaffee?**

Existing data may include:

Mo – Do  
09:00 – 22:00

Fr – Sa  
09:00 – 23:00

Sonntag  
10:00 – 21:00

VERIFY all opening hours from the current project before using them.

Show the address:

Marktplatz  
71063 Sindelfingen

CTA:

**Route öffnen**

Use only verified URLs/data already present in the project.

---

# 17. CONTACT / RESERVATION CTA

Create one strong conversion section near the bottom.

Suggested heading:

**Heute noch nichts vor?**

Supporting copy:

**Komm vorbei, reservier einen Tisch oder schreib uns einfach.**

Actions may include:

- Reservieren
- Instagram
- Route

Preserve real existing destinations.

Do not fabricate contact data.

If existing project details appear to be placeholder values, keep them only if necessary for layout, but add a clear code comment marking them for verification.

---

# 18. REVIEWS

Inspect current testimonials/reviews.

Determine whether they appear to be real or placeholder content.

Do NOT create new fictional reviews.

If the existing reviews are clearly placeholders:

either:

- de-emphasize the section

or

- create a clean Google Reviews-ready section without fake quotes

Do not make fake reviews a major homepage centerpiece.

---

# 19. FOOTER

Create a clean intentional footer.

Include:

- Cafe Lagano
- Marktplatz
- 71063 Sindelfingen
- navigation
- Instagram
- menu shortcut
- opening-hours shortcut if useful
- copyright

Optional large visual wordmark:

**LAGANO**

Do not make the footer unnecessarily huge.

---

# 20. MANDATORY MENU PAGE REDESIGN

The redesign is NOT complete unless the existing Menu / Getränke / Speisekarte page is fully redesigned.

Find the real current menu route in the project.

Inspect:

- existing categories
- menu data
- prices
- links
- page structure
- mobile behavior
- route references

Preserve all legitimate menu information.

Do NOT invent:

- products
- prices
- descriptions
- ingredients
- sizes
- offers
- discounts

If descriptions are missing, do not fabricate them.

---

# 21. MENU PAGE DESIGN DIRECTION

Create a modern editorial café menu.

The page should be:

- easy to scan
- attractive
- very good on mobile
- typography-first
- consistent with the homepage
- significantly better than a PDF-style menu

Avoid:

- cards around every menu item
- ecommerce-style product grids
- giant product photography beside every item
- fake "popular" badges
- fake bestseller labels
- accordions for every category
- excessive icons

This is a café menu, not an online shop.

---

# 22. MENU PAGE HERO

Use a smaller hero than the homepage.

Suggested structure:

Eyebrow:

**CAFE LAGANO · SINDELFINGEN**

Headline:

**Was darf’s sein?**

Supporting copy:

**Kaffee, Balkan-Klassiker und Drinks für lange Nachmittage und noch längere Abende.**

Use one tasteful café/drink placeholder image.

Do not make the hero fill the entire viewport.

---

# 23. MENU CATEGORY NAVIGATION

Create category navigation based on the actual menu categories found in the project.

Examples only:

- Kaffee
- Heißgetränke
- Softdrinks
- Balkan Klassiker
- Bier
- Wein
- Cocktails

Do NOT blindly use this list.

Read the real menu data first.

Desktop:

A sticky category bar below the main navigation is acceptable if useful.

Mobile:

Use horizontally scrollable category navigation.

Clicking a category should move smoothly to the relevant menu section.

Keep implementation lightweight.

---

# 24. MENU ITEM LAYOUT

Use a typography-first menu layout.

If descriptions exist:

```text
ESPRESSO
Kurzer Espresso aus frisch gemahlenen Bohnen          2,80 €
```

If descriptions do NOT exist:

```text
Espresso                                               2,80 €
Cappuccino                                             3,80 €
```

Do not generate descriptions.

Suggested desktop structure:

Two balanced columns where appropriate.

Each category may include:

- small category index
- serif category heading
- thin divider
- menu rows

For each menu row:

Left:

- product name
- optional existing description

Right:

- price

Prices should align cleanly.

Use subtle dividers.

Avoid giant category cards.

---

# 25. MENU PHOTO BREAKS

The menu page should not become one endless wall of text.

Use 2–3 tasteful editorial photo breaks between major menu groups.

Example:

Coffee sections  
↓  
Wide barista/coffee image  
↓  
Soft drinks / Balkan classics  
↓  
Split visual block  
↓  
Beer / wine / cocktails

Do not insert images between every category.

Use temporary placeholder photography.

---

# 26. BALKAN CHARACTER ON MENU PAGE

If existing menu data contains products such as:

- Cockta
- Cedevita
- regional coffee styles
- regional drinks
- other Balkan products

give these subtle visual emphasis because they are part of the Cafe Lagano identity.

Do NOT use:

- flags
- folk patterns everywhere
- stereotypes
- kitschy ethnic decoration

The Balkan influence should remain subtle and contemporary.

---

# 27. MENU MOBILE UX

Treat mobile menu UX as a priority.

Test at approximately:

- 375px
- 390px
- 430px

Make sure:

- category navigation is easy to use
- menu names remain readable
- prices never wrap awkwardly
- product names have enough width
- spacing is comfortable
- sticky controls do not cover content
- images do not dominate the page
- categories are easy to scan
- no horizontal overflow appears

Do not simply shrink the desktop layout.

Actively design the menu for mobile.

---

# 28. MENU PAGE BOTTOM CTA

At the bottom of the menu page, transition into a visit/contact section.

Possible heading:

**Noch einen?**

or:

**Jetzt fehlt nur noch der Tisch.**

Actions may include:

- Route öffnen
- Reservieren
- Instagram

Use only real existing links.

---

# 29. SHARED DESIGN SYSTEM

Homepage and menu page must share:

- header
- footer
- typography
- colors
- spacing
- button styles
- hover behavior
- transitions
- image treatment
- breakpoints
- motion principles

Create reusable components or shared styles according to the existing stack.

Avoid duplicated CSS/components where reasonable.

---

# 30. MOTION

Use subtle animation only.

Good examples:

- small image reveal
- gentle text fade
- 10–20px vertical entrance
- subtle image hover zoom
- underline/link animation
- header background transition
- light menu interactions

Typical duration:

`300–600ms`

Avoid:

- dramatic parallax
- cursor effects
- large floating shapes
- springy app animations
- excessive reveal animations

Respect:

`prefers-reduced-motion`

Do not install a large animation library unless truly necessary.

---

# 31. RESPONSIVE DESIGN

Test at approximately:

- 375px
- 430px
- 768px
- 1024px
- 1440px

Check:

- no horizontal overflow
- image crops
- typography
- navigation
- button sizes
- spacing
- German word lengths
- hero quality
- menu readability
- opening hours
- footer
- sticky elements

Do not simply stack every desktop block vertically with giant spacing.

Design mobile deliberately.

---

# 32. ACCESSIBILITY

Maintain or improve:

- semantic HTML
- keyboard navigation
- visible focus states
- alt text
- readable contrast
- meaningful links
- accessible menu interactions
- touch target sizes

Do not sacrifice usability for aesthetics.

---

# 33. PERFORMANCE

Maintain or improve:

- image optimization
- lazy loading where appropriate
- CLS
- LCP
- minimal JS
- reusable styles
- clean component structure
- build performance

Do not introduce unnecessary dependencies.

---

# 34. SEO

Review existing metadata.

Homepage should naturally target relevant local intent such as:

- Cafe Lagano
- Cafe Sindelfingen
- Kaffee Sindelfingen
- Cafe Marktplatz Sindelfingen

Do not keyword-stuff.

Suggested title direction:

**Cafe Lagano | Kaffee & Balkan Spirit in Sindelfingen**

Suggested meta description:

**Cafe Lagano am Marktplatz in Sindelfingen – guter Kaffee, Balkan-Klassiker und entspannte Atmosphäre mitten in der Stadt.**

Preserve any useful structured data already in the project.

Do not invent missing business information.

---

# 35. COPY STYLE

All public-facing copy should remain German.

Tone:

- relaxed
- simple
- warm
- confident
- natural
- conversational

Avoid AI/corporate phrases such as:

- Erleben Sie...
- Tauchen Sie ein...
- eine einzigartige Reise...
- wo Tradition auf Moderne trifft...
- unvergessliche Momente...
- mit Leidenschaft kreiert...
- perfekt für jeden Anlass...

Prefer short natural German.

---

# 36. MOST IMPORTANT DESIGN RULE

The final website should feel like **Cafe Lagano has a real visual identity**.

It should NOT feel like:

> a nice café template with "Lagano" text inserted into it.

Before adding any UI element, ask:

Does this add:

- brand
- atmosphere
- information
- usability
- conversion

If not, remove it.

---

# 37. REQUIRED WORKFLOW

Follow this process:

1. Inspect the entire codebase.
2. Understand the current architecture.
3. Find the real homepage route.
4. Find the real menu route.
5. Inspect existing assets.
6. Inspect current menu data and prices.
7. Identify placeholder/fake content.
8. Create/refine the shared design system.
9. Implement the homepage redesign.
10. Implement the menu page redesign.
11. Add temporary placeholder photography.
12. Connect homepage menu preview to the full menu.
13. Test navigation between pages.
14. Test all menu category anchors/interactions.
15. Test mobile layouts.
16. Run existing lint/build/test commands.
17. Fix all errors introduced by the redesign.
18. Review visual consistency.
19. Perform a final pass specifically looking for generic AI-looking patterns.
20. Remove anything that feels like a premade template.

---

# 38. FINAL ACCEPTANCE CRITERIA

The task is complete only when:

- homepage has been fully redesigned
- menu page has been fully redesigned
- both pages share one consistent design system
- placeholder photography is integrated cleanly
- no unrelated café branding is visible
- menu data/prices remain accurate to the existing project
- homepage links correctly to menu
- navigation works correctly
- mobile design is polished
- no horizontal overflow exists
- no obvious AI-template patterns remain
- build/lint succeeds where applicable
- the result is presentation-ready even before real photos arrive

Do not stop after creating only the hero.

Do not ask for approval section by section.

Make strong design decisions and complete the full redesign.
