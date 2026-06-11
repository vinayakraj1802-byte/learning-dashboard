import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08090c",
        panel: "#101218",
        line: "rgba(255,255,255,0.12)",
        mint: "#7cf7c7",
        iris: "#a78bfa",
        ember: "#ffb86b"
      },
      boxShadow: {
        glow: "0 0 48px rgba(124, 247, 199, 0.14)",
        card: "0 24px 70px rgba(0,0,0,0.36)"
      }
    }
  },
  plugins: []
};

export default config;
