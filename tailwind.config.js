/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // CRA looks inside src
  ],
  theme: {
    extend: {
      fontFamily: {
        funnel: ["'Funnel'", "sans-serif"],
      },
    },
    
  },
  plugins: [],
}
