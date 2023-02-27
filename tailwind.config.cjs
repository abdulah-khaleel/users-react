/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('/src/assets/background.webp')",
      },
      fontFamily: {
        body: ['Nunito'],
      },
    },
  },
  plugins: [],
  // plugins: [require('daisyui')],
};
