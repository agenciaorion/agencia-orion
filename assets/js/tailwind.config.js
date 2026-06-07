// ============================================================
// TAILWIND CONFIG — AGÊNCIA ORION
// Todas as cores, fontes e espaçamentos da identidade visual.
// Altere aqui e todas as páginas são atualizadas juntas.
// ============================================================

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // --- Cores principais da marca ---
        "orion-purple":  "#621BEE",
        "deep-slate":    "#1A1A1A",
        "stark-white":   "#FFFFFF",
        "muted-gray":    "#757575",

        // --- Superfícies e containers ---
        "surface":                    "#fcf9f8",
        "surface-dim":                "#dcd9d9",
        "surface-bright":             "#fcf9f8",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#f6f3f2",
        "surface-container":          "#f0eded",
        "surface-container-high":     "#eae7e7",
        "surface-container-highest":  "#e5e2e1",
        "surface-variant":            "#e5e2e1",
        "surface-tint":               "#692af5",

        // --- Texto sobre superfícies ---
        "on-surface":         "#1c1b1b",
        "on-surface-variant": "#494456",
        "inverse-surface":    "#313030",
        "inverse-on-surface": "#f3f0ef",

        // --- Bordas ---
        "outline":         "#7a7488",
        "outline-variant": "#cbc3d9",

        // --- Primária (roxo escuro) ---
        "primary":              "#4900be",
        "on-primary":           "#ffffff",
        "primary-container":    "#621bee",
        "on-primary-container": "#d4c5ff",
        "inverse-primary":      "#cdbdff",
        "primary-fixed":        "#e8ddff",
        "primary-fixed-dim":    "#cdbdff",
        "on-primary-fixed":     "#20005e",
        "on-primary-fixed-variant": "#5000cf",

        // --- Secundária ---
        "secondary":              "#5d5f5f",
        "on-secondary":           "#ffffff",
        "secondary-container":    "#dfe0e0",
        "on-secondary-container": "#616363",
        "secondary-fixed":        "#e2e2e2",
        "secondary-fixed-dim":    "#c6c6c7",
        "on-secondary-fixed":     "#1a1c1c",
        "on-secondary-fixed-variant": "#454747",

        // --- Terciária ---
        "tertiary":              "#732600",
        "on-tertiary":           "#ffffff",
        "tertiary-container":    "#9a3600",
        "on-tertiary-container": "#ffbea6",
        "tertiary-fixed":        "#ffdbce",
        "tertiary-fixed-dim":    "#ffb599",
        "on-tertiary-fixed":     "#370e00",
        "on-tertiary-fixed-variant": "#7f2b00",

        // --- Erro ---
        "error":              "#ba1a1a",
        "on-error":           "#ffffff",
        "error-container":    "#ffdad6",
        "on-error-container": "#93000a",

        // --- Fundo global ---
        "background":    "#fcf9f8",
        "on-background": "#1c1b1b",
      },

      borderRadius: {
        DEFAULT: "0.5rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        full:    "9999px",
      },

      spacing: {
        "margin-desktop":  "64px",
        "margin-mobile":   "20px",
        "gutter":          "24px",
        "container-max":   "1280px",
        "unit":            "8px",
      },

      // Famílias de fonte — nomes exatos usados nas classes do HTML
      // Uso: font-headline-lg, font-body-md, font-label-bold, etc.
      fontFamily: {
        "display-lg":        ["Hanken Grotesk", "sans-serif"],
        "headline-lg":       ["Hanken Grotesk", "sans-serif"],
        "headline-lg-mobile":["Hanken Grotesk", "sans-serif"],
        "headline-md":       ["Hanken Grotesk", "sans-serif"],
        "body-lg":           ["Inter", "sans-serif"],
        "body-md":           ["Inter", "sans-serif"],
        "label-bold":        ["Inter", "sans-serif"],
      },

      fontSize: {
        "display-lg":        ["72px",  { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
        "headline-lg":       ["48px",  { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-lg-mobile":["32px",  { lineHeight: "1.2", fontWeight: "700" }],
        "headline-md":       ["32px",  { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg":           ["18px",  { lineHeight: "1.6", fontWeight: "400" }],
        "body-md":           ["16px",  { lineHeight: "1.5", fontWeight: "400" }],
        "label-bold":        ["14px",  { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" }],
      },
    },
  },
};
