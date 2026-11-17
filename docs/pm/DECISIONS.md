# Decisions log

| # | Date | Decision | Why | Alternatives considered |
|---|------|----------|-----|-------------------------|
| D1 | 2026-11-17 | Build v2 on a `redesign` branch of the live repo | Keeps the URL and resume.pdf; nothing goes live until merged | Separate site-v2 folder |
| D2 | 2026-11-17 | Audience: recruiters + engineers, layered | Both read the page; scan surface first, detail second | Recruiter-only; engineer-only |
| D3 | 2026-11-17 | Skills framed as "How I build with AI" | Strongest signal for AI/FDE roles | Plain list; interactive explorer |
| D4 | 2026-11-17 | Include Experience + Resume/contact; exclude custom agents and credit-risk-ml card | Keeps v1 focused on the requested content | Include all |
| D5 | 2026-11-17 | Adopt suggestions #1 (skills↔projects link) and #2 (pipeline diagram) | Turns the skills list into a method | #3 metrics, #4 case studies → backlog |
| D6 | 2026-11-17 | Static HTML/CSS/JS, no framework or build step | One page, GitHub Pages, fast, easy for Anay to maintain | Astro, Next.js |
| D7 | 2026-11-17 | Honest status chips (Live / Deploying soon / Rebuilding) | Overclaiming hurts more than it helps | Hide status |
| D8 | 2026-11-17 | Public skills repo deferred to future add-ons | Anay should review each SKILL.md before it goes public | Include in v1 |
| D9 | 2026-11-17 | Skill list = agent-builder, ai-brief, lightbulb, original-ui, project-manager, teach | Anay's own skills in ~/.claude/skills; anthropic-frontend-design is third-party | — |
| D10 | 2026-11-17 | Feel: quietly confident · engineer's-notebook mood · airy scan with depth on demand · hover/focus tracing only, no autoplay | original-ui discovery answers | Editorial/bold; showpiece; step-through |
| D11 | 2026-11-17 | **UI concept: "Lab Notebook × The Line"** (mix of directions A + B). Notebook page: paper `#F7F5EF`/ink `#1B1F24`, blueprint-blue accent `#2450A6`; dark `#14171B`/`#ECE9E1`/`#8DB1F5`. Margin column of mono annotations, main column record, a blue margin rule, status as rotated stamps. Fig. 1 is a Beck-style transit diagram (0/45/90° only) with one coloured line per skill and numbered stations (10 Discover → 50 Shipped). Type: Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (annotations) | Notebook = method + record, which is the site's story; transit lines make skills↔projects legible at a glance | C "The Edition" (book) |
| D12 | 2026-11-17 | Diagram drawn by `main.js` from one data model; transposed to a vertical layout under 40rem; an ordered-list fallback stays for no-JS and screen readers | One source of truth, readable at 360px | Horizontally scrolling figure |
| D13 | 2026-11-17 | Built Phase 3 (diagram + tracing) together with Phase 2 | The concept's signature moment is the diagram; designing it separately would have split one decision in two | Keep phases separate |
| D14 | 2026-11-17 | Newsreader loaded as static weights (no opsz axis) and the font stylesheet loaded without blocking render | Variable opsz file was ~195 KB and blocked LCP (perf 78 → 100) | Self-hosting subset fonts |
