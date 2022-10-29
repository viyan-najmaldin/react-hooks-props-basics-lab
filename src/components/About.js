import React from "react";
import Links from "./Links";

function About(props) {
  const { bio } = props;
  if (bio) {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  } else {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.github} linkedin={props.linkedin} />
      </div>
    );
  }
}

export default About;
