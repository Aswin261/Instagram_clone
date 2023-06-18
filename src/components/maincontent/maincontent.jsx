import React from "react";
import "./maincontent.css";
import Grid from "@mui/material/Grid";
import StatusBar from "../statusbar/statusbar";
import MainPage from "../mainPage";
import Info from "../info/info";
import Suggestions from "../suggestion/suggestion";

function MainContent() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={6} className="maincontent__container">
          <div>
            <StatusBar />
            <MainPage />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Info />
          <Suggestions />
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
