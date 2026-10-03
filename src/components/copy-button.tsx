"use client";

import { useState } from "react";

/** Copia el texto del elemento con ese id; si el navegador no deja, lo deja seleccionado. */
export function CopyButton({ targetId }: { targetId: string }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    const el = document.getElementById(targetId);
    if (!el) return;
    try {
      await navigator.clipboard.writeText(el.textContent ?? "");
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1600);
    } catch {
      const rango = document.createRange();
      rango.selectNodeContents(el);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(rango);
    }
  }

  return (
    <button type="button" onClick={copiar}>
      {copiado ? "Copiado" : "Copiar"}
    </button>
  );
}
