/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './public/**/*.{html,js}'
  ],
  theme: {
    extend: {fontFamily: {
      google: ['Poppins', 'sans-serif'],
    },
  },
},
  plugins: [],
}
