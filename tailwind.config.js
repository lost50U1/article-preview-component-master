/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      VeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
      DesaturatedDarkBlue: "hsl(214, 17%, 51%)",
      GrayishBlue: "hsl(213, 23%, 69%)",
      LightGrayishBlue: "hsl(210, 46%, 95%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      poppins: "'Manrope', sans-serif;",
    },
    extend: {},
  },
  plugins: [],
};
