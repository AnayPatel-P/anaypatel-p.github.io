# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Recruiters** screening new-grad and intern candidates for ML engineer, data scientist and AI/LLM (incl. forward-deployed) roles. They often arrive from LinkedIn or a resume link, frequently on a phone, and spend about 30 seconds. Their job is to decide whether Anay fits, and to grab the resume.
- **Engineers and hiring managers** who spend 3 to 5 minutes. They want to know what he built, with what stack, and how he makes decisions.

## Product Purpose

Anay Patel's personal portfolio. A visitor should leave knowing who Anay is (a math-trained ML engineer working on finance at Wio Bank, studying at UT Austin), that he ships real, working products, and that he designed his own AI engineering toolkit to plan, design and build them. Success means a recruiter opens the resume or reaches out, and an engineer finds enough depth to take him seriously.

## Positioning

Every candidate now says they "use AI". Anay can show a method he designed, as six Claude skills with gates, interviews, research and guardrails, and three live products it shipped. Each project is a public twin of a claim on his resume.

## Operating Context

The site is read alongside a resume PDF, LinkedIn and GitHub. Visitors scan first and dig second. Links out go to live apps (InvestEdge, Plotted, MarketLens), their repos, the resume, GitHub and LinkedIn.

## Capabilities and Constraints

- Single page, served by GitHub Pages from the `main` branch of this repo.
- Static HTML, CSS and vanilla JS (current stack). The user left the redesign free to change "whatever is most effective for recruiters", so the stack, sections and copy are open, but facts are not.
- Light and dark mode, responsive from 360px to 1440px with no horizontal scroll, WCAG AA, keyboard accessible, `prefers-reduced-motion` honored. The current site scores Lighthouse 100 in all four categories with 0 axe violations; the redesign should not regress that.
- Outbound links open in a new tab and announce it to screen readers.

## Brand Commitments

None binding. The previous visual identity ("lab notebook": cream paper, Newsreader and IBM Plex, blueprint blue, margin annotations, transit-line diagram) is retired by the user's choice and is evidence only.

## Evidence on Hand

- **Projects (all live):**
  - InvestEdge: ARIMA, ETS, Prophet and GARCH forecasts on every S&P 500 stock, replayed against reality. Live at anaypatel-p.github.io/investedge/. Screenshot `assets/rewind-and-release.jpg`.
  - Plotted: semester-by-semester degree planner on real catalogs. Live at plotted-cyan.vercel.app. Screenshot `assets/plotted-planner.webp`.
  - MarketLens: stock dashboard with live watchlist, charts and portfolio P&L vs the S&P 500. Live at marketlens-live.fly.dev. Screenshot `assets/marketlens-analysis.webp`.
- **Skills (six):** lightbulb, project-manager, original-ui, agent-builder, teach, ai-brief, each with an excerpt in `index.html`. Projects were planned with project-manager and designed with original-ui.
- **Experience:** Wio Bank, Data Science Associate (2024 to now) and ML Intern; The Estée Lauder Companies, CEO Presidential Associate Intern, Data Science. Education: UT Austin MS Business Analytics & AI (May 2028), BS Mathematics (May 2026).
- **Resume:** `resume.pdf`. Contact: email, GitHub, LinkedIn.
- **Absent, do not fabricate:** headline metrics per project, testimonials, employer logos used as endorsements, user counts.

## Product Principles

1. **Lead with the person.** The first thing a visitor meets is who Anay is; the work and the method are the proof.
2. **Fast to scan, deep on demand.** A recruiter finds role fit, the projects and the resume within 30 seconds; depth is one step away, never in the way.
3. **Original, not gimmicky.** It must not read as a template or AI-generated portfolio, and must not be so playful that it costs credibility. Memorable, not quiet.
4. **Every claim is true.** Status, stack and numbers match the repos and live apps.

## Accessibility & Inclusion

WCAG 2.2 AA. Keyboard and screen-reader complete. Reduced motion honored. Readable at 200% text on a 360px screen.
