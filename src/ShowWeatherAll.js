import React from "react";
import GetIcon from "./GetIcon";

import "./App.css";

export default function showWeatherAll(props) {
  return (
    <div className="weather">
      <h1>{props.city}</h1>
      <GetIcon codeIcon={props.icon} />
      <div>Description: {props.description}</div>
      <div>Temperature: {props.temp}°C</div>
      <div>Humidity: {props.humidity}%</div>
      <div>Wind: {props.wind} m/c</div>
    </div>
  );
}
