/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0c",
        charcoal: "#121216",
        emerald2: "#0b6d4f",
        emerald3: "#1a8c66",
        antique: "#c9a24a",
        antique2: "#a8852f",
        rose1: "#d8a07a",
        rose2: "#b87357",
        bone: "#ece4d2",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(201,162,74,0.7), transparent)",
        "gold-radial":
          "radial-gradient(circle at 50% 50%, rgba(201,162,74,0.25), transparent 70%)",
        "emerald-radial":
          "radial-gradient(circle at 50% 50%, rgba(26,140,102,0.45), rgba(11,109,79,0.05) 60%, transparent 75%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
        gold: "0 0 24px rgba(201,162,74,0.25)",
      },
    },
  },
  plugins: [],
};
