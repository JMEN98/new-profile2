import React, { useState } from "react";
import { Route, Switch, Link,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from "./pages/Wellcome";
import Resume from "./pages/Resume";
import Profile from "./pages/Profile"
import test from "./test.json"











function App(props) {
  return (
    <div >  
      <h1 className="nav"> </h1>
      <div className=" main-home">
      <Link    class="btn btn-light" to='/'> Home</Link>
      <Link  class="btn btn-light"  to="/Resume"> Resume </Link>
      <Link to="/Profile"class="btn btn-success" > Profile </Link>

      </div>
     <Switch>
     <Route exact path="/" render={(props) => <Welcome {...props}test={test}  />} />
     <Route exact path="/Resume" render={(props)=> <Resume {...props} />}></Route>
     <Route exact path ="/Profile"  render={(props)=> <Profile {...props}/>}> </Route>
     </Switch>
    </div>
  );
}

export default App;