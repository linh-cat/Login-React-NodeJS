import "./App.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="/login">
            Login
          </a>
          <a className="nav-link" href="/signup">
            Sign Up
          </a>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
