# Portfolio v2 — Roadmap

**Stack:** static HTML + CSS + vanilla JS · inline SVG · GitHub Pages (reasons in DECISIONS.md)
**Riskiest assumption:** the skills section reads as *engineering* rather than "AI did it" → tested with real copy in Phase 1

## Phase 1 — Walking skeleton (content first)
**Goal:** every section exists with final-draft copy in semantic HTML and minimal styling.
**Demo:** open `index.html` locally and read the whole story top to bottom.
- [x] 1.1 Content inventory: facts for each project, pulled from its README/PRD (stack, status, links)
- [x] 1.2 Skill excerpts: 1–2 sentences per skill naming its mechanism
- [x] 1.3 Semantic HTML: hero, projects, how-I-build (plain-box pipeline), experience, footer
- [x] 1.4 Carry over experience + education + resume.pdf from the v1 site
**Done when:**
- [x] The page renders locally; all links resolve
- [x] Anay has reviewed the copy (especially skill excerpts and status chips)

## Phase 2 — Design concept + visual system
**Goal:** an original look, chosen by Anay, applied to the hero and projects.
**Demo:** hero + projects in the final design, in light and dark mode.
- [x] 2.0 Invoke `original-ui` with the PRD handoff brief; Anay picks a concept
- [x] 2.1 Design tokens (color, type scale, spacing, motion) in `styles.css`, light + dark
- [x] 2.2 Hero
- [x] 2.3 Project showcases with screenshots, chips, "Built with" tags
**Done when:**
- [x] Concept logged in DECISIONS.md; PRD §14 filled in
- [x] Hero + projects match the concept at 375 px and desktop

## Phase 3 — How I build with AI (signature)
**Goal:** pipeline diagram + skill cards + skill↔project linking.
**Demo:** hover or focus a skill to see the diagram and projects respond.
- [x] 3.1 Pipeline diagram (inline SVG, theme-aware)
- [x] 3.2 Six skill cards
- [x] 3.3 Linking interaction (hover/focus highlights; keyboard accessible; reduced motion)
- [x] 3.4 Experience + footer styled
**Done when:**
- [x] Diagram reads in < 5 s; interaction works by keyboard; reduced motion respected  _(5-second read still to confirm with a real person)_

## Phase 4 — Polish & ship
- [x] 4.1 Accessibility pass (axe 0 in light + dark), Lighthouse 100/100/100/100 (LCP 1.1 s, 224 KiB)
- [x] 4.2 Responsive check 360 → desktop, 200% text at 360 px, light/dark
- [x] 4.3 Final honesty review against repos (fixed: statsforecast not statsmodels; MarketLens dated May 2026); PRD acceptance check
- [ ] 4.4 Merge `redesign` → `main` and push **only with Anay's go-ahead**

## Later (post-v1)
- See PRD §13 Future add-ons
