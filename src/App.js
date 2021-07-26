import React, { useState } from "react";
import { Route, Switch, Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./pages/Wellcome";
import Resume from "./pages/Resume";
import test from "./test.json"









function App(props) {
  return (
    <div >
      <div className=" main-home">
      <Link className="btn btn-primary" to='/'> Home</Link>
      <Link className="btn btn-primary" to="/Resume"> Resume </Link>

      </div>
     <Switch>
     <Route exact path="/" render={(props) => <Welcome {...props}test={test}  />} />
     <Route exact path="/Resume" render={(props)=> <Resume {...props} />}></Route>
     </Switch>
    </div>
  );
}

export default App;