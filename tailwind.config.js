/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#151515",
        mainOrange: "#f8a145",
        secondaryOrange: "#FDA769",
        creamy: "#FFF4E0",
        lightningYellow: "#fcc01e",
        mainGrey: "#716e6e",
      },
    },
  },
  plugins: [],
};
