/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Ruqaa' : ['Aref Ruqaa','serif'],
        'cairo' : ['Cairo','sans-serif'],
        'quran' : ['Lateef','serif']
      }
    },
  },
  plugins: [],
}
