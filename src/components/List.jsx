import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { colors, industries, risk, marketCap } from "../constants";
import stack from "../images/stack.png";
import { makeStyles } from "@mui/styles";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
const useStyles = makeStyles({
  listContainer: {
    backgroundColor: colors.Bg,
    fontFamily: "Poppins",
    color: "#a3a3a3",
    fontSize: 12,
    display: "felx",
    width: "100%",
  },
  listHeader: {
    border: `1px solid white`,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    padding: "8px 12px",
    cursor: "pointer",
    alignItems: "center",
  },
  optionsContainer: {
    border: `1px solid white`,
    borderRadius: 10,
    marginTop: 8,
    padding: "8px 4px",
  },
  option: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "white",
      borderRadius: 10,
      color: colors.dimmed,
      margin: 0,
    },
  },
});

const List = ({ items }) => {
  const [isOpened, setIsopnend] = useState(false);
  const [selectedOption, setSelectedOption] = useState(items[0]);
  const classes = useStyles();

  const onSelected = (option) => {
    setIsopnend(false);
    setSelectedOption(option);
  };

  return (
    <div className={classes.listContainer}>
      <div
        className={classes.listHeader}
        onClick={() => setIsopnend(!isOpened)}
      >
        <img
          src={stack}
          alt="select"
          style={{ marginRight: 10, width: 14, height: 14 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {selectedOption}
          {isOpened ? (
            <ExpandLessOutlinedIcon style={{ fontSize: 18, color: "black" }} />
          ) : (
            <ExpandMoreOutlinedIcon style={{ fontSize: 18, color: "black" }} />
          )}
        </div>
      </div>
      {isOpened && (
        <div className={classes.optionsContainer}>
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className={classes.option}
                onClick={() => onSelected(item)}
              >
                <div>
                  <CheckCircleOutlineOutlinedIcon
                    style={{
                      fontSize: 16,
                      color: colors.dimmed,
                      marginRight: 10,
                    }}
                  />
                </div>
                <div>{item}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default List;
