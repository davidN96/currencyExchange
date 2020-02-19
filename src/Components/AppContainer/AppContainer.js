import React from "react";

// Material Ui components
import { Grid } from "@material-ui/core";

const AppContainer = ({ children }) => {
  return (
    <Grid container justify="center">
      {children}
    </Grid>
  );
};

export default AppContainer;
