// import React from "react";
import "./sidenav.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import './styles.css';
import LogoutIcon from "@mui/icons-material/Logout";
// import {useAuth} from './AuthContext'
import React, { useState, useEffect } from "react";
import logo from "./CA_light.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import { Container } from "@mui/system";
import "./sidenav.css";

const Sidenav = () => {
  return (
    <>
      <Grid
        container
        bgcolor={"black"}
        color={"white"}
        columnGap={0}
        spacing={0}
        className="topGrid"
      >
        <Grid
          item
          md={0.5}
          sx={{ minWidth: 91 }}
        className="corners"
        >
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Sed malesuada lobortis
          pretium.
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ minWidth: 87 }} className="corners">
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
      </Grid>
      <Divider></Divider>
      <Grid
        container
        bgcolor={"black"}
        color={"white"}
        columnGap={0}
        spacing={0}
        
      >
        <Grid item md={0.5} sx={{ minWidth: 91 }} style={{height:"calc(100vh - 129px)",display:"flex",flexDirection:"column"}}>
          <img src="img/techkriti.svg" height={"45px"}></img>
          <br></br>
          <img src="img/techkriti.svg" height={"45px"}></img>
          <br></br>
          <img src="img/techkriti.svg" height={"45px"}></img>
          <br></br>
          <img src="img/techkriti.svg" height={"45px"}></img>
          <br></br>
          <img src="img/techkriti.svg" height={"45px"}></img>
          {/* <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br> */}
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Sed malesuada lobortis
          pretium.
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ minWidth: 87 }} style={{display:"flex",flexDirection:"column"}}>
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
      </Grid>
      <Divider/>
      <Grid
        container
        bgcolor={"black"}
        color={"white"}
        columnGap={0}
        spacing={0}
        style={{position:"absolute",bottom:"0"}}
      >
        <Grid item md={0.5} sx={{ minWidth: 91 }} className="corners">
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
          dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Sed malesuada lobortis
          pretium.
        </Grid>
        <Divider color={"white"} orientation="vertical" flexItem></Divider>
        <Grid item md={0.5} sx={{ height: 66, minWidth: 87 }} className="corners">
          <img src="img/techkriti.svg" height={"45px"}></img>
        </Grid>
        <Divider></Divider>
      </Grid>
    </>
  );
};

export default Sidenav;
