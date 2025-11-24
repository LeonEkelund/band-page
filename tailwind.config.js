/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["UnifrakturCook", "serif"],
        display: ["Anton", "sans-serif"],  // Headline font
        body: ["Chivo", "sans-serif"],     // Clean readable text
      },
    },
  },
  plugins: [],
};
