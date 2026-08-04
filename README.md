# Handoff: Plomberie Pro — site vitrine (4 pages)

## Overview
Marketing site for **Plomberie Pro**, a licensed (RBQ) plumbing company serving **Ville de Québec**. Its job is conversion: get an anxious homeowner to call or submit a quote request in under a minute. Four views — Accueil, Services, À propos, Contact — plus a shared utility bar, sticky header and footer. All copy is in French (Québec).

## About the design files
The files in this bundle are **design references created in HTML** — a working prototype of the intended look and behaviour, not production code to copy. The task is to **recreate these designs in the target codebase's environment** (React, Next.js, Astro, WordPress, etc.) using its established patterns. If there is no codebase yet, pick the framework that fits (for a 4-page brochure site, Next.js static export or Astro is a natural fit) and implement there.

`Plomberie Pro.dc.html` is a single-file prototype: one template with a `page` state variable switching between the four views; the design-system components it mounts (`Button`, `Card`, `SectionHeading`, `Stat`, `Icon`, `Badge`, `Input`, `Textarea`, `Tabs`, `ServiceCard`, `CheckItem`, `IconButton`, `Logo`) live in `_ds/`. In production these should become four real routes (`/`, `/services`, `/a-propos`, `/contact`), not a client-side switch.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, shadows and hover states are final and come from the FixFlow design system (bundled in `_ds/`). Recreate pixel-for-pixel, mapping each FixFlow component onto the codebase's equivalent primitive where one exists.

---

## Global chrome (all pages)

### 1. Utility bar
- Full-bleed, `background: var(--navy-800)` (#152F45), `padding: 9px 0`.
- Inner container `max-width: 1120px; margin: 0 auto; padding: 0 40px`, `display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 28px`.
- Three items, each `inline-flex; align-items: center; gap: 7px`, `font-size: 12.5px`, `color: rgba(255,255,255,.8)`, hover `#FFF`, 13px Lucide icons: phone (tel link), mail (mailto), clock ("Urgence 24/7 — on répond la nuit et la fin de semaine").

### 2. Header (sticky)
- `position: sticky; top: 0; z-index: 70`, `padding: 22px 0`, `background: var(--navy-900)` (#102A3A), `box-shadow: 0 1px 0 rgba(255,255,255,.08)`.
- Same 1120/40 container, `display: flex; align-items: center; justify-content: space-between; gap: 24px`.
- Left: logo image `assets/logo-plomberie-pro.png` 44×44, `border-radius: 999px`; wordmark "Plomberie Pro" in Poppins SemiBold 19px, `letter-spacing: -.02em`, white, with a second line beneath in small caps grey (tagline).
- Center/right: desktop nav, `display: flex; gap: 36px` — Accueil, Services, À propos, Contact. Inactive `rgba(255,255,255,.72)`, active/hover white; active also carries the orange marker. Nav is hidden below the mobile breakpoint and replaced by a hamburger toggle that opens a stacked panel.
- Right: primary Button "Appeler" (orange, pill) linking to `tel:`.

### 3. Page banner
One shared block, `position: relative; overflow: hidden; background: var(--navy-900)`, containing:
- A full-bleed photo, `position: absolute; inset: 0; width/height 100%; object-fit: cover`. One per page:
  | Page | Image | object-position |
  | --- | --- | --- |
  | Accueil | `assets/plombier-salle-de-bain.jpg` | 78% 45% |
  | Services | `assets/plombier-cuisine-reparation.jpg` | 60% 30% |
  | À propos | `assets/plombier-portrait-cuisine.jpg` | 70% 25% |
  | Contact | `assets/plombier-client-cuisine.png` | 45% 25% |
- A scrim over it: `position: absolute; inset: 0; background: var(--overlay-scrim)` = `linear-gradient(90deg, rgba(9,24,34,.88) 0%, rgba(9,24,34,.55) 46%, rgba(9,24,34,0) 78%)`. Left-to-right, never a flat overlay.
- Home content: container `padding: 72px 40px 56px`; a 600px column with eyebrow "Votre plombier de confiance au Québec", display-size H1 (`Une fuite ? Un drain bloqué ?` / `On intervient aujourd'hui.`), lede, then two large buttons (primary "Appeler maintenant" with phone icon; secondary/outline "Demander une soumission"). Below, 56px down, a glass Badge ("Réponse en moins de 60 minutes") and a glass Card (min-width 430px) reading "Licencié, assuré et garanti — sans mauvaise surprise" over five 46px white pill icon chips (shield-check, badge-check, award, wrench, clock).
- Inner pages: container `padding: 96px 40px 88px; min-height: 430px; display: flex; align-items: flex-end`, a 640px column with eyebrow + H1 + lede per page. The min-height matters — with less, the photo reads as a cropped sliver behind the header.

### 4. Footer
`background: var(--navy-900)`, four columns: brand blurb ("Plombier licencié RBQ et assuré, au service des résidences et commerces de la ville de Québec.") + social IconButtons (glass, 36px); site links; services links; contact block (tel, mailto, map-pin "Québec et environs", glass Badge "Urgence 24/7"). Bottom rule `1px solid rgba(255,255,255,.12)` with © line and "Fait au Québec · Service en français". Link text `rgba(255,255,255,.65)` → white on hover, 13.5px.

---

## Screens

### Accueil (`/`)
Sequence of `<section>`s inside `<main style="flex:1">`, all with the 1120/40 container:
1. **Reassurance strip** — white, `padding: 56px 0`; a subtle-tone Card, 36px padding, flex row space-between: three short promises + a primary CTA.
2. **Intro** — white, `padding: 40px 0`; 820px column with SectionHeading + two paragraphs.
3. **Stats** — white, `padding: 64px 0`; `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 48px`; four `Stat`s (value Poppins Bold 46px navy, caption Title Case): 15+ Années d'Expérience, 98% Clients Satisfaits, 24/7 Service d'Urgence, 60 min Temps de Réponse.
4. **Services** — `background: var(--surface-subtle)` (#F1F1F9), `padding: 96px 0`; heading row (heading left, "Voir tous les services" link right, `margin-bottom: 40px`) then a `ServiceCard` grid (auto-fit, minmax ~300px, 24px gap): débouchage de drains, réparation de fuites, chauffe-eau, tuyauterie, salle de bain, urgence.
5. **Zone desservie** — white, `padding: 96px 0`; SectionHeading (eyebrow "Zone desservie", title "Partout dans la ville de Québec") then wrapping pill chips, `gap: 10px; margin-top: 32px`, each `background: var(--surface-subtle); border-radius: 999px; padding: 9px 18px; font-size: 14px; font-weight: 500; color: var(--navy-900)`: Québec, Sainte-Foy, Limoilou, Charlesbourg, Beauport, Sillery, Cap-Rouge, Val-Bélair, Loretteville, L'Ancienne-Lorette, Saint-Augustin-de-Desmaures, Lévis.
6. **Témoignages** — subtle band, `padding: 96px 0`; three Cards (28px padding) each with a star row, quote paragraph, name (Poppins SemiBold 15px navy) and city (caption, muted): Yann T. / Sainte-Foy, Sophie D. / Limoilou, Gestion Beaudry inc. / Québec. **These are placeholders — replace with real reviews before launch.**
7. **Urgence CTA** — navy, full-bleed photo optional; H2 "Dégât d'eau, fuite majeure ou chauffe-eau qui coule ?" + phone button.

### Services (`/services`)
Banner + a grid of service blocks, each: icon tile (48px square, `--orange-50`, 12px radius, 20px orange Lucide glyph), title, description, and a `CheckItem` list of what's included (orange `circle-check`, 17px). Ends with a pricing-transparency note and the quote CTA.

### À propos (`/a-propos`)
- **Notre histoire** — white, 820px column: SectionHeading ("Quinze ans sur / les chantiers du Québec") + two `--type-body-lg` paragraphs. A caption line flags the text as to be validated with Gabriel.
- **Tabs** — `Tabs` component with three panels (Notre mission / Notre expertise / Nos valeurs); active tab is orange with a 2px orange rule.
- **L'équipe au travail** — single large photo `assets/equipe-plomberie-toutan.jpg`, 12px radius, full container width. This is the only in-body photograph in the whole site; do not add more.
- **Accréditations** — navy band with glass Cards: Licence RBQ, Membre CMMTQ, assurance responsabilité, garantie.

### Contact (`/contact`)
Two-column split (~1 : 1.15, 48–64px gutter):
- **Left, navy card** — Téléphone / Courriel / Adresse ("[Adresse à confirmer], Québec, QC") / Zone desservie ("Ville de Québec, Lévis et couronnes nord et sud"), each with an uppercase caption label (`letter-spacing: .08em`, `rgba(255,255,255,.55)`) over a 15px `rgba(255,255,255,.8)` value; plus hours.
- **Right, form** — `Input` fields (nom, téléphone, courriel, type de service) + `Textarea` (description du problème) + primary Button "Envoyer la demande". Required: nom, téléphone, message. Validate on submit, inline error text in `--red-500`; on success swap the form for a confirmation panel. The prototype does not wire a backend — hook to the real form endpoint.
- **Map** — OpenStreetMap embed, `border-radius: var(--radius-lg)`, `1px solid var(--border-default)`, bbox `-71.45,46.71,-71.14,46.90` (Ville de Québec). Caption notes it should be replaced by the real Google Business Profile embed.

---

## Interactions & behavior
- **Navigation** — prototype swaps `page` state; production = real routes. Active nav item reflects the current route.
- **Mobile menu** — hamburger below the desktop breakpoint; toggles a stacked nav panel under the header; closes on selection.
- **Buttons** — hover darkens one step (`--orange-600`) and lifts 1px; active `--orange-700`, no scale. 200ms `cubic-bezier(.4,0,.2,1)` on color, 120ms on transform.
- **Cards** — flat by default; interactive cards gain `0 10px 30px rgba(16,42,58,.10)` and a 2px lift on hover only.
- **Tabs** — click switches panel, transitions color + the 2px orange rule.
- **Focus** — 1px orange border + 3px `rgba(242,106,34,.14)` ring on fields.
- **No** scroll-reveal, parallax, bounce or looping animation anywhere.
- **Responsive** — single 1120px container with 40px gutters; grids are `auto-fit`/`minmax` so they collapse naturally. Below ~900px: banner columns stack, contact split becomes one column, stats go 2×2, footer stacks. Tap targets ≥ 44px.

## State
`page` ('home' | 'services' | 'about' | 'contact'), `mobileNavOpen`, `tab` (À propos tabs), contact-form field values + validation errors + submit status. In a routed implementation only the last three remain component state.

## Design tokens
All tokens are in `_ds/fixflow-design-system-.../tokens/`. Link `styles.css` or port the values.

**Colors** — orange `--orange-500 #F26A22` (actions, eyebrows, checks, active tab), `--orange-600 #DC5814` (hover, links), `--orange-700 #B54510` (active), `--orange-50 #FEF2EA` (icon tiles); navy `--navy-900 #102A3A` (headings, header, footer), `--navy-800 #152F45` (utility bar, inverse surfaces), `--navy-300 #8199AA` (muted text); neutrals `--white #FFFFFF`, `--slate-100 #F1F1F9` (the one tinted band), `--slate-200 #E6E8EE` (the single hairline weight), `--slate-500 #5C6B76` (body copy); semantic `--green-500 #1F9D63`, `--red-500 #D93B3B`, `--amber-500 #E9A21B` (forms only). Glass `rgba(255,255,255,.16)` + 14px backdrop blur + `1px rgba(255,255,255,.28)` hairline, over photography only. Orange is always flat — never a gradient.

**Type** — Poppins SemiBold for headings/numbers/wordmark, `letter-spacing: -.02em`, leading 1.14–1.3, headlines manually broken over two lines. DM Sans body 15–17px, leading 1.65–1.7. Eyebrows 12px Bold uppercase, `.1em` tracking, orange. Stats Poppins Bold 46px.

**Spacing** — 1120px container, 40px gutters, ~96px between major sections (56–64px for the tighter home strips), 24–48px grid gaps, 28–36px card padding.

**Radius** — pill `999px` (buttons, chips, badges), `16px` surfaces/cards, `12px` icon tiles and photo crops, `8px` small chips. Nothing square except full-bleed sections.

**Elevation** — flat by default; hover `0 10px 30px rgba(16,42,58,.10)`; `--shadow-float` for overlays on photography; `--shadow-accent` for orange buttons sitting on imagery.

## Assets
- `assets/logo-plomberie-pro.png` — client-supplied logo mark (used at 44px in header and footer). No vector supplied; request an SVG.
- `assets/plombier-salle-de-bain.jpg`, `plombier-cuisine-reparation.jpg`, `plombier-portrait-cuisine.jpg`, `plombier-client-cuisine.png` — page banner photography.
- `assets/equipe-plomberie-toutan.jpg` — team photo, "L'équipe au travail".
- `assets/hero-plumber-kitchen.png`, `team-two-workers.png` — low-resolution crops that ship with the FixFlow design system, reference only; not used in the final pages.
- Icons: Lucide, delivered by the design system's `Icon` component (masks `unpkg.com/lucide-static@0.544.0/icons/<name>.svg` with `background-color: currentColor`). Swap for a local Lucide package in production. No emoji anywhere.
- Fonts: Poppins + DM Sans from Google Fonts via `tokens/fonts.css`. Self-host in production.

## Still placeholder — confirm before launch
Phone number (currently `(514) 555-0123`), email (`info@plomberiepro.ca`), street address, RBQ license number, the final service list, the three testimonials, the "notre histoire" copy, and the map embed. Every one of these is marked in the prototype with a caption or bracketed text.

## Files
- `Plomberie Pro.dc.html` — the full prototype (all four pages).
- `support.js` — runtime that renders the prototype; **not** part of the deliverable design, do not port.
- `_ds/fixflow-design-system-20ef2c0f-4d89-4676-86e0-449377c4ac0d/` — design system: `styles.css`, `tokens/*.css`, `_ds_bundle.js` (component implementations), `readme.md`.
- `assets/` — images listed above.

Open `Plomberie Pro.dc.html` in a browser to see the prototype as built.
