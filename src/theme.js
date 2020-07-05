import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
//TODO : Link fonts to variants in theme


const colors = {
  primary: "#c5c3e9",
  primaryDark: "#8988a3",
  primaryLight: "#d0cfed",
  primaryContrastText: "#fff",
  secondary: "#1F221C",
  secondaryDark: "#151713",
  secondaryLight: "#4b4e49",
  secondaryContrastText: "#2a2b2e",

  textPrimary: "#2a2b2e",
  textSecondary: "#ffffff",
  gray: "#857e61",
};

var theme = createMuiTheme({
    
  typography: {
    fontFamily: [
      "Lato",
      "Linden Hill",
      "Palanquin",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    font1: [
      "Linden Hill",
      "Palanquin",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    font2: [
      "'Nothing You Could Do'",
      "Linden Hill",
      "Palanquin",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontPara: [
      "Palanquin",
      "Linden Hill",

      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
    palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primary,
      dark: colors.primaryDark,
      contrastText: colors.primaryContrastText,
    },
    secondary: {
      light: colors.secondaryLight,
      main: colors.secondary,
      dark: colors.secondaryDark,
      contrastText: colors.secondaryContrastText,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
