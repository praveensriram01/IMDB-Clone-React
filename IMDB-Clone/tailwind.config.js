/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu' : ['Ubuntu', 'sans-serif']
      },

      colors: {
        'graycus': '#242424',
        'whitecus': '#E4E2DD'
      }
    },
  },
  plugins: [],
}

