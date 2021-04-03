import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import AppProfile from "../routes/Profile";
import AppProjects from "../routes/Projects";
import Wil from "../routes/Wil";
import AppHeader from "./Header";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        Home
        <AppHeader />
        <Navigation />
      </Route>
      <Route exact path="/profile">
        <Navigation />
        <AppProfile />
      </Route>
      <Route exact path="/projects">
        Projects
        <Navigation />
        <AppRouter />
        <AppProjects />
      </Route>
      <Route exact path="/learning">
        What I'm Learning
        <Wil />
        <Navigation />
      </Route>
    </Router>
  );
};

export default AppRouter;
