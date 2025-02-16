import React, { useState, useEffect } from "react";
import CityTime from "./CityTime";
import Cities from "./time.json"
function Worldclock() {
  // const cities = [
  //   { id: 0, name: "New York", timezone: "America/New_York" },
  //   { id: 1, name: "London", timezone: "Europe/London" },
  //   { id: 2, name: "Frankfurt", timezone: "Europe/Berlin" },
  //   { id: 3, name: "Tokyo", timezone: "Asia/Tokyo" },
  // ];

  const [time, setTime] = useState(new Date());

  const currentTime = time.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const currentDate = new Date().toDateString();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-12">
            <div className="mainClockBx">
              <div className="mainClockRing">
                <div className="mainClock">
                  <div className="time">{currentTime}</div>
                  <div className="date">{currentDate} </div>
                </div>
              </div>
            </div>
            </div>
            <div className="col-12">
              <ul className="cities">
                <li className="city-zone">
                  <div className="city-name-head">City Name</div>
                  <div className="city-time-head">Current Time</div>
                </li>
                <div className="city-zone-body">
                {Cities.map((city, index) => (
                  <CityTime city={city} key={index} />
                ))}
                </div>
               
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Worldclock;
