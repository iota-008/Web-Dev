module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "pulse-fast": "pulse 0.5s linear infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
