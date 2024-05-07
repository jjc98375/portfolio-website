/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false, // or 'media' or 'class'

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': "300px",

      'sm': "640px",

      "md": "768px",

      // 'xs': "210px",

      // 'sm': "520px",

      // "md": "780px",



      "lg": "1024px",
      // => @media (min-width: 1024px) { ... }

      "xl": "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      inset: {
        17: "68px",
        26: "104px",
      },
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.cyan,
    },
  },
  plugins: [],
};
