import axios from "axios";
import React, { useEffect, useState } from "react";

const Hourly = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=449210b97dec4534b03150245242412&q=Tashkent&days=1&aqi=yes&alerts=yes"
      )
      .then((res) => setData(res.data.forecast.forecastday[0].hour));
  }, []);

  const hourlyArray = [
    data?.slice(0, 1)[0],
    data?.slice(12, 13)[0],
    data?.slice(15, 16)[0],
    data?.slice(18, 19)[0],
    data?.slice(21, 22)[0],
  ];

  function soatniOlish(timeString) {
    const date = new Date(timeString);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  const hour = hourlyArray?.map((hour, id) => (
    <div
      className="flex flex-col items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md bg-gray-100 w-[120px] h-[180px]"
      key={id}
    >
      <p className="text-sm font-semibold">{soatniOlish(hour?.time)}</p>
      <img
        className="w-[40px] h-[40px]"
        src={hour?.condition?.icon}
        alt="weather-icon"
      />
      <p className="text-xs text-gray-700 text-center">
        {hour?.condition?.text}
      </p>
      <p className="text-lg font-bold">
        {hour?.temp_c}
        <sup>o</sup>C
      </p>
    </div>
  ));

  return (
    <div className="bg-white w-[700px] h-[300px] p-4 rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-lg font-bold text-center mb-2">Hourly Forecast</h1>
      <div className="flex justify-between items-center">{hour}</div>
    </div>
  );
};

export default Hourly;
