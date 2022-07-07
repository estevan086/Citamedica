module.exports = {
    content: [
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js',
      './app/views/**/*',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("daisyui")],

    // daysiUI config (optional)
    daisyui:{
      styled: true,
      base: true
    },  
  }