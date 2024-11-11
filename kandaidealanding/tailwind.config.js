/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#0000ff',
        second: 'rgb(31 41 55)'
      }
    },
  },
  plugins: [],
}