import React from "react";
import { colors, altersData } from "../constants";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Filters from "../components/Filters";
import AlertItem from "../components/AlertItem";

const useStyles = makeStyles({
  section: {
    backgroundColor: colors.sectinBg,
    borderRadius: 19,
  },
  column: {
    backgroundColor: colors.alertsBg,
    borderRadius: 15,
    padding: 10,
  },
});

const Alerts = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{ backgroundColor: colors.sectinBg, borderRadius: 19 }}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      padding={{ xs: 0, sm: 0.5, md: 2 }}
      marginLeft={{ xs: 0, sm: 0.5, md: 2 }}
      marginTop={1}
      marginBottom={1}
      alignItems={"start"}
    >
      <Grid
        item
        container
        xs={12}
        md={2.5}
        className={classes.column}
        justifyContent={"start"}
        marginTop={2}
        padding={{ xs: 1, sm: 1, md: 2 }}
        marginLeft={{ xs: 1, sm: 1, md: 2.5 }}
      >
        <Filters />
      </Grid>
      <Grid
        item
        xs={12}
        md={8.6}
        className={classes.column}
        paddingRight={1.5}
        paddingLeft={1}
        marginLeft={3}
        justifyContent={"start"}
        marginTop={2}
        marginRight={{ xs: 1, sm: 1, md: 1.5 }}
      >
        {altersData.map((alert, index) => {
          return <AlertItem key={index} data={alert} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Alerts;
