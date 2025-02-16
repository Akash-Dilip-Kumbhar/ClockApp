import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Clock from "./assets/components/Clock";

function App() {
  return (
    <>
      <div className="outerscreen">
        <div className="clockUI">
          <Clock />
        </div>
      </div>
    </>
  )
}

export default App;
