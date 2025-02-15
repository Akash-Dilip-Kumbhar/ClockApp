import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Navbar from './Navbar';
import Worldclock from './Worldclock';
import Alarmclock from './Alarmclock';
import Stopwatch from './Stopwatch';
import Timer from './Timer'; 

function Clock() {
  return (
    <Router>
        <Navbar/>
      <div>
        <Routes>
          <Route path="/ClockApp/Worldclock" element={<Worldclock />} />
          <Route path="/ClockApp/Alarmclock" element={<Alarmclock />} />
          <Route path="/ClockApp/Stopwatch" element={<Stopwatch />} />
          <Route path="/ClockApp/Timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  )
}
export default Clock