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
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li>Last updated: {weatherData.time} local time</li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="weather">
            <img src="/" alt={weatherData.description} />
          </div>
          <div className="description">{weatherData.description}</div>
        </div>
        <div className="col-3">
          <h2>{weatherData.temp}</h2>
        </div>
        <div className="col-2">
          <div className="moreInfo">
            <div className="units">
              <div className="celsius">
                <a href="/">°C</a> | <a href="/">°F</a>
              </div>
            </div>
            <div className="conditions">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}m/s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Search />
      <Future />
    </div>
  );
}
