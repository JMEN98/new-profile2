import React from "react";
import Watch from"../images/watch.jpg"


function Work(props) {
  return (
    <div>
      <h1> Behold my portfolio </h1>
      <article> 
      <ul className="list">
        <li>
          <a
            className="link"
            href="https://github.com/KenzieAcademy-Students/kenziecart-app-JMEN98"
          >
            {" "}
            is a app
          </a>
        </li>
        <li>
          <a className="link" href="https://github.com/JMEN98/portfolio">
            {" "}
            my old portfolio
          </a>{" "}
        </li>
        <li>
          <a
            className="link"
            href="https://github.com/KenzieAcademy-Students/mern-course-capstone-NathanHolt"
          >
            {" "}
            mern stack
          </a>{" "}
        </li>
        <li>
          {" "}
          <a className="link" href="https://github.com/JMEN98/calculator">
            {" "}
            jeff calculator{" "}
          </a>
        </li>
        <li>
          {" "}
          <a
            className="link"
            href="https://github.com/KenzieAcademy-Students/challenge-dates-and-times-JMEN98" 
           
          >
           
            {" "}
            stop watch
           
          </a>
        </li>
      </ul>
      </article>
      <img src={Watch}></img>
    </div>
  );
}
export default Work;
