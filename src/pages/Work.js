import React from "react";
import { Route, Switch, Link } from "react-router-dom";

function Work(props) {
  return (
    <div>
      <h1> Behold my portfolio </h1>
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
    </div>
  );
}
export default Work;
