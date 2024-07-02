/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('./src/assets/bef05e397070e9ef000065c27778656c.gif')", // Update the path to your image
      },
    },
  },
  plugins: [],
};
