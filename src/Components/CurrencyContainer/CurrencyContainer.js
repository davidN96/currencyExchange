import React, { useState } from "react";

// MaterialUI components
import { Grid, Select, MenuItem, makeStyles } from "@material-ui/core";

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
  }
});

const CurrencyContainer = ({ currency }) => {
  const classes = useStyles();

  const [usdRef, setUsdRef] = useState();
  const [eurRef, setEurRef] = useState();

  return (
    <Grid className={classes.root} item xs={6}>
      {currency === "USD" ? (
        <AttachMoneyIcon className={classes.icon} />
      ) : (
        <EuroSymbolIcon className={classes.icon} />
      )}
    </Grid>
  );
};

export default CurrencyContainer;
