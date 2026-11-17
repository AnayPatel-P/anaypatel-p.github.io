/* Fig. 1 — the line. One data model, drawn horizontally (wide) or
   vertically (narrow) by transposing coordinates: a transit diagram
   built only from 0°/45°/90° segments stays valid when you swap x and y. */
(() => {
  "use strict";

  const SKILLS = ["lightbulb", "project-manager", "original-ui", "agent-builder", "teach", "ai-brief"];

  // [along, across] in the horizontal frame. viewBox 760 × 260.
  const LINES = [
    { id: "ai-brief",        pts: [[0, 206], [46, 206], [80, 172], [80, 150]],
      lbl: { h: [0, 226, "start"],  v: [214, 14, "start"] } },
    { id: "lightbulb",       pts: [[80, 126], [230, 126]],
      lbl: { h: [155, 162, "middle"], v: [104, 159, "end"] } },
    { id: "project-manager", pts: [[230, 126], [640, 126]],
      lbl: { h: [305, 162, "middle"], v: [104, 309, "end"] } },
    { id: "original-ui",     pts: [[380, 140], [640, 140]],
      lbl: { h: [455, 162, "middle"], v: [152, 604, "start"] } },
    { id: "agent-builder",   pts: [[430, 40], [476, 40], [530, 94], [530, 116]],
      lbl: { h: [430, 26, "start"],  v: [40, 424, "middle"] } },
    { id: "teach",           pts: [[430, 226], [476, 226], [530, 172], [530, 150]],
      lbl: { h: [430, 246, "start"], v: [226, 424, "middle"] } },
  ];

  const STATIONS = [
    { n: 10, name: "Discover", at: 80,  skills: ["lightbulb", "ai-brief"],                               v: "left" },
    { n: 20, name: "Plan",     at: 230, skills: ["lightbulb", "project-manager"],                        v: "right" },
    { n: 30, name: "Design",   at: 380, skills: ["project-manager", "original-ui"],                      v: "right" },
    { n: 40, name: "Build",    at: 530, skills: ["project-manager", "original-ui", "agent-builder", "teach"], v: "below" },
    { n: 50, name: "Shipped",  at: 640, skills: ["project-manager", "original-ui"], terminal: true,      v: "right" },
  ];
  const PROJECTS = [
    { name: "InvestEdge", href: "#p-investedge", skills: ["project-manager", "original-ui"] },
    { name: "Plotted",    href: "#p-plotted",    skills: ["project-manager", "original-ui"] },
    { name: "MarketLens", href: "#p-marketlens", skills: ["project-manager", "original-ui"] },
  ];

  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs = {}, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
    if (parent) parent.appendChild(n);
    return n;
  };

  function draw(vertical) {
    const P = ([a, c]) => (vertical ? [c, a] : [a, c]);
    const svg = el("svg", {
      viewBox: vertical ? "0 0 300 720" : "0 0 760 260",
      class: vertical ? "v" : "h",
      "aria-hidden": "true",
      focusable: "false",
    });

    // lines
    for (const line of LINES) {
      const g = el("g", { class: "ln", "data-skill": line.id, style: `--c:var(--l-${line.id})` }, svg);
      const d = line.pts.map((p, i) => (i ? "L" : "M") + P(p).join(" ")).join(" ");
      el("path", { d, class: "stroke" }, g);
      el("path", { d, class: "hit" }, g);
      const [x, y, anchor] = vertical ? line.lbl.v : line.lbl.h;
      el("text", { x, y, "text-anchor": anchor }, g).textContent = line.id;
    }

    // stations (interchange capsules span both lanes)
    for (const st of STATIONS) {
      const g = el("g", { class: "st" + (st.terminal ? " terminal" : ""), "data-skills": st.skills.join(" ") }, svg);
      const [cx, cy] = P([st.at, 133]);
      const w = st.terminal ? 22 : 18, h = 40;
      const [rw, rh] = vertical ? [h, w] : [w, h];
      el("rect", { x: cx - rw / 2, y: cy - rh / 2, width: rw, height: rh, rx: Math.min(rw, rh) / 2 }, g);

      let x, y, anchor = "start";
      if (!vertical) { x = st.at + 16; y = 104; }
      else if (st.v === "left")  { x = 104; y = st.at + 5; anchor = "end"; }
      else if (st.v === "below") { x = 164; y = st.at + 38; }
      else { x = 164; y = st.at + 5; }
      const t = el("text", { x, y, "text-anchor": anchor }, g);
      el("tspan", { class: "num" }, t).textContent = st.n + " ";
      el("tspan", {}, t).textContent = st.name;

      if (st.terminal) {
        PROJECTS.forEach((p, i) => {
          const [px, py] = vertical ? [164, st.at + 24 + i * 18] : [st.at + 16, 174 + i * 18];
          const a = el("a", { href: p.href, tabindex: "-1" }, g); // figure is aria-hidden; projects are reachable in § 1
          const pt = el("text", { x: px, y: py, class: "proj", "data-skills": p.skills.join(" ") }, a);
          pt.textContent = p.name;
        });
      }
    }
    return svg;
  }

  const fig = document.getElementById("fig-line");
  const fallback = document.getElementById("fig-fallback");
  if (!fig || !fallback) return;
  fallback.classList.add("visually-hidden"); // keep it for screen readers
  fig.append(draw(false), draw(true));

  // ---------- tracing ----------
  const skillsList = document.getElementById("skills");
  const cards = [...document.querySelectorAll(".skill")];
  const projects = [...document.querySelectorAll(".project")];
  const hint = document.getElementById("fig-hint");
  let pinned = null;   // set by click / keyboard / #hash
  let previewing = null; // set by hover

  function apply(skill) {
    const on = !!skill;
    fig.classList.toggle("is-tracing", on);
    skillsList.classList.toggle("is-tracing", on);
    if (on) fig.style.setProperty("--c-trace", `var(--l-${skill})`);

    fig.querySelectorAll(".ln").forEach((g) => {
      g.classList.toggle("is-on", g.dataset.skill === skill);
      g.classList.toggle("is-dim", on && g.dataset.skill !== skill);
    });
    fig.querySelectorAll(".st").forEach((g) => g.classList.toggle("is-on", on && g.dataset.skills.split(" ").includes(skill)));
    fig.querySelectorAll(".proj").forEach((t) => t.classList.toggle("is-on", on && t.dataset.skills.split(" ").includes(skill)));
    cards.forEach((c) => {
      const me = c.dataset.skill === skill;
      c.classList.toggle("is-on", me);
      c.querySelector(".trace").setAttribute("aria-pressed", String(me && pinned === skill));
    });
    projects.forEach((p) => {
      const hit = on && (p.dataset.skills || "").split(" ").includes(skill);
      p.classList.toggle("is-traced", hit);
      if (hit) p.style.setProperty("--c-trace", `var(--l-${skill})`);
    });

    if (hint) {
      if (!on) hint.textContent = "Point at a line or pick a skill below to trace it.";
      else {
        const built = PROJECTS.filter((p) => p.skills.includes(skill)).map((p) => p.name);
        const stops = STATIONS.filter((s) => s.skills.includes(skill)).map((s) => s.name);
        hint.textContent = `${skill}: ${stops.join(" → ")}` + (built.length ? ` · built ${new Intl.ListFormat("en", { type: "conjunction" }).format(built)}` : "");
      }
    }
  }
  const render = () => apply(previewing || pinned);

  // hover previews (pointer only), click / Enter / Space pins
  cards.forEach((card) => {
    const s = card.dataset.skill;
    const btn = card.querySelector(".trace");
    card.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") { previewing = s; render(); } });
    card.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") { previewing = null; render(); } });
    btn.addEventListener("click", () => { pinned = pinned === s ? null : s; previewing = null; render(); });
    btn.addEventListener("focus", () => { previewing = s; render(); });
    btn.addEventListener("blur", () => { previewing = null; render(); });
  });
  fig.querySelectorAll(".ln").forEach((g) => {
    const s = g.dataset.skill;
    g.addEventListener("pointerenter", () => { previewing = s; render(); });
    g.addEventListener("pointerleave", () => { previewing = null; render(); });
    g.addEventListener("click", () => { pinned = pinned === s ? null : s; render(); });
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && pinned) { pinned = null; render(); } });

  // "Built with" links from a project pin that skill on arrival
  function fromHash() {
    const id = location.hash.replace("#s-", "");
    if (SKILLS.includes(id)) { pinned = id; render(); }
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();

  // ---------- top bar hairline + current section ----------
  const bar = document.querySelector(".bar");
  const onScroll = () => bar.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = [...document.querySelectorAll('.bar a[href^="#"]')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      navLinks.forEach((a) => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + en.target.id)));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  ["work", "method", "experience"].forEach((id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();
