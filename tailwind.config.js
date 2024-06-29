/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "primary-red": "hsl(0, 78%, 62%)",
      "primary-cyan": "hsl(180, 62%, 55%)",
      "primary-orange": "hsl(34, 97%, 64%)",
      "primary-blue": "hsl(212, 86%, 64%)",
      "very-dark-blue": "hsl(234, 12%, 34%)",
      "grayish-blue": "hsl(229, 6%, 66%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      poppins: "'Poppins', sans-serif;",
    },
    extend: {},
  },
  plugins: [],
};
