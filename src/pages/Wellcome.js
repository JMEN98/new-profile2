import React from "react";
import test from "../test.json"



function Welcome(props) {
  console.log(props.test)
  return (
   <body>
    <div className="welcome"  >
     <h1>Behold my portfolio </h1> 
     <h2>Welcome my name is </h2>
     <h1>{test.name}</h1>
     <h3>{test.id}</h3>
     
    </div>
    </body>
  );
}

export default Welcome;
