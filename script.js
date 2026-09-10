/* ── Mobile nav sheet ── */
const burger = document.getElementById("burger");
const navSheet = document.getElementById("navSheet");

burger.addEventListener("click", () => {
  const open = navSheet.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});

navSheet.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    navSheet.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  });
});

/* ── Browser tab switching (per case study) ──
   This is the static representative version of the interaction described
   in the brief: clicking a tab swaps which screenshot is shown inside the
   fixed browser frame. The future enhancement is a scroll-driven version
   where the screenshot moves continuously inside the frame instead of
   cross-fading between three fixed states. */
document.querySelectorAll("[data-browser]").forEach((browser) => {
  const tabs = browser.querySelectorAll(".browser__tab");
  const screens = browser.querySelectorAll(".browser__screen");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", String(active));
      });

      screens.forEach((screen) => {
        screen.classList.toggle(
          "is-active",
          screen.dataset.screen === target,
        );
      });
    });
  });
});
