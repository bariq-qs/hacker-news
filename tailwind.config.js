/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        grey1: '#D9D9D9',
        grey2: '#9B9B9B',
        grey3: '#808080',
        grey4: '#8B8B8B',
        black1: '#242424',
      }
    },
  },
  plugins: [],
}

