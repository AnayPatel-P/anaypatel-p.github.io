/* The Collection Cabinet: drawers you pull open.
   Without JS every drawer is open (the CSS only collapses them under .js),
   so this file only adds behaviour: toggling, cross-drawer links, deep links. */
(() => {
  "use strict";

  const cabinet = document.getElementById("cabinet");
  if (!cabinet) return;
  const drawers = [...cabinet.querySelectorAll(".drawer")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const OPEN_MS = 380;

  const buttonOf = (d) => d.querySelector(".front button");

  function sync() {
    drawers.forEach((d) => buttonOf(d).setAttribute("aria-expanded", String(d.classList.contains("is-open"))));
    cabinet.classList.toggle("has-open", drawers.some((d) => d.classList.contains("is-open")));
  }

  function setOpen(d, open) {
    d.classList.toggle("is-open", open);
    sync();
  }

  // Wait for the tray to finish sliding before measuring or scrolling.
  const afterOpen = (fn) => (reduce.matches ? fn() : setTimeout(fn, OPEN_MS));

  function scrollTo(el) {
    el.scrollIntoView({ block: "start", behavior: reduce.matches ? "auto" : "smooth" });
  }

  function light(el) {
    el.classList.remove("is-lit");
    void el.offsetWidth; // restart the animation if it is already lit
    el.classList.add("is-lit");
    el.addEventListener("animationend", () => el.classList.remove("is-lit"), { once: true });
  }

  /** Open a drawer and bring something in it (or the drawer itself) into view. */
  function reveal(drawerId, targetId, { focus = true } = {}) {
    const d = document.getElementById(drawerId);
    if (!d) return;
    const target = (targetId && document.getElementById(targetId)) || null;
    const wasOpen = d.classList.contains("is-open");
    setOpen(d, true);
    const go = () => {
      const el = target || d;
      scrollTo(el);
      if (target) light(target);
      if (focus) {
        if (target) {
          if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        } else {
          buttonOf(d).focus({ preventScroll: true });
        }
      }
    };
    wasOpen ? go() : afterOpen(go);
  }

  // Drawer fronts toggle. CSS transitions are interruptible, so a second
  // press mid-slide simply reverses the drawer from where it is.
  drawers.forEach((d) => {
    buttonOf(d).addEventListener("click", () => setOpen(d, !d.classList.contains("is-open")));
  });

  // Index entries, "Built with" and "Used on" links open the right drawer.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-open]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const target = a.dataset.light || null;
    history.replaceState(null, "", "#" + (target || a.dataset.open));
    reveal(a.dataset.open, target);
  });

  // Deep links: #toolkit opens the drawer; #p-plotted opens Shipped and lights it.
  function fromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    const d = el.closest(".drawer");
    if (!d) return;
    reveal(d.id, el === d ? null : id, { focus: false });
  }
  window.addEventListener("hashchange", fromHash);

  sync();
  fromHash();

  // The load moment plays once; reopening a drawer later shouldn't replay it.
  setTimeout(() => document.documentElement.classList.add("settled"), 900);
})();
