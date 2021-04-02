import React from "react";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="day">
            Sat
          </div>
          <div className="weather-icon">
            icon
          </div>
          <div className="temperatures">
            <span className="max-temp">19</span>
            <span className="min-temp">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}