import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../constants";
import ticker from "../images/ticker.png";
import contract from "../images/contract.png";
import volume from "../images/volume.png";
import risk from "../images/risk.png";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  itemContainer: {
    backgroundColor: colors.aleterBg,
    borderRadius: 12,

    border: `1px solid #D5D5D5`,
    padding: "10px 24px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
    width: "100%",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headerItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 22,
    marginRight: 5,
  },
  value: {
    fontSize: 12,
    color: "#B9B9B9",
  },
});

const AlertItem = ({ data }) => {
  const classes = useStyles();
  const [opened, setopened] = useState(false);
  return (
    <Grid container xs={12}>
      <Grid
        item
        onClick={() => setopened(!opened)}
        className={classes.itemContainer}
        marginBottom={0.5}
        style={{
          backgroundImage: opened
            ? `linear-gradient(120deg, ${colors.gradColor1} , ${colors.gradColor2})`
            : "",
        }}
      >
        {opened && (
          <Grid
            item
            container
            className={classes.headerContainer}
            xs={12}
            paddingLeft={0}
            paddingRight={0}
          >
            <Grid
              item
              className={classes.headerItem}
              xs={6}
              md={2}
              marginBottom={{ xs: 2, sm: 1, md: 0 }}
            >
              <img src={ticker} alt="ticker" className={classes.icon} />
              <div className={classes.value}>{data.ticker}</div>
            </Grid>
            <Grid
              item
              className={classes.value}
              xs={0}
              md={1}
              display={{ xs: "none", sm: "none", md: "flex" }}
            >
              |
            </Grid>
            <Grid
              item
              className={classes.headerItem}
              xs={5}
              md={2}
              marginBottom={{ xs: 2, sm: 1, md: 0 }}
            >
              <img src={contract} alt="ticker" className={classes.icon} />
              <div className={classes.value}>{data.contracts} Contracts</div>
            </Grid>
            <Grid
              item
              className={classes.value}
              xs={0}
              md={1}
              display={{ xs: "none", sm: "none", md: "flex" }}
            >
              |
            </Grid>
            <Grid item className={classes.headerItem} xs={5} md={2}>
              <img src={volume} alt="ticker" className={classes.icon} />
              <div className={classes.value}>{data.volume} %</div>
            </Grid>
            <Grid
              item
              className={classes.value}
              xs={0}
              md={1}
              display={{ xs: "none", sm: "none", md: "flex" }}
            >
              |
            </Grid>
            <Grid item className={classes.headerItem} xs={5} md={2}>
              <img src={risk} alt="ticker" className={classes.icon} />
              <div className={classes.value}>{data.risk}</div>
            </Grid>
          </Grid>
        )}
        <div>{data.body}</div>
      </Grid>
    </Grid>
  );
};

export default AlertItem;
