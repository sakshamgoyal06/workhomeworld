import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fade, makeStyles, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: "inherit",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    margin: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create("width"),
    width: "auto",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function SearchBar({ productMasterList }) {
    const classes = useStyles();
  
  return (
    <div className={classes.search}>
      <Autocomplete
        disableClearable
        forcePopupIcon={false}
        classes={{ root: classes.inputInput }}
        style={{ width: "300px" }}
        options={productMasterList.map((option) => option.title)}
        freeSolo
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label="Search"
              variant="outlined"
              classes={{ root: classes.inputRoot }}
                  fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      ></Autocomplete>
    </div>
  );
}
