/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      screens: {
        other: {
          min: "400px",
          max: "1196px",
        },
      },
    },
  },
  plugins: [],
};