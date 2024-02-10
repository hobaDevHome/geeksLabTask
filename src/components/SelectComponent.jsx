import React from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { colors } from "../constants";

export default function List({ items }) {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select
        className="w-full p-2.5 text-white bg-white border rounded-md shadow-sm outline-none appearance-none "
        style={{ backgroundColor: colors.sectinBg }}
      >
        {items.map((item, index) => {
          return (
            <option value={item} key={index}>
              <CheckCircleOutlineOutlinedIcon />

              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
