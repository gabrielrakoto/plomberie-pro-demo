# FixFlow Design System

FixFlow is a residential and commercial **plumbing services** company. The brand's public face is a single-page marketing site whose whole job is to convert an anxious homeowner into a booked callout in under a minute: an emergency phone number pinned to the top of every page, a hero that promises speed, a two-field booking strip, and credibility stacked underneath (years, satisfaction, awards, 24/7 cover).

## Sources

| Source | What it gave us |
| --- | --- |
| `uploads/d43b381dca68e03750fa322187684192.jpg` | The **only** source: a 1000×1500 screenshot of the FixFlow homepage, top of page through the stats band. |

No codebase, Figma file, font binaries, logo vector or icon set were supplied. Everything in this system is derived from that one image, and anything below the stats band (footer, other pages) is an extrapolation, flagged as such. **Colour values were sampled from the pixels; type, spacing and radii were measured off the artwork and rounded only where the screenshot's resolution made the exact value unreadable.**

### Substitutions to confirm (please send us the originals)
1. **Fonts** — no font files. Headings match **Poppins** SemiBold and body copy matches **DM Sans**; both load from Google Fonts in `tokens/fonts.css`.
2. **Icons** — no icon assets. We use **Lucide** (lucide-static CDN) through the `Icon` component; the source's glyphs are the same 2px-stroke rounded-outline family.
3. **Logo** — no vector mark. `Logo` sets the wordmark in Poppins with a placeholder orange "F" tile. `assets/img/logo-mark-source-reference.png` is a low-res crop of the real mark, kept for reference only. We did **not** attempt to redraw it.
4. **Photography** — the two images in `assets/img/` are crops of the screenshot, so they are low resolution. Replace with originals.

---

## Content fundamentals

**Voice.** Plain-spoken tradesperson: competent, unfussy, in a hurry on your behalf. Never jokey, never technical, never salesy-superlative beyond the plain claim ("fast, reliable, affordable").

- **Person.** The company is **we / our** ("our expert team", "our mission is to provide…"). The reader is **you / your** ("your home and business"). The brand refers to itself by name in body copy: "At FixFlow, our mission is…".
- **Casing.** Headings are sentence-shaped but Title Case is used for nav, tabs and buttons ("Get a Free Quote", "Our Expertise", "About Us"). Eyebrows are ALL CAPS with wide tracking ("YOUR TRUSTED PLUMBING EXPERTS", "WHO WE ARE"). Stat captions are Title Case ("Years of Experience").
- **Punctuation.** Headlines take no full stop; benefit list items do ("Reliable, fast, and efficient service."). Exclamation marks appear once at most, on a credibility line ("Recognized for Excellence in Plumbing Services!").
- **Length.** Hero headline = 4–6 words over two lines. Lede = one sentence, ~25 words. Benefit items = 4–6 words. Section headings = 4–6 words over two lines.
- **Numbers.** Written short and hard: "25+", "98%", "67+", "24/7", "130K +". Captions explain them in three words.
- **Emoji.** Never. Not in copy, not in UI.
- **CTAs.** Verb-first and specific: "Get a Free Quote", "Submit Request", "Contact Us Today", "Book in 60 Seconds". Never "Learn more", never "Click here".
- **Speed and availability are the two recurring promises** — say them in almost every band: "60 Seconds", "24/7 Emergency Service", "Fast Solutions".

---

## Visual foundations

**Palette.** Two brand colours and grey. **Orange `#F26A22`** is the action colour: every primary button, every eyebrow, every check glyph, the active tab. **Navy `#102A3A` / `#152F45`** is headings, the utility top bar, and inverse surfaces. Body copy is a cool grey `#5C6B76`. The only tinted surface is a lavender-tinged `#F1F1F9` band. Semantic green/red/amber exist for forms only. Never a purple-blue gradient, never an orange gradient — orange is always flat.

**Type.** Poppins for anything that reads as a heading, number or wordmark: SemiBold, tight tracking (−0.02em), leading 1.14–1.3, headlines manually broken over two lines. DM Sans for body at 15–17px with generous 1.65–1.7 leading. Stats are Poppins Bold at 46px. Eyebrows are 12px Bold uppercase, 0.1em tracking, orange.

**Layout.** A 1120px centred container with 40px gutters. Sections are separated by ~96px of vertical white space, not by rules or dividers. Two-column splits are roughly 1 : 1.15 (image left, copy right) with a 48–64px gutter. Stats run four across, equal columns, centred. The utility top bar and header are the only full-bleed fixed-vocabulary elements; nothing sticks on scroll.

**Backgrounds.** White is the default page. Exactly two other backgrounds: the lavender-grey `#F1F1F9` band and navy. Photography is used full-bleed only in the hero. No patterns, textures, repeating motifs, hand-drawn illustration or decorative blobs — the imagery does all the work.

**Photography.** Warm, naturally lit documentary shots of real work in progress — a plumber at a kitchen sink, two workers reviewing a tablet on site. Slightly warm white balance, shallow depth of field, no colour grading, no black-and-white, no grain. People are always mid-task and never look at the camera. Crops are 12px-rounded rectangles inside content; full-bleed and square-cornered in the hero.

**Scrim and glass.** Over hero photography, text sits on a left-to-right dark scrim (`--overlay-scrim`, 88% → 0% of `rgba(9,24,34,…)`) — not a flat overlay and not a bottom protection gradient. Floating elements over photos are **translucent capsules**: `rgba(255,255,255,.16)` with a 14px backdrop blur and a 1px `rgba(255,255,255,.28)` hairline. Blur is used *only* over photography, never over flat colour.

**Corner radii.** Actions and capsules are fully pill (`999px`). Surfaces are 16px; icon tiles and photo crops are 12px; small chips 8px. Nothing is square except full-bleed sections.

**Cards.** White, 1px `#E6E8EE` hairline, 16px radius, 28–36px padding, **flat by default**. Elevation is a state, not a style: a card only gains `0 10px 30px rgba(16,42,58,.10)` and a 2px lift when it is interactive and hovered. Floating overlays on photography use the deeper `--shadow-float`. Orange buttons may carry `--shadow-accent` when they sit on imagery.

**Borders.** One hairline weight (1px `#E6E8EE`) everywhere; a 2px orange rule marks the active tab; `rgba(255,255,255,.28)` hairlines on glass. No coloured left-border accents, ever.

**Motion.** Restrained and functional: 200ms `cubic-bezier(.4,0,.2,1)` colour/border transitions, 120ms on transforms. Hover on a button darkens the fill one step and lifts 1px; hover on a card lifts 2px with a shadow; hover on a nav link moves it to white or navy; active tab transitions colour + rule. Press states darken a further step (`--orange-700`) with no scale. No bounce, no parallax, no scroll-reveal, no looping animation.

**Focus.** 1px orange border plus a 3px `rgba(242,106,34,.14)` ring on fields. Disabled = 45% opacity, no colour change.

**Transparency** appears in exactly three places: glass capsules over photos, the hero scrim, and white text at 65–85% opacity on navy.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — 24px grid, 2px rounded outline strokes, no fills. This is a **substitution**: the source's glyphs (phone, envelope, clock, circle-check) are the same visual family but we have no files. Flagged for replacement.
- **Delivery:** the `Icon` component masks `https://unpkg.com/lucide-static@0.544.0/icons/<name>.svg` with `background-color: currentColor`, so glyphs inherit text colour. No icon font, no sprite sheet, no inline SVG in product code.
- **Colour:** orange for anything affirmative (check marks, service tiles), navy for informational, white at 80% on the navy top bar.
- **Sizes:** 13–14px in the top bar and badges, 16px inside buttons, 17px in check lists, 19–22px in tinted icon tiles (48px square, `--orange-50`, 12px radius).
- **Emoji and unicode glyphs are never used as icons.** Bullet-like marks are always `circle-check`.
- **Award seals** in the hero are real photographic badge artwork in the source; we do not have those files and stand in with Lucide `award`/`shield-check`/`trophy`. Replace with the real seals.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`.

**`guidelines/`** — 15 specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**`assets/img/`** — `hero-plumber-kitchen.png`, `team-two-workers.png`, `logo-mark-source-reference.png` (all crops of the source screenshot).

**Components** — each with `.jsx`, `.d.ts`, `.prompt.md` and one `@dsCard` HTML per directory:
- `components/actions/` — **Button**, **IconButton**
- `components/forms/` — **Input**, **Textarea**
- `components/navigation/` — **NavLink**, **Tabs**
- `components/content/` — **Eyebrow**, **SectionHeading**, **Stat**, **CheckItem**, **Card**, **ServiceCard**, **AvatarStack**, **Badge**
- `components/brand/` — **Logo**, **Icon**

**UI kits**
- `ui_kits/website/` — the FixFlow marketing site (Home, Services, Contact) as a click-through recreation. See its README for fidelity notes.

### Intentional additions
The source is one page, so the component inventory is what that page demonstrates. Three additions beyond it:
- **Icon** — a wrapper was needed to deliver a glyph set at all.
- **Textarea** — the source has no multi-line field, but a contact form is unusable without one; it reuses Input's exact language.
- **ServiceCard** — a services grid is implied by the "Services" nav item but not shown; built only from existing card, icon-tile and type patterns.
