import React from "react";
import { Switch, Route } from "react-router-dom";

import VideoPage from "./Components/VideoPage/VideoPage";
import LandingPage from "./Components/LandingPage/LandingPage";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/VideoPage" component={VideoPage} />
  </Switch>
);

export default Main;
