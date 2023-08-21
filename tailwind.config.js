/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':'#B09066'
      }
    },
  },
  plugins: [],
}

