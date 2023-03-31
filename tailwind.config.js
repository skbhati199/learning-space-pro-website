/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/screens/**/*.{html,js,jsx,ts,tsx}",
    "./src/permissions/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
    "./src/provider/**/*.{html,js,jsx,ts,tsx}",
    "./src/routes/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2k": "1920px",
    },
    extend: {},
  },
  plugins: [],
};