import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import TimeAttackPage from "./components/TimeAttackPage";
import Menu from "./components/Menu";
import Page404 from "./components/Page404";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/drift">
              <DriftPage />
            </Route>
            <Route path="/timeattack">
              <TimeAttackPage />
            </Route>
            <Route path="/forza">
              <ForzaPage />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
