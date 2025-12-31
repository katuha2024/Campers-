/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/images/home/background.webp')",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        light: '#f7f7f7',
      },
    },
  },
  plugins: [],
};
