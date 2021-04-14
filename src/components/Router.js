import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppProfile from "../routes/Profile";
import AppProjects from "../routes/Projects";
import Wil from "../routes/Wil";
import AppFooter from "./Footer";
import AppHeader from "./Header";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        <Navigation />
        Home
        <AppHeader />
      </Route>
      <Route path="/profile">
        <Navigation />
        <AppProfile />
      </Route>
      <Route path="/projects">
        <Navigation />
        Projects
        <AppProjects />
      </Route>
      <Route path="/learning">
        <Navigation />
        What I'm Learning
        <Wil />
      </Route>
      <AppFooter />
    </Router>
  );
};

export default AppRouter;
