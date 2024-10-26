import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        '3xl': '1920px',
        '4xl': '2400px',
        '5xl': '3200px',
      },
      colors: {
        danger: '#9D174D',
        main: '#115e59',
        'main-hover': '#167972',
      }
    },
  },
  plugins: [],
};
export default config;
