import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: {min: '640px', max: '768px'},
      md: {min: '768px',max : '1020px' },
      lg: {min: '1020px',max : '12240px' },
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", ...fontFamily.sans], // Custom font add
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
