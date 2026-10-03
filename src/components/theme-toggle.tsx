"use client";

export function ThemeToggle() {
  function alternar() {
    const root = document.documentElement;
    const actual = root.getAttribute("data-theme");
    const oscuro = actual === "dark" || (!actual && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const siguiente = oscuro ? "light" : "dark";
    root.setAttribute("data-theme", siguiente);
    try {
      localStorage.setItem("spi-theme", siguiente);
    } catch {}
  }

  return (
    <button className="theme" type="button" onClick={alternar} aria-label="Cambiar entre tema claro y oscuro">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
