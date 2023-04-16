/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 15px 30px rgba(233, 237, 242, 0.5)',
      }
    },
  },
  plugins: [],
}