/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // PENTING: Ubah ke 'class' agar manual toggle berfungsi
  theme: {
    extend: {},
  },
  plugins: [],
}