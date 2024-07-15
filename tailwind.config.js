// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths according to your project structure
    "./public/index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  safelist: [
    "opacity-40",
    "opacity-50",
    "opacity-60",
    "opacity-70",
    "opacity-80",
    "opacity-90",
  ],
};
