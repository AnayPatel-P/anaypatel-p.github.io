---
name: Anay Patel — The Collection Cabinet
description: A single-page portfolio laid out as a painted-steel specimen cabinet; a nameplate introduces Anay, labelled drawers hold the proof.
colors:
  brass: "#C9A653"
  brass-hi: "#E2C77E"
  brass-edge: "#8F7128"
  on-brass: "#14261F"
  ground: "#D5DDD3"
  carcass: "#C3CDC1"
  front: "#E4EAE2"
  front-dim: "#D9E0D7"
  edge: "#9AAA9D"
  tray: "#EEF1EC"
  ink: "#14261F"
  ink-2: "#3A5047"
  paper: "#FAFBF8"
  paper-edge: "#D3D8D0"
  paper-ink: "#14261F"
  paper-ink-2: "#46574F"
  label: "#FBFAF4"
  solid: "#1F3A33"
  solid-hi: "#2D5247"
  on-solid: "#F6F7F3"
  live: "#1D6A43"
typography:
  display:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 8.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.1vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Courier Prime, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  data:
    fontFamily: "Courier Prime, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  hairline: "2px"
  paper: "3px"
  steel: "4px"
  cabinet: "6px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "0.875rem"
  base: "1rem"
  lg: "1.25rem"
  xl: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.on-brass}"
    rounded: "{rounded.steel}"
    padding: "0.8rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.brass-hi}"
  button-solid:
    backgroundColor: "{colors.solid}"
    textColor: "{colors.on-solid}"
    rounded: "{rounded.steel}"
    padding: "0.55rem 0.9rem"
  button-solid-hover:
    backgroundColor: "{colors.solid-hi}"
  button-quiet:
    textColor: "{colors.paper-ink}"
    padding: "0.55rem 0.25rem"
  drawer-front:
    backgroundColor: "{colors.front}"
    rounded: "{rounded.steel}"
    padding: "0.75rem 1.25rem"
    height: "4.75rem"
  drawer-front-dim:
    backgroundColor: "{colors.front-dim}"
  label-holder:
    backgroundColor: "{colors.label}"
    textColor: "{colors.paper-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.hairline}"
    padding: "0.4rem 0.75rem 0.45rem"
  pull:
    backgroundColor: "{colors.brass}"
    height: "1.25rem"
    width: "clamp(3.25rem, 7vw, 5.5rem)"
  tray:
    backgroundColor: "{colors.tray}"
    rounded: "0 0 4px 4px"
  specimen:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.paper}"
    padding: "0.875rem"
  skill-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.paper}"
    padding: "0.875rem 1rem 1rem"
  index-card:
    backgroundColor: "{colors.label}"
    textColor: "{colors.paper-ink}"
    rounded: "{rounded.paper}"
    padding: "0.9rem 1rem 1rem"
    width: "26rem"
---

# Design System: Anay Patel — The Collection Cabinet

## Overview

**Creative North Star: "The Collection Cabinet"**

The page is a museum specimen cabinet in painted steel. A nameplate introduces Anay at display scale; everything else lives in labelled drawers the visitor pulls open, each holding real specimens on paper. Steel owns the ground, brass is the single accent, and paper islands carry the content. The material story is literal and consistent: steel surfaces are sage-putty by day and deep collection green by night, while labels and specimens stay paper in both themes, as paper would.

Density is calm at rest and rich on demand. Closed drawers still scan, because every label holder states its contents in typed text. Depth comes from objects, not from decoration: trays are recessed with an inner shadow, open drawer fronts cast a shadow onto the tray, and paper sits just above the tray on a soft lift. The retired "lab notebook" identity (cream paper, Newsreader and IBM Plex, blueprint blue) is not a source for this system.

Imagery is real: the three specimen plates are captures of Anay's live apps, made before this build and carried into it. The social card (`assets/og-image.png`, 1200x630) is rendered from `docs/og-card.html` by headless Chrome; the command is in that file's header. Regenerate the PNG from the HTML, never edit the raster.

**Key Characteristics:**
- Painted-steel ground with one brass accent (button, label-holder frames, pulls, route rules, bullets, selection).
- Typed paper labels in Courier Prime for data only; everything people read as prose is Bricolage Grotesque.
- Drawers as the section disclosure device: press-instant, interruptible slide, contents ride the tray edge.
- Specimens on cool white paper with a typed data strip.
- Light and dark follow the system preference; no theme toggle.

## Colors

A low-chroma sage-green steel family, one warm brass, and near-white paper; brass is the only saturated hue on the page.

### Primary
- **Cabinet Brass** (`brass`): the Resume button, the 3px frame of every label holder and the index card, drawer pulls, the toolkit route line and nodes, record bullets, the email underline, text selection, and the lit-specimen ring. Lit `brass-hi` is its highlight bevel and hover; `brass-edge` is its 1px rim. Night values: brass #D2B061, brass-hi #E6CB86, brass-edge #8A6C25.

### Secondary
- **Collection Green Solid** (`solid`, hover `solid-hi`): the primary action on paper ("Live demo", "Live app"), and the focus-ring colour inside paper surfaces. It exists because brass on white paper lacks contrast; it never appears on steel.

### Tertiary
- **Live Green** (`live`): the "Live" status word and its dot in specimen data strips. Status only, never decoration.

### Neutral
- **Sage Putty Ground** (`ground`; night #142822): page background and `theme-color`.
- **Carcass** (`carcass`; night #0F201B): the cabinet body behind the drawers.
- **Drawer Front** (`front`; night #24443B) and **Dimmed Front** (`front-dim`; night #1D382F): a closed drawer dims only while another drawer is open.
- **Steel Edge** (`edge`; night #0A1713): 1px borders on cabinet, fronts, trays, record dividers; also the scrollbar thumb.
- **Tray Floor** (`tray`; night #0D1C17): the recessed interior of an open drawer.
- **Ink** (`ink`, `ink-2`; night #EEF2EC, #B4C4B9): text on steel. `ink-2` for role, bio, dates, notes.
- **Paper** (`paper`, `paper-edge`; night #EEF0EA, #C7CDC4) and **Label Card** (`label`; night #F1EFE6): specimen, skill and record cards; label holders and the index card. Text on them is always `paper-ink` / `paper-ink-2`, which do not change at night.

### Named Rules
**The One Brass Rule.** Brass is the single accent. It frames, pulls and points; it never fills a large surface and never sets body text.

**The Paper Stays Paper Rule.** Labels and specimens keep their light paper and dark ink in both themes. Only steel changes with the scheme.

## Typography

**Display Font:** Bricolage Grotesque, variable 200–800, self-hosted latin subset (with ui-sans-serif, system-ui)
**Body Font:** Bricolage Grotesque
**Label/Mono Font:** Courier Prime 400 and 700, self-hosted latin subset (with ui-monospace, SFMono-Regular, Menlo)

**Character:** A heavy, slightly quirky grotesque speaks in Anay's voice; a typewriter face stamps the labels and data like a curator's typed card. Both are SIL OFL and preloaded or swapped, never fetched from a third party.

### Hierarchy
- **Display** (800, clamp 3.25–6rem, 0.96, -0.035em, balanced): the name on the nameplate only.
- **Headline** (600, clamp 1.375–1.75rem, 1.25, max 22ch): the one-liner under the role. The correspondence line "Let's talk" uses the same voice at clamp 1.25–1.5rem.
- **Title** (800, 1.75rem, 1.05): specimen names; 1.5rem when three specimens share a shelf.
- **Title small** (800, 1.25rem, 1.2): record entry roles, with the organisation beneath at 600 1rem in `ink-2`.
- **Body** (400, 1.0625rem, 1.55): bio (max 46ch), tray notes (max 62ch); summaries and skill text step to 1rem and 0.9375rem.
- **Label** (Courier Prime 700, 1.0625rem, 0.08em, uppercase): drawer label titles. The index title and record card headings use 700 0.8125rem at 0.1em uppercase in `paper-ink-2`.
- **Data** (Courier Prime 400, 0.8125rem, 1.45): label subtitles, data strips (keys uppercase 0.08em), dates, index counts, route roles, education notes. Skill names are Courier Prime 700 1.125rem, because they are literal identifiers.

### Named Rules
**The Typed Means Data Rule.** Courier Prime is for labels, identifiers, dates, counts and data keys. Sentences are never typed.

## Layout

A room with two pieces of furniture. From 60rem up the page is a two-column grid (nameplate `minmax(min(19rem, 32vw), 4fr)`, cabinet `8fr`, gap clamp 2–4.5rem, max-width 1440px, centered). The nameplate is sticky at the top padding (clamp 1.25–3.5rem). Below 60rem it collapses to one column, the nameplate becomes static, and the index card is hidden because the drawer fronts are the index.

Side gutters are at least 1rem and respect safe-area insets; from 40rem they grow to clamp 1.5–3.5rem. The cabinet pads its drawers by clamp 0.5–0.875rem with gaps of clamp 0.5–0.75rem.

Inside a tray, layout responds to the tray's own width (container queries on the tray interior), not the viewport:
- Shelf of specimens: one column; 26–44rem each specimen sets its plate and body side by side (0.8fr / 1.2fr); at 44rem and up three specimens stand side by side on a subgrid so titles, summaries, status and buttons align across them.
- Toolkit route: five stages across; under 34rem it turns vertical with the brass rule on the left.
- Skills: one column, two from 34rem.
- Record entries: one column, a 9rem date column from 36rem; education and toolbox cards go two-up from 36rem.

Under 30rem the nameplate's Resume button spans the full width. Under 26rem index counts hide and pulls shrink to 2.5rem. Drawers scroll into place with a 1rem top margin; specimens and skills with 7rem, so a lit card lands below its drawer front.

## Elevation & Depth

Depth is physical and soft. Shadows tint with the theme's shadow colour (rgb 20 38 31 by day, black at night) and are always blurred; there are no hard offset shadows. Steel surfaces carry a 1px top highlight and a faint bottom lip; recesses are inner shadows.

### Shadow Vocabulary
- **Cabinet cast** (`0 40px 60px -40px rgb(var(--shadow) / .55), inset 0 1px 0 rgb(255 255 255 / .18)`): the cabinet body on the ground.
- **Front at rest** (`inset 0 1px 0 rgb(255 255 255 / .28), inset 0 -3px 0 rgb(0 0 0 / .07)`): a closed drawer front.
- **Front pulled** (`inset 0 1px 0 rgb(255 255 255 / .28), 0 14px 18px -12px rgb(var(--shadow) / .55)`): an open front casting onto its tray.
- **Tray recess** (`inset 0 14px 14px -12px rgb(0 0 0 / .32)`): the tray floor under the front.
- **Paper lift** (`0 1px 0 rgb(0 0 0 / .05), 0 10px 20px -14px rgb(var(--shadow) / .55)`): specimens; skill and record cards use 8px 16px.
- **Label recess** (`inset 0 1px 2px rgb(0 0 0 / .14), 0 1px 0 var(--brass-hi)`): paper seated in a brass holder; the index card adds `0 6px 14px -10px`.
- **Brass bevel** (`inset 0 1px 0 var(--brass-hi), 0 2px 4px -1px rgb(var(--shadow) / .3)`): the Resume button; the pull uses a 2px 3px drop.

### Named Rules
**The Objects Cast Rule.** A shadow means an object is above or inside another object. Nothing glows, and nothing is lifted for emphasis alone.

## Shapes

Tight, manufactured corners: 2px for paper seated in brass and for plates, 3px for loose paper cards and the index card, 4px for steel fronts, buttons and the tray's bottom corners, 6px for the cabinet carcass. The one curved silhouette is the cup pull (3px top corners, fully rounded bottom). Borders are 1px steel edge on steel, 3px brass on label holders, the index card and the route. The index list uses dashed paper-edge rules, like a catalogue card. Status dots are circles; record bullets are 0.4rem brass squares.

## Components

### Buttons
- **Primary (brass):** the Resume action, on steel only. `brass` fill, `on-brass` 600 text, 1px `brass-edge`, brass bevel shadow, trailing download arrow (inline SVG). Hover lifts to `brass-hi`.
- **Solid:** the live-app action on paper. `solid` fill, `on-solid` 600 0.9375rem text, trailing outbound arrow; hover `solid-hi`.
- **Quiet:** "Source" on paper: no fill, underline at 40% currentColor, full on hover.
- **Plain link:** GitHub, LinkedIn, Email on steel: 600 weight, same 40% underline treatment.
- **Press:** every button and drawer front answers in 90ms ease-out with `translateY(1px) scale(.985)` (fronts `.995`). Hover colours apply only where hover exists (`hover: none` resets them).

### Nameplate
The name at display scale, role line in `ink-2`, the headline one-liner, bio, then the actions row and the index card. No frame; it is lettering on the steel.

### Index Card
A card-catalogue card in a 3px brass frame on `label` paper: a typed uppercase title, then one row per drawer with the drawer name (600) left and a typed count right, rows split by dashed rules. Rows wrap; hover tints them with 18% brass. Entries open their drawer rather than jumping.

### Drawer Front, Label Holder and Pull
Each drawer heading is a full-width button (min-height 4.75rem) on `front` steel holding a brass-framed label holder (typed uppercase title over a typed contents line) on the left and the brass cup pull on the right. Open: the front casts onto its tray and the pull drops 1px. While any drawer is open, closed fronts dim to `front-dim` and return to `front` on hover. `aria-expanded` and `aria-controls` carry state.

### Tray
Inset from the front's sides, recessed, steel-edged on three sides. It opens by animating `grid-template-rows` 0fr to 1fr; its contents are bottom-aligned so they slide out with the tray edge instead of being uncovered in place. Without JS every tray is open; closed trays become `visibility: hidden` after closing so nothing inside is focusable.

### Specimen
A project on paper: plate (16:10 screenshot, top-left cover, 1px paper-edge frame), title, summary, typed data strip (uppercase key, value; "Live" in `live` with a dot), solid and quiet buttons, and a "How it works" disclosure whose chevron rotates in 200ms. Built-with links cross into the Toolkit drawer.

### Skill Card
Paper card: skill name typed bold, stage tag in 600 `paper-ink-2`, description at 0.9375rem, and a "Used on" line linking back to specimens.

### Toolkit Route
A horizontal brass line with five ring nodes (the last filled) naming stages, typed skill names beneath; vertical in narrow trays.

### Record Entry
Typed date and place column, role title with organisation, brass-square bullet list with bold key phrases; entries divided by 1px steel edge. Followed by paper cards for education and toolbox with typed uppercase headings.

### Motion
- **Open** 380ms, **close** 260ms, ease-out `cubic-bezier(.22, 1, .36, 1)`; transitions are interruptible, so a second press reverses mid-slide.
- **Press** 90ms ease-out.
- **Load settle:** once, on wide screens with motion allowed, the open drawer's specimens rise 8px and fade in over 520ms, staggered 70ms; it never replays.
- **Lit:** a specimen or skill reached from another drawer or a deep link gets a 3px brass ring that holds then fades over 2.6s; JS waits for the open to finish, scrolls, focuses and lights it.
- **Reduced motion** removes all transitions and animations and scrolls instantly.

## Do's and Don'ts

### Do:
- **Do** keep brass as the only accent, used for frames, pulls, rules and the one primary action on steel.
- **Do** put new content in a drawer with a brass label holder whose typed subtitle states what is inside.
- **Do** set content on paper cards inside trays, with paper-ink text in both themes.
- **Do** use Courier Prime only for labels, identifiers, dates, counts and data keys.
- **Do** lay out tray contents with container queries on the tray, not viewport breakpoints.
- **Do** keep press feedback at 90ms and drawer motion at 380ms open / 260ms close on the shared ease-out.
- **Do** mark every outbound link with a visually hidden "(opens in a new tab)" and an inline SVG arrow.
- **Do** regenerate `assets/og-image.png` from `docs/og-card.html` when the palette or copy changes.

### Don't:
- **Don't** fill large areas with brass or set running text in it.
- **Don't** put the solid green button on steel or brass buttons on paper.
- **Don't** set sentences in Courier Prime.
- **Don't** use hard offset shadows or glows; depth is blurred, tinted and physical.
- **Don't** add tabs, carousels or modals: drawers disclose sections, and a "How it works" toggle discloses depth inside a card.
- **Don't** reintroduce the retired lab-notebook palette or type.
