import type { Config } from "tailwindcss";

const config: Config = {
  // Light mode only — matching polystate.io
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "polystate-blue": "#0E36A5",
        "polystate-dark": "#030B21",
        "polystate-light-blue": "#CADDFF",
        "polystate-accent": "#D8F2DC",
        "polystate-neutral": "#EAEAEA",
        "polystate-light": "#F5F5F7",
        "polystate-section": "#F9F9F9",
        "polystate-text": "#030B21",
        "polystate-text-secondary": "#6B7280",
        "polystate-border": "#EAEAEA",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
