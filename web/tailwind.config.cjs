/** @type {import('tailwindcss').Config} */
module.exports = {
  // content -> arquivos HTML com as "classes" do tailwind
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
      },
    },
  },
  plugins: [],
};
