import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Base theme
let theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#f5f6fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",

    // Headings
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
      //letterSpacing: "-0.015em"
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1.3,
      //letterSpacing: "-0.01em"
    },
    h3: { fontWeight: 600, lineHeight: 1.35 },
    h4: { fontWeight: 500, lineHeight: 1.4 },
    h5: { fontWeight: 500, lineHeight: 1.45 },
    h6: {
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.05em",
      // textTransform: "uppercase",
    },

    // Body text
    body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#555",
    },

    // Subtitles
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      color: "#555",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      color: "#666",
    },

    // Captions & overline
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
      color: "#777",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 500,
      textTransform: "uppercase",
      color: "#777",
    },

    // Buttons
    // button: { fontWeight: 600 },
  },

  shape: {
    borderRadius: 8,
  },

  spacing: 8, // default spacing unit
});

// Enable responsive font sizes
theme = responsiveFontSizes(theme);

export default theme;
