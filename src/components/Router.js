import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AppProfile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        Home
        <Navigation />
      </Route>
      <Route exact path="/profile">
        <Navigation />
        <AppProfile />
      </Route>
      <Route exact path="/projects">
        Projects
        <Navigation />
      </Route>
      <Route exact path="/learning">
        What I'm Learning
        <Navigation />
      </Route>
    </Router>
  );
};

export default AppRouter;
