import React from "react";
import Forecast from "../forecast/Forecast";
import Hourly from "../hourly/Hourly";

const Second = () => {
  return (
    <div className="containerM flex justify-between items-center">
      <Hourly />
      <Forecast />
    </div>
  );
};

export default Second;
