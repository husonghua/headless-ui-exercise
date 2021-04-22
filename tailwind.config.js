const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
        amber: colors.amber,
        "light-blue": colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
