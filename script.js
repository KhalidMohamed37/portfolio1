(() => {
  "use strict";

  const root = document.documentElement;
  const themeButton = document.getElementById("theme-toggle");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const year = document.getElementById("current-year");
  const themeStorageKey = "khalid-portfolio-theme";

  function readSavedTheme() {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch {
      return null;
    }
  }

  function applyTheme(theme, save = false) {
    const normalized = theme === "dark" ? "dark" : "light";
    root.dataset.theme = normalized;

    if (themeButton) {
      const icon = themeButton.querySelector("span");
      if (icon) icon.textContent = normalized === "dark" ? "☀" : "☾";
      themeButton.setAttribute(
        "aria-label",
        normalized === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      themeButton.title = normalized === "dark" ? "Switch to light theme" : "Switch to dark theme";
    }

    if (save) {
      try {
        localStorage.setItem(themeStorageKey, normalized);
      } catch {
        // Theme still works for this page view if storage is unavailable.
      }
    }
  }

  const savedTheme = readSavedTheme();
  const systemPrefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));

  themeButton?.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  function closeMenu() {
    if (!navToggle || !navMenu) return;
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.toggle("is-open") ?? false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navMenu?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  if (year) year.textContent = String(new Date().getFullYear());

  // If a portrait file is not present, avoid showing a broken-image icon.
  const portrait = document.querySelector(".portrait-frame img");
  portrait?.addEventListener("error", () => {
    portrait.style.display = "none";
    const frame = portrait.closest(".portrait-frame");
    if (frame) {
      frame.classList.add("portrait-missing");
      if (!frame.querySelector(".portrait-fallback")) {
        const fallback = document.createElement("div");
        fallback.className = "portrait-fallback";
        fallback.innerHTML = '<span>K</span><strong>Add your portrait</strong><small>Place the image at assets/portrait.png</small>';
        frame.prepend(fallback);
      }
    }
  }, { once: true });
})();
