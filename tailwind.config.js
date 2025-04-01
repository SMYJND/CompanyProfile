/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1600px",
        xl: "1440px",
        lg: "1280px",
        md: "1024px",
        smLg: "992px",
        tablet: "834px",
        smMd: "768px",
        xs: "430px",
      },
    },
  },
  plugins: [],
};
