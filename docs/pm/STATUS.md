# Status

**Updated:** 2026-11-17
**Current phase:** D – shipped (v1 live)
**Current milestone:** —
**Last completed:** Lighthouse 100 ×4; axe 0 (light + dark); no overflow at 360 px or at 200% text; honesty fixes; README
**Next up:** human 30-second / 5-second tests; v2 planning (see v2 pitch)
**Blockers / open questions:** Toolbox "AI" row wording (Anay to confirm); 5-second diagram test with a real person

## History
- 2026-11-17 — Intake + elaboration; brief approved; PRD, roadmap, decisions, status written on branch `redesign`.
- 2026-11-17 — Plan approved (all three repos public). Phase 1 skeleton built.
- 2026-11-17 — Copy approved. original-ui: feel interview, research, three directions; Anay chose A + B mix. Phases 2–3 built and verified in the browser.
- 2026-11-17 — Phase 4: perf fix (fonts), favicon, 200%-text nav/button fixes, factual corrections, README.
- 2026-11-17 — Merged redesign → main (1b6359f) and pushed; GitHub Pages build succeeded; live at https://anaypatel-p.github.io.
- 2026-11-17 — Plotted v1 confirmed live (plotted-cyan.vercel.app): stamp → Live, live-app link added on site and profile README.

## PRD acceptance check
- F1 hero + resume/contact ✅ · F2 projects with honest chips + links ✅ · F3 six skills with excerpts ✅ · F4 pipeline diagram ✅ · F5 skills↔projects tracing ✅ · F6 experience ✅ · F7 light/dark, responsive, reduced motion, a11y ✅ · F8 layered scan/detail ✅
- Not yet verified: recruiter 30-second scan and the 5-second diagram read (both need a real person)

## Retro
- Went well: writing the copy before the design caught the "AI did it" risk early, and the transit metaphor made the skills↔projects link work.
- Harder than expected: fitting diagram labels into both the horizontal and vertical layouts, and font weight (the variable optical-size axis alone cost 22 Lighthouse points).
- Would do differently: build the 200%-text check into the first CSS pass.

## v2 pitch (re-ranked add-ons)
1. Public `claude-skills` repo + "source" links on each skill card (M): makes the method verifiable
2. One hard number per project in the margin column (S): fits the notebook concept naturally
3. Expandable case studies per project (M): depth for engineers
