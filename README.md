# anaypatel-p.github.io

Source for [anaypatel-p.github.io](https://anaypatel-p.github.io): my portfolio. It shows three projects (InvestEdge, Plotted, MarketLens) and the Claude skills I wrote to plan, design and build them.

Static HTML, CSS and vanilla JS. No framework and no build step, served by GitHub Pages.

## Run locally

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Files

| Path | What |
|------|------|
| `index.html` | All content. Projects are `<article class="project">`; skills are `<li class="skill">` |
| `styles.css` | Design tokens at the top (colors for light and dark, type, spacing, motion); everything else uses them |
| `main.js` | Draws Fig. 1 (the transit diagram) from the `LINES` / `STATIONS` / `PROJECTS` data, and handles skill tracing |
| `assets/` | Project screenshots, plus `og-image.png` (the 1200×630 link-preview card) |
| `docs/og-card.html` | Source for `og-image.png`; the regenerate command is at the top of the file. Re-render it whenever the headline or projects change |
| `resume.pdf` | Resume |
| `docs/pm/` | PRD, roadmap, decisions and status for the v2 redesign |

## Common edits

- **Change a project's status:** edit its `.stamp` (`live`, `soon` or `rebuild`) in `index.html`.
- **Add a skill:** add a `<li class="skill">` in `index.html`, a `--l-<name>` color in both themes in `styles.css`, and a line in `LINES` (plus its stations) in `main.js`. Lines use only 0°, 45° and 90° segments, so the vertical mobile layout is simply the horizontal one transposed.
- **Mark a project as built with a skill:** add the skill to the project's `data-skills` and a `.line-tag` link. Also add it to `PROJECTS` in `main.js` if the project should appear at the Shipped station.

## Deploy

Push to `main`. GitHub Pages serves the repository root.
