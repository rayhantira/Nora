/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        sm: "414px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      letterSpacing: {
        tightest: "-.075em",
      },
      colors: {
        primary: "#fffef9",
        yellow: "#FEC223",
        black: "#000000",
        white: "#FFFFFF",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        monarque: ["Mornarque", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
        bolditalic: "700",
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
        bolditalic: "italic",
      },

      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #B1CECC 0%, #DCCA9C 63%)",
        "card-gradient": "linear-gradient(90deg, #E2EDE9 0%, #F1EEDD 77%)",
        "footer-gradient": "linear-gradient(90deg, #f5f7f3 0%, #fbf8ef 77%)",
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
};
