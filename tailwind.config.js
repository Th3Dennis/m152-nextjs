const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Roboto', // <-- Roboto is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];

// THIS OBJECT SHOULD BE SIMILAR TO ./helpers/theme.js
const themeConstants = {
  paper: "#F9F9F9",
  primary: {
    main: "#488286",
    dark: "#305252",
  },
  secondary: {
    main: "#77878B",
    dark: "#373E40",
  },
  error: {
    main: "#b22222",
    dark: "#8b0000",
  },
  fg: { main: "#fff", dark: "rgba(55, 65, 81, 1)" },
  breakpoints: {
    xs: "0px",
    mb: "350px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
  },
};

module.exports = {
 mode: "jit",
 purge: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./hoc/*.{js,ts,jsx,tsx}",
    "./Widgets/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fontFamily, // <-- this is where the override is happening
    extend: {
      colors: {
        paper: themeConstants.paper,
        primary: themeConstants.primary,
        secondary: themeConstants.secondary,
        error: themeConstants.error,
        fg: themeConstants.fg.main,
        "fg-dark": themeConstants.fg.dark,
      },
    }, 
    
    // We over ride the whole screens with breakpoints for width. The 'ha' breakpoint will help us in blocking hover animations on devices not supporting hover.
    screens: {
      ...defaultTheme.screens,
      ...themeConstants.breakpoints,
      ha: { raw: "(hover: hover)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
