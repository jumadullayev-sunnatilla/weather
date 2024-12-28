import axios from "axios";
import React, { useEffect, useState } from "react";

const Forecast = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=449210b97dec4534b03150245242412&q=Tashkent&days=6&aqi=no&alerts=no"
      )
      .then((res) => setData(res.data.forecast.forecastday));
  }, []);

  // Sana funksiyasi
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const weekdays = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
    ];
    const months = [
      "Yan",
      "Fev",
      "Mar",
      "Apr",
      "May",
      "Iyun",
      "Iyul",
      "Avg",
      "Sen",
      "Okt",
      "Noy",
      "Dek",
    ];
    const weekday = weekdays[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${weekday}, ${day}-${month}`;
  }

  const forecastDay = data?.slice(1, 6).map((day, id) => (
    <div
      key={id}
      className="w-full flex items-center justify-between bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-2"
    >
      <img className="w-10 h-10" src={day.day.condition.icon} alt="" />
      <p className="text-lg font-semibold text-gray-700">
        {day.day.avgtemp_c} <sup>o</sup>C
      </p>
      <p className="text-sm text-gray-500">{formatDate(day.date)}</p>
    </div>
  ));

  return (
    <div className="max-w-[350px] w-full h-[300px] bg-white rounded-xl flex flex-col justify-between items-center border border-gray-300 p-4 shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      <h1 className="text-xl font-bold text-gray-700 mb-4">5 Days Forecast</h1>
      {forecastDay}
    </div>
  );
};

export default Forecast;
