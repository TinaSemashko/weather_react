import React from "react";
import GetIcon from "./GetIcon";
import DataTime from "./DataTime";

import "./ShowWeather.css";

export default function showWeatherAll(props) {
  return (
    <div className="Table">
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <h5>
                <DataTime date={props.data.date} />
              </h5>
              <h1>{props.data.city}</h1>
              <span className="temp">
                <GetIcon codeIcon={props.data.icon} size={100} />
                {Math.round(props.data.temperature)}°C
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-next m-5">
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
