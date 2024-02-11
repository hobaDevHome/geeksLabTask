import * as React from "react";
import PropTypes from "prop-types";
import { Box, styled } from "@mui/system";
import { Button } from "@mui/base/Button";
import { Input as BaseInput, inputClasses } from "@mui/base/Input";
import SearchIcon from "@mui/icons-material/Search";

const Input = React.forwardRef(function CustomInput(props, ref) {
  const { slots, ...other } = props;
  return (
    <BaseInput
      slots={{
        root: InputRoot,
        input: InputElement,
        ...slots,
      }}
      {...other}
      ref={ref}
    />
  );
});

Input.propTypes = {
  slots: PropTypes.shape({
    input: PropTypes.elementType,
    root: PropTypes.elementType,
    textarea: PropTypes.elementType,
    placeholder: PropTypes.elementType,
  }),
};

export default function InputText() {
  const [input, setInput] = React.useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: 2,
      }}
    >
      <Input
        id="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
        startAdornment={
          <InputAdornment>
            <IconButton size="small">
              <SearchIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  );
}

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const InputRoot = styled("div")(
  ({ theme }) => `
  font-family: 'Nunitos Sans', sans-serif;
  font-weight: 400;
  border-radius: 15px;
  width: 100%;
  height: 26px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[500]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};

  display: flex;
  align-items: center;
  justify-content: center;


  &.${inputClasses.focused} {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[600] : blue[200]
    };
  }

  &:hover {
    border-color: ${blue[400]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const InputElement = styled("input")(
  ({ theme }) => `
  font-size: 0.6rem;
  font-family: inherit;
  font-weight: 400;
  height: 26px;

  flex-grow: 1;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: inherit;
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;
`
);

const IconButton = styled(Button)(
  ({ theme }) => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;

  color: ${theme.palette.mode === "dark" ? grey[300] : grey[400]};
  `
);

const InputAdornment = styled("div")`
  margin: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
