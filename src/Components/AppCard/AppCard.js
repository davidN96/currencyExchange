import React from "react";

// Material UI components
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  makeStyles
} from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

// React components
import CurrencyContainer from "../CurrencyContainer/CurrencyContainer";

const useStyles = makeStyles({
  root: {
    witdh: "70vw"
  },
  icon: {
    fontSize: "4rem",
    margin: "0 3vw 0 1vw"
  },
  title: {
    marginRight: "3vw"
  },
  header: {
    borderBottom: "1px solid rgba(0,0,0,0.15)",
    margin: "0 0 25px 0"
  }
});

const AppCard = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader
          className={classes.header}
          avatar={<MonetizationOnIcon className={classes.icon} />}
          title={
            <Typography variant="h5" className={classes.title}>
              Cash Converter
            </Typography>
          }
          subheader="Calculate currency values"
        />
        <CardContent>
          <Grid container>
            <CurrencyContainer />
            <CurrencyContainer />
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AppCard;
