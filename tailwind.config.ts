import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lila: "var(--lila)",
        "foreground-lila": "var(--foreground-lila)",
        "lila-hover": "var(--neon-lila)",
      },
      fontFamily: {
        body: ["Amiko", "sans-serif"],
      },
      fontSize: {
        "heading-xl": '36px',
        "heading-l": '30px',
        "heading-m": '22px',
        "heading-s": '18px',
        "heading-xs": '16px',
        "body-l": '16px',
        "body-m": '14px',
        "body-s": '12px',
        'label-l': '18px',
        'label-m': '16px',
        'label-s': '12px',
      },
      fontWeight: {
        "heading-xl": '700',
        "heading-l": '700',
        "heading-m": '500',
        "heading-s": '500',
        "heading-xs": '400',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
