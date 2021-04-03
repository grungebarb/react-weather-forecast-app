import React from "react";
import "./Units.css";

export default function Units(props) {
  return (
    <div className="col-3 Units">
      <span className="current-temperature">{Math.round(props.celsius)}</span>
      <span className="units">ºC</span>
    </div>
  );
}