import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="container">
      <div className="about_inner_container">
        <div className="about_leftside">
          <img
            src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="resim"
            width="80%"
          />
        </div>
        <div className="about_rightside">
          {" "}
          <h2>Who am I ?</h2>
          <p>
            Enthusiastic Front-End Developer with 1.5 year of experience
            building scalable and responsive web applications. Specialize in
            Javascript, ES6 and ReactJS. Familiar with Front-End tools,
            libraries such as Redux, Material UI, Sass, Less and Bootstrap.
            Always passionate learning about new skills and eager to work on
            innovative technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
