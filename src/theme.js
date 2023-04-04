import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
      para: "#75848f",
      underline:"#f7e6c1"
      //   white:""
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    // h1: {
    //   fontSize: 53,
    //   [theme.breakpoints.only("sm")]: {
    //     fontSize: 71,
    //   },
    // },
    // h2: {
    //   fontSize: 10,
    //   [theme.breakpoints.only("sm")]: {
    //     fontSize: 71,
    //   },
    //   [theme.breakpoints.only("xs")]: {
    //     fontSize: 9,
    //   },
    // },
  },
});
