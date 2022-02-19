import React, { useState } from "react";
import "./Conversion.css";

export default function Conversion(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="Conversion">
        <div className="row">
          <div className="col-7">
            <h2>{Math.round(props.celsius)}</h2>
          </div>
          <div className="col-5">
            <div className="units">
              °C |{" "}
              <a href="/" onClick={showFahrenheit}>
                °F
              </a>
            </div>
            <div className="conditions">
              <ul>
                <li>Humidity: {props.humidity}%</li>
                <li>Wind: {Math.round(props.wind)}m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row Conversion">
        <div className="col-7">
          <h2>{Math.round(fahrenheit())}</h2>
        </div>
        <div className="col-5">
          <div className="units">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </div>
          <div className="conditions">
            <ul>
              <li>Humidity: {props.humidity}%</li>
              <li>Wind: {Math.round(props.wind)}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
