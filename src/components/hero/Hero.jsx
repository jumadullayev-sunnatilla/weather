import React from "react";
import Clock from "../clock/Clock";
import TodaysData from "../todaysData/TodaysData";

const Hero = () => {
  return (
    <div className="flex justify-between items-center mb-10">
      <Clock />
      <TodaysData />
    </div>
  );
};

export default Hero;
