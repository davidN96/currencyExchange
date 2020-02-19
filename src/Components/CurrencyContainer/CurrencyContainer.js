import React, { useState } from "react";

// MaterialUI components
import { Grid, TextField, makeStyles } from "@material-ui/core";

// MaterialUI icons
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  },
  select: {
    borderRadius: "50%",
    border: "none",
    backgroundColor: "none"
  },
  icon: {
    fontSize: "3rem"
  },
  input: {
    width: "25%",
    textAlign: "center",
    marginLeft: "3vw",
    fontSize: "3rem"
  }
});

const CurrencyContainer = ({ currency }) => {
  const classes = useStyles();
  const [value, setValue] = useState();
  return (
    <Grid className={classes.root} item xs={6}>
      {currency === "USD" ? (
        <AttachMoneyIcon className={classes.icon} />
      ) : (
        <EuroSymbolIcon className={classes.icon} />
      )}
      <TextField
        label={currency === "USD" ? "USD" : "EUR"}
        className={classes.input}
        value={value}
        color="secondary"
      />
    </Grid>
  );
};

export default CurrencyContainer;
