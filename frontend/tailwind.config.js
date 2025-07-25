/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5e2ced',
        'secondary': '#051441',
        'accent': '#FF0A78',
        'body-color': '#677294',
        'text-black': '#282835',
        'gray-bg': '#f9f9f9',
        'white': '#ffffff',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
      },
      boxShadow: {
        'card': '0 10px 30px 0 rgba(20, 3, 67, 0.08)',
        'kpi': '0 14px 30px 0 rgba(68, 28, 183, 0.25)',
      },
    },
  },
  plugins: [],
}