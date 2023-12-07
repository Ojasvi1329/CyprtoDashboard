import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  makeStyles,
  createTheme,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate(); // Use useNavigate for navigation
  const { currency, setCurrency } = CryptoState();

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value); // Make sure setCurrency is correctly defined in the CryptoState context
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ffff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} className={classes.title}>
              Crypto Hunter
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              value={currency}
              onChange={handleChangeCurrency} // Use handleChangeCurrency to set the currency
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
