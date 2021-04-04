import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-info">
        <h1>{props.data.city}</h1>
        <ul>
          <li>Last update: <FormattedDate date={props.data.date} />h</li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row acurate-data-section">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} className="current-icon" />
          <div className="centered-temperature">
            <span className="current-temperature">{Math.round(props.data.temperature)}</span>
            <span className="units">ºC</span>
          </div>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li><strong>Humidity:</strong> {props.data.humidity}%</li>
            <li><strong>Wind speed:</strong> {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}