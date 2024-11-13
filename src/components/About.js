import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Hello! I'm a passionate web developer with experience in building dynamic, user-friendly websites. 
    I enjoy problem-solving and learning new technologies.</p>
    <img src={image} alt="I made this" />
  </div>;
}

export default About;
