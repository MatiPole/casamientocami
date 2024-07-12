/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FCFCFC",
        dark: "#222222",
        graydarker: "#494949",
        graylighter: "#6B6B6B",
        opacity: "rgba(0, 0, 0, 0.89)",
        opacity2: "#1d1d1b",
        cream: "#f2ede7",
        lightbrown: "#c7b65e",
        red: "#b21f1c",
        orange: "#f4a631",
        cta: "#575756",
      },
      backdropFilter: {
        blur: "blur(5px)",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        title: ["BrittanySignature", "sans-serif"],
        accent: ["GastonDemo", "sans-serif"],
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1700px",
      },
    },
  },
  darkmode: "class",
};

export default config;
