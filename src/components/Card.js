import React from "react";
import "./Card.css";

export default function (props) {
  const classes = "card " + props.className;

  return <div className="card">{props.children}</div>;
}
