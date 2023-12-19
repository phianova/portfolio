/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Aclonica', 'sans-serif']
      },
      colors: {
        'navs': '#9F88C0',
        'peaches': '#FCD0A1',
        'dark': '#231942',
        'palegreen': '#87CBAC',
        'palestgreen': '#C5EBC3'
      }
    },
  },
  plugins: [],
}

