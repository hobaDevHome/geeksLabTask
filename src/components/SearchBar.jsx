import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import { colors } from "../constants";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import InputText from "./IntputText";

const useStyles = makeStyles({
  section: {
    backgroundColor: colors.sectinBg,
    borderRadius: 19,
    height: 50,
  },
  avatar: {
    width: 30,
    height: "auto",
    objectFit: "contain",
    borderRadius: "50%",
    backgroundColor: "white",
  },
  logo: {
    width: 85,
    height: 45,
    objectFit: "contain",
  },
  adminData: {
    color: colors.dimmed,
    display: "flex",
    flexDirection: "row",

    alignItems: "center",
  },
  adminName: {
    fontSize: 10,

    fontFamily: "Inter",
    marginRight: 5,
  },
  searchInput: {},
  text: {
    fontSize: 18,
    textAlign: "left",
    margin: 0,
    marginTop: 20,
  },
  notification: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -5,
    top: 0,
    width: 14,
    height: 14,
    borderRadius: "50%",
    backgroundColor: "green",
    color: "white",
    fontSize: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  blueButton: {
    color: colors.white,
    height: 50,
    width: "100%",
    backgroundColor: colors.darkerBlue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    borderRadius: 3,
    cursor: "pointer",
  },
});

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Grid container marginTop={1}>
      <Grid item xs={4} md={1.2} padding={1}>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.logo} />
        </Link>
      </Grid>
      <Grid
        xs={8}
        md={10.8}
        item
        container
        className={classes.section}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        rowSpacing={{ sm: 0, xs: 1 }}
        marginTop={0.5}
        marginBottom={{ sm: 0, xs: 4 }}
      >
        <Grid item xs={11} sm={6} md={3} marginLeft={1}>
          <InputText />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={1.8}
          flexDirection={"row"}
          display={"flex"}
          justifyContent={"space-between"}
          paddingRight={1}
          alignItems={"center"}
        >
          <div className={classes.notification}>
            <div className={classes.badge}>6</div>
            <NotificationsIcon
              style={{ color: colors.Buttons, fontSize: 20 }}
            />
          </div>
          <div>
            <img src={avatar} alt="logo" className={classes.avatar} />
          </div>
          <div className={classes.adminData}>
            <div className={classes.adminName}>
              <p>Moni Roy</p>
              <p>Admin</p>
            </div>
            <div>
              <ExpandCircleDownOutlinedIcon style={{ fontSize: 14 }} />
            </div>
          </div>
        </Grid>

        {/*  */}
      </Grid>
    </Grid>
  );
};

export default SearchBar;
