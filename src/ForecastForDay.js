import React from "react";
import GetIcon from "./GetIcon";

import "./Forecast.css";

export default function ForecastForDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="days">
      <b>{day()}</b>
      <div>
        <div>
          <GetIcon codeIcon={props.data.weather[0].icon} size={50} />
        </div>
        <span className="temp-max">
          <strong>{maxTemperature()} </strong>
        </span>
        <span className="temp-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
