/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans'],
        'Inter-bold': ['Interbold', 'Bold'],
        'Inter-light': ['Interlight', 'Light'],
      }
    },
  },
  plugins: [],
}