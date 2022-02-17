import React from "react";
import "./Future.css";

export default function Future() {
  let futureData = {
    city: "New York",
    day: "Tues",
    time: "10:00",
    description: "cloudy",
    high: 10,
    low: 2,
    humidity: 10,
    wind: 3,
  };
  return (
    <div className="Future">
      future
      <div className="row">
        <div className="col">
          <img src="/" alt={futureData.description} />
          <div className="day">{futureData.day}</div>
          <div className="temp">
            <span className="high">{futureData.high}°</span>
            <span className="low"> | {futureData.low}°</span>
          </div>
        </div>
        <div className="col">
          <img src="/" alt={futureData.description} />
          <div className="day">{futureData.day}</div>
          <div className="temp">
            <span className="high">{futureData.high}°</span>
            <span className="low"> | {futureData.low}°</span>
          </div>
        </div>
        <div className="col">
          <img src="/" alt={futureData.description} />
          <div className="day">{futureData.day}</div>
          <div className="temp">
            <span className="high">{futureData.high}°</span>
            <span className="low"> | {futureData.low}°</span>
          </div>
        </div>
        <div className="col">
          <img src="/" alt={futureData.description} />
          <div className="day">{futureData.day}</div>
          <div className="temp">
            <span className="high">{futureData.high}°</span>
            <span className="low"> | {futureData.low}°</span>
          </div>
        </div>
        <div className="col">
          <img src="/" alt={futureData.description} />
          <div className="day">{futureData.day}</div>
          <div className="temp">
            <span className="high">{futureData.high}°</span>
            <span className="low"> | {futureData.low}°</span>
          </div>
        </div>
        <div className="col">
          <img src="/" alt={futureData.description} />
          <div className="day">{futureData.day}</div>
          <div className="temp">
            <span className="high">{futureData.high}°</span>
            <span className="low"> | {futureData.low}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
