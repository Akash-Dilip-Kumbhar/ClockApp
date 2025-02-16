import React from "react";
import { Link } from "react-router-dom";

import Worldclock from "./Worldclock";
import Alarmclock from "./Alarmclock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

export default function Navbar() {
  return (
    <>
      {
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="container" id="navbarNav">
              <ul className="navbar-nav flex-row justify-content-around">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Worldclock"
                  >
                    Clock
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Alarmclock">
                    Alarm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Stopwatch">
                    Stopwatch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Timer">
                    Timer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }
    </>
  );
}
