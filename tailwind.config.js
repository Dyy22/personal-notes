/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["Poppins"],
      colors: {
        "choco-1": "#472D2D",
        "choco-2": "#553939",
        "choco-3": "#704F4F",
        "choco-4": "#A77979",
      }
    },
  },
  plugins: [],
}
