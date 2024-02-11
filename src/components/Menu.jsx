import * as React from "react";
import { useState } from "react";

import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";
import { colors } from "../constants";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  section: {
    backgroundColor: colors.sectinBg,
    borderRadius: 19,
  },
  menuItemLarge: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  menuItemLargeText: {
    fontSize: 30,
    fontFamily: "Inter",
    fontWeight: "bold",

    padding: 10,
    "&:hover": {
      color: "white",
    },
  },
  separator: {
    color: "#B9B9B9",
    fontSize: 36,
    fontWeight: "normal",
  },
  comingSoon: {
    position: "absolute",
    backgroundColor: colors.TextBG,
    color: colors.text,
    borderRadius: 14,
    padding: "0px 5px",
    fontSize: 11,
    top: 0,
  },
});

function MenuB() {
  const [selected, setselected] = useState(3);
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      style={{
        backgroundColor: colors.sectinBg,
        borderRadius: 19,
        padding: "8px",
      }}
      display={"flex"}
      justifyContent="space-around"
    >
      <Grid item xs={12} sm={12} md={2}>
        <Link
          to={"/trading"}
          className={classes.menuItemLarge}
          style={{ color: selected === 0 ? "white" : "#48484830" }}
          onClick={() => setselected(0)}
        >
          <div className={classes.comingSoon}>coming soon</div>
          <div className={classes.menuItemLargeText}>Trading</div>
        </Link>
      </Grid>

      <Grid
        display={{ xs: "none", sm: "none", md: "flex" }}
        item
        className={classes.separator}
      >
        |
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Link
          to={"/automation"}
          className={classes.menuItemLarge}
          style={{ color: selected === 1 ? "white" : "#48484830" }}
          onClick={() => setselected(1)}
        >
          <div className={classes.comingSoon}>coming soon</div>
          <div className={classes.menuItemLargeText}>Automation</div>
        </Link>
      </Grid>

      <Grid
        display={{ xs: "none", sm: "none", md: "flex" }}
        item
        className={classes.separator}
      >
        |
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Link
          to={"/portfolio"}
          className={classes.menuItemLarge}
          style={{ color: selected === 2 ? "white" : "#48484830" }}
          onClick={() => setselected(2)}
        >
          <div className={classes.comingSoon}>coming soon</div>
          <div className={classes.menuItemLargeText}>Portfolio</div>
        </Link>
      </Grid>
      <Grid
        display={{ xs: "none", sm: "none", md: "flex" }}
        item
        className={classes.separator}
      >
        |
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Link
          to={"/"}
          className={classes.menuItemLarge}
          style={{ color: selected === 3 ? "white" : "#48484830" }}
          onClick={() => setselected(3)}
        >
          <div className={classes.menuItemLargeText}>Alerts</div>
        </Link>
      </Grid>

      <Grid
        display={{ xs: "none", sm: "none", md: "flex" }}
        item
        className={classes.separator}
      >
        |
      </Grid>
      <Grid item xs={12} sm={12} md={2}>
        <Link
          to={"/training"}
          className={classes.menuItemLarge}
          style={{ color: selected === 4 ? "white" : "#48484830" }}
          onClick={() => setselected(4)}
        >
          <div className={classes.menuItemLargeText}>Training</div>
        </Link>
      </Grid>
    </Grid>
  );
}
export default MenuB;
