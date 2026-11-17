# anaypatel-p.github.io

Source for [anaypatel-p.github.io](https://anaypatel-p.github.io): my portfolio. It shows three projects (InvestEdge, Plotted, MarketLens) and the Claude skills I wrote to plan, design and build them.

Static HTML, CSS and vanilla JS. No framework and no build step, served by GitHub Pages.

The design is "The Collection Cabinet": a nameplate introduces me, and everything else lives in labelled drawers you pull open (Shipped, Toolkit, Field record, Correspondence). Without JavaScript every drawer is simply open.

## Run locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Files

| Path | What |
|------|------|
| `index.html` | All content. Projects are `<article class="specimen">`; skills are `<li class="skill">`; each drawer is a `<section class="drawer">` |
| `styles.css` | Self-hosted `@font-face`, then design tokens (steel, brass and paper colors for light and dark, type, motion); everything else uses them |
| `main.js` | Drawer behaviour: open and close, links that open another drawer (`data-open`, `data-light`), and deep links like `#toolkit` or `#p-plotted` |
| `assets/` | Project screenshots, `og-image.png` (the 1200×630 link-preview card), and `fonts/` (Bricolage Grotesque and Courier Prime, latin subset, SIL Open Font License) |
| `docs/og-card.html` | Source for `og-image.png`; the regenerate command is at the top of the file. Re-render it whenever the headline or projects change |
| `resume.pdf` | Resume |
| `docs/pm/` | PRD, roadmap, decisions and status for the v2 redesign |
| `PRODUCT.md` | Who the site is for and what must stay true (used by the impeccable design skill) |

## Common edits

- **Add a project:** copy an `<article class="specimen">` inside `#shipped .shelf` in `index.html`, and update the Shipped drawer's label and the count in the nameplate index.
- **Add a skill:** copy an `<li class="skill">` inside `#toolkit`. Give it an `id="s-<name>"` so other drawers can link to it.
- **Link across drawers:** `<a href="#p-plotted" data-open="shipped" data-light="p-plotted">` opens the Shipped drawer, scrolls to Plotted and lights it briefly.
- **Change which drawer starts open:** move the `is-open` class to another `<section class="drawer">`.

## Deploy

Push to `main`. GitHub Pages serves the repository root.
