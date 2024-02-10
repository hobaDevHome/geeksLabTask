import React from "react";

import { colors, industries, risk, marketCap } from "../constants";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";
import DropDownListComponent from "./DropDownList";
import ButtonComponent from "./ButtonComponent";
import List from "./SelectComponent";

const useStyles = makeStyles({
  filtersContianer: {
    fontFamily: "Inter",
    color: "white",
    fontSize: 12,
    display: "felx",
  },
  header: {
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
const Filters = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.filtersContianer}>
      <Grid item xs={12}>
        <p className={classes.header}>Filters</p>
      </Grid>
      <Grid item xs={12} marginBottom={3}>
        <h5>Industry</h5>
        <List items={industries} />
        <h5>Choose something</h5>
      </Grid>
      <Grid item xs={12} marginBottom={3}>
        <h5>Market Cap</h5>
        <DropDownListComponent items={marketCap} />
        <h5>Press Apply to see changes.</h5>
      </Grid>
      <Grid item xs={12} marginBottom={3}>
        <h5>Risk</h5>
        <DropDownListComponent items={risk} />
      </Grid>
      <Grid item xs={12} marginTop={3}>
        <ButtonComponent />
      </Grid>
    </Grid>
  );
};

export default Filters;
