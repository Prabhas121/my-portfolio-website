/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          DEFAULT: '#14b8a6', // Vibrant Teal
          light: '#2dd4bf',
          dark: '#0f766e',
        },
        'dark': {
          DEFAULT: '#1c1c1e', // Very dark background
          lighter: '#2c2c2e', // Card background
        }
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
