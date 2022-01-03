import {createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb6107',
    },
    secondary: {
      main: '#FEF5ED'
    },
    white: {
      main: '#fff'
    }
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: 'Roboto',
  }
});

export default theme;
