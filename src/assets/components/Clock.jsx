import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Worldclock from "./Worldclock";
import Alarmclock from "./Alarmclock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

function Clock() {
  return (
    <>
      {
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path="/ClockApp/" element={<Worldclock />}></Route>
          <Route path="/" element={<Worldclock />}></Route>
            <Route path="/Worldclock" element={<Worldclock />}></Route>
            <Route path="/Alarmclock" element={<Alarmclock />}></Route>
            <Route path="/Stopwatch" element={<Stopwatch />}></Route>
            <Route path="/Timer" element={<Timer />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}
export default Clock;
