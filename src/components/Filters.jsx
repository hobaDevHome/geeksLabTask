import React from "react";
import { industries, risk, marketCap } from "../constants";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";

import ButtonComponent from "./ButtonComponent";
import List from "./List";
import InputList from "./InputList";

const useStyles = makeStyles({
  filtersContianer: {
    fontFamily: "Poppins",
    color: "white",
    fontSize: 12,

    display: "felx",
  },
  header: {
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: "bold[600]",
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
        <h5 style={{ marginBottom: 8 }}>Industry</h5>
        <List items={industries} />
        <h5 style={{ marginTop: 5, color: "#a3a3a3" }}>Choose something</h5>
      </Grid>
      <Grid item xs={12} marginBottom={3}>
        <h5 style={{ marginBottom: 8 }}>Market Cap</h5>
        <List items={marketCap} />
        <h5 style={{ marginTop: 5, color: "#a3a3a3" }}>
          Press Apply to see changes.
        </h5>
      </Grid>
      <Grid item xs={12} marginBottom={3}>
        <h5 style={{ marginBottom: 8 }}>Risk</h5>
        <InputList items={risk} />
      </Grid>
      <Grid item xs={12} marginTop={3}>
        <ButtonComponent />
      </Grid>
    </Grid>
  );
};

export default Filters;
