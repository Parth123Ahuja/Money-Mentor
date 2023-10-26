import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Card } from "@mui/material";

function MutualFund() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div
      className="w-full mt-40 h-1/2 flex flex-row 
  justify-evenly"
    >
      <div className="w-1/3  flex flex-col gap-5">
        <div className="w-full px-1 flex justify-between flex-row text-align-baseline">
          <p className="py-3">Recommend By :-</p>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Select"
              onChange={handleChange}
            >
              <MenuItem value={10}>Return</MenuItem>
              <MenuItem value={20}>Investment Period</MenuItem>
              <MenuItem value={30}>Risk</MenuItem>
              <MenuItem value={40}>Type</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField label="Your Goal" variant="outlined" />
        <TextField label="Price" variant="outlined" />

        {(() => {
          switch (value) {
            case 10:
              return <TextField label="Expected Return(%)" variant="filled" />;
            case 20:
              return (
                <TextField label="Investment Period(Months)" variant="filled" />
              );
            case 30:
              return (
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Risk
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="LOW"
                      control={<Radio />}
                      label="Low"
                    />
                    <FormControlLabel
                      value="MEDIUM"
                      control={<Radio />}
                      label="Medium"
                    />

                    <FormControlLabel
                      value="HIGH"
                      control={<Radio />}
                      label="High"
                    />
                  </RadioGroup>
                </FormControl>
              );
            case 40:
              return (
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Type
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="DEBT"
                      control={<Radio />}
                      label="Debt"
                    />
                    <FormControlLabel
                      value="EQUITY"
                      control={<Radio />}
                      label="Equity"
                    />

                    <FormControlLabel
                      value="HYBRID"
                      control={<Radio />}
                      label="Hybrid"
                    />
                  </RadioGroup>
                </FormControl>
              );
            default:
              return <div>Render a default content</div>;
          }
        })()}
        <Button variant="outlined" startIcon={<SearchIcon />}>
          Search
        </Button>
      </div>

      {/* Mutual Funds cards */}
      <div className="w-1/3 h-full overflow-hidden overflow-y-auto flex gap-5  py-6 flex-col "></div>
    </div>
  );
}

export default MutualFund;
