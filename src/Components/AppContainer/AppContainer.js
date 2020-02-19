import React from "react";

// Material Ui components
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "96vw",
    marginLeft: "2vw"
  }
});

const AppContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {children}
      </Grid>
    </div>
  );
};

export default AppContainer;
