import React from "react";
import ReactDOM from "react-dom";
import App from "./Layouts/App/App";
import "./index.css";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@material-ui/core";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
