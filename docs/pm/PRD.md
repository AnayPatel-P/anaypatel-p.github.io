# Portfolio v2 ("How I build") — PRD

_Version 1.0 · 2026-11-17 · Status: Draft_

## 1. Vision
A recruiter leaves the site knowing two things: Anay ships real, working ML/data products, and he has designed his own AI engineering toolkit to plan, design and build them. An engineer who wants more depth can find it without leaving the page.

**One-liner:** Portfolio v2 helps MLE/AI/FDE recruiters and engineers judge Anay quickly by showing shipped projects *and* the Claude skills that built them, unlike the current site, which lists work but hides how he works.

## 2. Problem
- **Who has it:** recruiters and hiring managers screening new-grad MLE / AI / FDE candidates.
- **What they do today:** skim a resume and a GitHub, with no way to see how the candidate works with AI tools.
- **Why that's painful:** every candidate now says they "use AI". Few can show a method they designed, with guardrails, gates and output contracts.

## 3. Target users
| Persona | Description | Key need |
|---------|-------------|----------|
| Recruiter | 30-second scan, non-technical-ish | Role fit, proof of shipping, resume in one click |
| Engineer / HM | 3–5 minutes, technical | Stack, results, how decisions were made |

## 4. Goals and non-goals
**Goals (v1):**
- Show MarketLens, Plotted and InvestEdge with honest status.
- Present the six custom skills as a connected toolkit ("How I build with AI").
- Keep Experience, Resume and contact.
- Make the design original (original-ui) and finish it to Apple-grade craft.

**Non-goals (v1):** blog, per-project case-study pages, headline-metric callouts, custom agents section, credit-risk-ml card, public skills repo, CMS, analytics.

## 5. Features (MoSCoW)
| # | Feature | Priority | Notes |
|---|---------|----------|-------|
| F1 | Hero: name, positioning line, Resume + GitHub + LinkedIn + email | Must | |
| F2 | Projects: MarketLens, Plotted, InvestEdge, each with stack, summary, status chip, links | Must | Honest chips: Live / Deploying soon / Rebuilding |
| F3 | Skills: agent-builder, ai-brief, lightbulb, original-ui, project-manager, teach, each with a brief excerpt | Must | Framed as systems Anay designed |
| F4 | Pipeline diagram showing how the skills chain into shipped work | Must | Adopted suggestion #2; signature moment |
| F5 | Skills ↔ projects link: each project shows the skills that built it | Must | Adopted suggestion #1 |
| F6 | Experience: Wio Bank, Estée Lauder (carried from v1 site) | Must | |
| F7 | Light/dark, responsive, reduced motion, keyboard + screen-reader accessible | Must | |
| F8 | Layered depth: one-line scan text and a short technical detail line per project | Should | Lighter version of "both, layered" |
| F9 | One hard number per project | Could | → Future add-ons |
| F10 | Expandable case studies | Won't (v1) | → Future add-ons |

## 6. User stories and acceptance criteria
### F2 — Projects
- **As a** recruiter **I want** to see what each project is and whether I can try it **so that** I know it's real.
- **Done when:**
  - [ ] Each project has a name, one-line summary, stack tags, a status chip, and a repo link (plus a demo link if live)
  - [ ] InvestEdge links to https://anaypatel-p.github.io/investedge/
  - [ ] No claim on the page is something the repo doesn't support

### F3/F4/F5 — How I build with AI
- **As an** engineer **I want** to understand what each skill does and how they fit together **so that** I can judge the AI engineering depth.
- **Done when:**
  - [ ] All six skills are listed, each with a 1–2 sentence excerpt that names its mechanism (gates, interview, research, guardrails)
  - [ ] The pipeline diagram reads in under 5 seconds and works in light and dark mode
  - [ ] Plotted and InvestEdge show "Built with: project-manager · original-ui", and hovering or focusing a skill highlights the projects it built

### F1/F6 — Hero, experience, contact
- **Done when:** Resume opens `resume.pdf`; experience content matches the v1 site; contact links work.

## 7. User flow
1. Land on the hero: name, role, one line, Resume button.
2. Scroll to Projects: three showcases.
3. Scroll to How I build: pipeline diagram, then skill cards linked back to the projects.
4. Experience, then contact footer.

## 8. Non-functional requirements
- **Performance:** no build step, total page weight < 300 KB excluding images, Lighthouse ≥ 95 on all four categories.
- **Platforms:** evergreen browsers; layout works from 360 px to wide desktop; no horizontal scroll.
- **Accessibility:** WCAG AA contrast, semantic landmarks, visible focus, `prefers-reduced-motion` honored, 0 axe violations.
- **Cost:** $0 (GitHub Pages).

## 9. Tech approach (summary)
Static `index.html` + `styles.css` + small `main.js` (no framework), inline SVG for the diagram, project screenshots as optimized images. Hosted on GitHub Pages from this repo. Work happens on the `redesign` branch and is merged only with Anay's go-ahead.

## 10. Success metrics
| Metric | Target | How measured |
|--------|--------|--------------|
| Recruiter scan | Role, 3 projects and resume found in < 30 s | Hallway test with 1–2 people |
| Quality | Lighthouse ≥ 95, axe 0 violations | Lighthouse / axe run |
| Honesty | 0 unsupported claims | Final review against the repos |

## 11. Risks and assumptions
| Risk / assumption | Impact | Likelihood | Mitigation |
|-------------------|--------|------------|------------|
| The skills section reads as "AI built my portfolio" rather than engineering skill | High | Med | Excerpts name the mechanisms Anay designed; tested with real copy in Phase 1 |
| Pipeline diagram is decorative and doesn't explain anything | Med | Med | Draft it as plain boxes in Phase 1; must pass the 5-second read |
| Plotted has no public URL yet | Low | High | "Deploying soon" chip + repo link; update after deploy |
| MarketLens is the old version | Low | High | "Rebuilding" chip, described honestly |

## 12. Open questions
- [ ] Is the MarketLens repo public? Is the Plotted repo public?
- [ ] Should email be shown as plain text or a mailto link only?
- [ ] Custom domain later (anaypatel.dev)?

## 13. Future add-ons (backlog)
| Idea | Why it's valuable | Size | Suggested version |
|------|-------------------|------|-------------------|
| One hard number per project | Stops a scanning reader | S | v1.1 |
| Expandable case studies | Real depth for engineers | M | v2 |
| Public `claude-skills` repo + source links | Makes the skills claims verifiable | M | v1.1 |
| Custom agents (ai-brief-scout, canvas-practice-helper) | More AI-engineering proof | S | v2 |
| credit-risk-ml card once shipped | Flagship ML project | S | when ready |
| Custom domain | Memorable URL | S | v2 |

## 14. Design (filled in after `original-ui`)
- **Concept:** Lab Notebook × The Line: the site is an engineer's notebook, and the method is drawn as a transit map.
- **Signature moment:** Fig. 1. Each skill is a coloured line through numbered stations (10 Discover → 20 Plan → 30 Design → 40 Build → 50 Shipped). Hover, focus or tap a skill to trace its line: the other lines dim, its stations ink in, and the projects it built light up (in the figure and in § 1). "Built with" tags on projects jump to the skill and pin it.
- **Visual language:** paper `#F7F5EF`, ink `#1B1F24`, accent `#2450A6` (dark: `#14171B` / `#ECE9E1` / `#8DB1F5`); six line colours; Newsreader + IBM Plex Sans + IBM Plex Mono; 2–4px radii, hairlines, no shadows; 180 ms `cubic-bezier(.2,.8,.2,1)` state changes, none under reduced motion.
- **Layout:** two-column entries (margin annotations | record) with a blue margin rule; folds to one column under 52rem; the diagram turns vertical under 40rem.
- **Libraries implied:** none (vanilla JS + inline SVG, Google Fonts).
