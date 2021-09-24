import React from "react";
import test from "../test.json";
import skills from "../skills.json";
import hire from "../images/hire.jpg";
// console.log(skills)
function Resume(props) {
  
  return (
    <div>
      <h1>behold my Resume </h1>
      <div className="class">
        <article class="shadow">
      
           <h1> {skills.name} </h1>
           <h1> {skills.h2} </h1>
           <p> {skills.p} </p>
            <h1> {skills.job} </h1>
            <p> {skills["Job history1"]} </p>
            <p> {skills["Job history2"]} </p>
            <h1> {skills.s} </h1>
            <p> {skills.S1} </p>
            <p> {skills.s2} </p>
          <img
            className="hire"
            src={hire}
            width="200px"
            height="200px"
            align="center"
          ></img>
        </article>
      </div>
    </div>
  );
}
export default Resume;
