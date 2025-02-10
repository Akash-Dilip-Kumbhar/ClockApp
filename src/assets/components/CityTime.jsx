import React, { useState, useEffect } from "react";

function CityTime({ city }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    timeZone: city.timezone,
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
  });

  return (
    <li className="city-zone">
      <div className="city-name">{city.name}</div>
      <div className="city-time">{formattedTime}</div>
    </li>
  );
}

export default CityTime;
