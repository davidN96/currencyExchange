import React, { useState, useRef } from "react";

// Material UI components
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  RootRef,
  CircularProgress,
  makeStyles
} from "@material-ui/core";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LoopIcon from "@material-ui/icons/Loop";

// React components
import CurrencyContainer from "../CurrencyContainer/CurrencyContainer";

// Animation kit
import gsap from "gsap";

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
  },
  iconWrapper: {
    padding: "1vh",
    marginBottom: "3vh",
    cursor: "pointer"
  },
  valuePanel: {
    padding: "6vh 0"
  }
});

const AppCard = ({
  isLoaded,
  changeCurrency,
  changeVals,
  globalCurrencies
}) => {
  const classes = useStyles();
  const usdRef = useRef();
  const eurRef = useRef();
  const btnRef = useRef();
  const [isChanged, setIsChanged] = useState(false);

  const replaceCurrencies = () => {
    gsap.from(btnRef.current, { rotation: 360, duration: 0.3 });
    setIsChanged(!isChanged);
    changeCurrency();
    if (!isChanged) {
      gsap.to(usdRef.current, { marginLeft: "50%" });
      gsap.to(eurRef.current, { marginLeft: "-100%" });
    } else {
      gsap.to(usdRef.current, { marginLeft: "0%" });
      gsap.to(eurRef.current, { marginLeft: "0%" });
    }
  };

  return (
    <Grid item md={6}>
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
            {isLoaded ? (
              <>
                <Grid container justify="center">
                  <RootRef rootRef={btnRef}>
                    <div
                      onClick={replaceCurrencies}
                      className={classes.iconWrapper}
                    >
                      <LoopIcon fontSize="large" />
                    </div>
                  </RootRef>
                </Grid>
                <RootRef rootRef={usdRef}>
                  <CurrencyContainer
                    currency="USD"
                    isChanged={isChanged}
                    globalValue={globalCurrencies}
                  />
                </RootRef>
                <RootRef rootRef={eurRef}>
                  <CurrencyContainer
                    currency="EUR"
                    isChanged={!isChanged}
                    globalValue={globalCurrencies}
                  />
                </RootRef>
              </>
            ) : (
              <Grid container justify="center">
                <RootRef rootRef={btnRef}>
                  <div className={classes.iconWrapper}>
                    <CircularProgress color="secondary" />
                  </div>
                </RootRef>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardContent className={classes.valuePanel}></CardContent>
      </Card>
    </Grid>
  );
};

export default AppCard;
