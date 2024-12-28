import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // Har sekundda vaqtni yangilash
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Intervalni tozalash
  }, []);

  let hour = time.getHours().toString().padStart(2, "0");
  let minute = time.getMinutes().toString().padStart(2, "0");
  let seconds = time.getSeconds().toString().padStart(2, "0");

  function weekDay(week) {
    switch (week) {
      case 1:
        return `Dushanba`;
      case 2:
        return `Seshanba`;
      case 3:
        return `Chorshanba`;
      case 4:
        return `Payshanba`;
      case 5:
        return `Juma`;
      case 6:
        return `Shanba`;
      case 0:
        return `Yakshanba`;
      default:
        return "";
    }
  }

  return (
    <div className="w-[250px] h-[300px] bg-white rounded-xl flex flex-col justify-center items-center shadow-md">
      <h1 className="text-[40px] text-slate-800 font-extrabold">
        {hour}:{minute}:{seconds}
      </h1>
      <p className="text-[25px] text-slate-800 font-extrabold">
        {weekDay(time.getDay())}
      </p>
    </div>
  );
};

export default Clock;
