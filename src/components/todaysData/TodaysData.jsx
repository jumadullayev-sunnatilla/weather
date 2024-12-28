import axios from "axios";
import React, { useEffect, useState } from "react";
import { LuSunrise, LuSunset } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";
import uv from "../../assets/uv.png";

const TodaysData = () => {
  const [dataCurrent, setDataCurrent] = useState(null);
  const [dataAstro, setDataAstro] = useState(null);
  const [dataLocation, setDataLocation] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.weatherapi.com/v1/forecast.json?key=449210b97dec4534b03150245242412&q=tashkent&days=1&aqi=yes&alerts=yes"
      )
      .then((res) => {
        setDataCurrent(res.data.current);
        setDataAstro(res.data.forecast.forecastday[0].astro);
        setDataLocation(res.data.location);
      });
  }, []);

  return (
    <div className="w-[800px] h-[350px] bg-white rounded-xl p-6 shadow-lg text-gray-800 mx-auto flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{dataLocation?.name}</h1>
          <p className="text-sm text-gray-500">
            {dataLocation?.localtime}, {dataLocation?.region}
          </p>
        </div>
        <div className="text-3xl font-semibold">
          {dataCurrent?.temp_c} <sup>°C</sup>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
          <img
            src={dataCurrent?.condition.icon}
            alt="Weather Icon"
            className="w-16 h-16"
          />
          <h2 className="text-xl font-bold mt-2">
            {dataCurrent?.condition.text}
          </h2>
          <p className="text-sm text-gray-500">
            Feels like: {dataCurrent?.feelslike_c} <sup>°C</sup>
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <LuSunrise className="text-yellow-500 text-2xl" />
            <p>Sunrise: {dataAstro?.sunrise}</p>
          </div>
          <div className="flex justify-between items-center">
            <LuSunset className="text-orange-500 text-2xl" />
            <p>Sunset: {dataAstro?.sunset}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg grid grid-cols-2 gap-2">
          <div className="flex flex-col items-center">
            <WiHumidity className="text-blue-500 text-4xl" />
            <p className="text-lg">{dataCurrent?.humidity}%</p>
            <p className="text-sm text-gray-500">Humidity</p>
          </div>
          <div className="flex flex-col items-center">
            <BsWind className="text-green-500 text-4xl" />
            <p className="text-lg">{dataCurrent?.wind_kph} km/h</p>
            <p className="text-sm text-gray-500">Wind Speed</p>
          </div>
          <div className="flex flex-col items-center">
            <IoTimerOutline className="text-purple-500 text-4xl" />
            <p className="text-lg">{dataCurrent?.pressure_mb} hPa</p>
            <p className="text-sm text-gray-500">Pressure</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={uv} alt="UV Index" className="w-10 h-10" />
            <p className="text-lg">{dataCurrent?.uv}</p>
            <p className="text-sm text-gray-500">UV Index</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysData;
