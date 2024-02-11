import * as React from "react";
import { Button as BaseButton } from "@mui/base/Button";
import { styled } from "@mui/system";
import { colors } from "../constants";

export default function ButtonComponent() {
  return <Button>Apply Filters</Button>;
}

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5;
  width: 100%;
  background-color: ${colors.Buttons};
  padding: 13px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;


 
  &:hover {
    transform: scale(1.05)
  }



  `
);
