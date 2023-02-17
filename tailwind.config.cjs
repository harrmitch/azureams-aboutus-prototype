const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto Slab", ...defaultTheme.fontFamily.sans],
        sans: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // https://utopia.fyi/
        sm: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
        base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
        xl: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
        "2xl": "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)",
        "3xl": "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
        "4xl": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
        "5xl": "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)",
      },
    },
  },
  plugins: [],
};
