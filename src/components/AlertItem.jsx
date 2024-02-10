import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { colors } from "../constants";
import ticker from "../images/ticker.png";
import contract from "../images/contract.png";
import volume from "../images/volume.png";
import risk from "../images/risk.png";

const useStyles = makeStyles({
  itemContainer: {
    backgroundColor: colors.aleterBg,
    borderRadius: 12,
    marginBottom: 5,

    border: `1px solid ${colors.dimmed}`,
    padding: "8px 24px",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
    // "&:hover": {
    //   transform: "scale(1.05)",
    // },
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
    <div
      onClick={() => setopened(!opened)}
      className={classes.itemContainer}
      style={{
        backgroundImage: opened
          ? `linear-gradient(130deg, ${colors.gradColor1} , ${colors.gradColor2})`
          : "",
      }}
    >
      {opened && (
        <div className={classes.headerContainer}>
          <div className={classes.headerItem}>
            <img src={ticker} alt="ticker" className={classes.icon} />
            <div className={classes.value}>{data.ticker}</div>
          </div>
          <div className={classes.value}>|</div>
          <div className={classes.headerItem}>
            <img src={contract} alt="ticker" className={classes.icon} />
            <div className={classes.value}>{data.contracts} Contracts</div>
          </div>
          <div className={classes.value}>|</div>
          <div className={classes.headerItem}>
            <img src={volume} alt="ticker" className={classes.icon} />
            <div className={classes.value}>{data.volume} %</div>
          </div>
          <div className={classes.value}>|</div>
          <div className={classes.headerItem}>
            <img src={risk} alt="ticker" className={classes.icon} />
            <div className={classes.value}>{data.risk}</div>
          </div>
        </div>
      )}
      <div>{data.body}</div>
    </div>
  );
};

export default AlertItem;
