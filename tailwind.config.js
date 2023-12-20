/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './index.html', './features.js'],
  theme: {
    extend: {
      fontFamily: {
        'no': ['example', 'sans'],
        'display': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'navs': '#D7FCD4',
        'peaches': '#FFA987',
        'dark': '#24563A',
        'accentmid': '#58A4B0',
        'accentpale': '#EFDAFB'
      }
    },
  },
  plugins: [],
}

