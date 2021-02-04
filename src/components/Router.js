import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/profile">
        Profile
      </Route>
      <Route exact path="/projects">
        Projects
      </Route>
    </Router>
  );
};

export default AppRouter;
