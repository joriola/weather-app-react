import React from "react";
import "./Weather.css";
import Search from "./Search";
import Future from "./Future";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday, February 15, 2022",
    time: "10:00",
    description: "cloudy",
    temp: 10,
    humidity: 10,
    wind: 3,
  };
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-5">
          <div className="local">
            <h2>{weatherData.city}</h2>
            <h3>{weatherData.date}</h3>
            <h3>Last updated: {weatherData.time} local time</h3>
          </div>
        </div>
        <div className="col-2">
          <div className="weather">
            <img src="/" alt={weatherData.description} />
          </div>
          <h4>{weatherData.description}</h4>
        </div>
        <div className="col-3">
          <h1>{weatherData.temp}</h1>
        </div>
        <div className="col-2">
          <div className="moreInfo">
            <div className="units">
              <div className="celsius">
                <a href="/">°C</a> | <a href="/">°F</a>
              </div>
            </div>
            <div className="conditions">
              <div>Humidity: {weatherData.humidity}%</div>
              <div>Wind: {weatherData.wind}m/s</div>
            </div>
          </div>
        </div>
      </div>
      <Search />
      <Future />
    </div>
  );
}
