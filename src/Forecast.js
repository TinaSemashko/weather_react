import React, { useState } from "react";
import GetIcon from "./GetIcon";

import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="row">
      <div className="col col-tab p-3">
        <div class="days">
          <b>Mon</b>
        </div>
        <div>
          <GetIcon codeIcon={props.codeIcon} size={50} />
        </div>
        <div>
          <span>
            <strong>25° - </strong>
          </span>
          <span>12°</span>
        </div>
      </div>
      <div className="col  col-tab p-3">
        <div class="days">
          <b>Tue</b>
        </div>
        <div>
          <GetIcon codeIcon="09d" size={50} />
        </div>
        <div>
          <span>
            <strong>25° - </strong>
          </span>
          <span>12°</span>
        </div>
      </div>
      <div className="col  col-tab p-3">
        <div class="days">
          <b>Wed</b>
        </div>
        <div>
          <GetIcon codeIcon="13d" size={50} />
        </div>
        <div>
          <span>
            <strong>25° - </strong>
          </span>
          <span>12°</span>
        </div>
      </div>
      <div className="col  col-tab p-3">
        <div class="days">
          <b>Thu</b>
        </div>
        <div>
          <GetIcon codeIcon="01d" size={50} />
        </div>
        <div>
          <span>
            <strong>25° - </strong>
          </span>
          <span>12°</span>
        </div>
      </div>
      <div className="col  col-tab p-3">
        <div class="days">
          <b>Fri</b>
        </div>
        <div>
          <GetIcon codeIcon="50d" size={50} />
        </div>
        <div>
          <span>
            <strong>25° - </strong>
          </span>
          <span>12°</span>
        </div>
      </div>
    </div>
  );
}
