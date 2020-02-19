import React from "react";

// MaterialUI components
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center"
  }
});

const CurrencyContainer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12} md={6}>
      Currency 2
    </Grid>
  );
};

export default CurrencyContainer;
