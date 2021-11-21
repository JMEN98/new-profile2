import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Wellcome";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Header from "./conponents/Header/Header";
import test from "./test.json";

function App(props) {
  return (
    <div>
       <Header/> 
     
      <h1 className="nav">  </h1>
      <div className=" main-home">
        <Link class="btn btn-light" to="/">
          {" "}
          Home
        </Link>
        <Link class="btn btn-light" to="/Resume">
          {" "}
          Resume{" "}
        </Link>
        <Link class="btn btn-success" to="/Work">
          {" "}
          Portfolio{" "}
        </Link>
        <Link class="btn btn-info" to="/Contact" > Contact</Link>
      </div>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} test={test} />}
        />
        
        <Route
          exact
          path="/Resume"
          render={(props) => <Resume {...props} />}
        ></Route>
        <Route
          exact
          path="/Work"
          render={(props) => <Work {...props} />}
        ></Route>
        <Route
          exact
          path="/Contact"
          render={(props) => <Contact {...props} />}
        ></Route>
      </Switch>
     
    </div>
  );
}

export default App;
