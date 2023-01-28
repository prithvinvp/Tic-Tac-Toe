/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "481px",
      lg: "720px",
      xl: "1080px",
      xxl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
