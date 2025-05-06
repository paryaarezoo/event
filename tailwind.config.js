/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.html"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazirmatn"],
        pelak: ["Pelak"],
      },
      colors: {

        accent: "#213555",
        secondary: "#213448",
        primary: "#7AC6D2",

      },
    },
  },
  plugins: [],
}