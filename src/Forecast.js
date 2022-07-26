import React, { useState, useEffect } from "react";
import ForecastForDay from "./ForecastForDay";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function showForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="row">
        {forecast.map((dailyForecast, index) => {
          if (index > 0 && index < 6) {
            return (
              <div className="col col-tab p-3" key={index}>
                <ForecastForDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "1e0dcb1b35c33c85c8f53ba10ee78100";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrlGeo = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric`;

    axios.get(`${apiUrlGeo}&appid=${apiKey}`).then(showForecast);
  }
}
