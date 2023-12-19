/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        "light":"rgba(246, 246, 246, 1)",
        "dark":"rgba(41, 37, 38, 1)",
        "light-sec":"rgba(224, 234, 243, 1)",
        "pri-ora":"rgba(248, 102, 66, 1)",
      },
      fontFamily:{
        "monts":["Montserrat", "sans-serif"],
      },
    
    },
  },
  plugins: [],
}

