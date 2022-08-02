import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Box, Typography, Inputbase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles.js";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore New Places
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.SearchIcon}>
                <SearchIcon />
              </div>
              <Inputbase
                placeholder="Search..."
                className={{
                  root: classes.inputroot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
