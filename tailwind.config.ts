// import type { Config } from "tailwindcss";



import { heroui } from "@heroui/theme";


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|input|ripple|spinner|form).js"
  ],
  theme:{ extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    screens: {
      xs: "430px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },},
  darkMode: "class",
  plugins: [heroui()],
}