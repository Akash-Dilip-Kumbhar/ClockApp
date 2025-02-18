import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [userActive, setuserActive] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  
  const intervalRef = useRef(null);

  const handleInput = (e) => {
    setTime(parseInt(e.target.value * 60));
    setuserActive(true);
  };

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(Math.floor(time % 60)).padStart(2, "0");
    return `${min}:${sec}`;
  };

  const handleStart = () => {
    setActive(true);
    setIsPause(false);
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0 && userActive) {
      playAlarm();
      clearInterval(intervalRef.current);
      setActive(false);
      alert("time is up");
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);

  const handlePause = () => {
    setIsPause(!isPause);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setActive(false);
    setIsPause(false);
    setTime(0);
  };

  const playAlarm = () => {
    console.log("play");
    const audio = new Audio('https://vclock.com/sound/musicbox.mp3');
    audio.play();
    setAlarmSet(false);
  };

  return (
    <div className="countdown-timer">
      <h1>Timer</h1>
      <div className="timer-display">
        <input type="number" placeholder="Enter time in Min" onChange={handleInput} />

        <div className="mainClockBx">
          <div className="mainClockRing">
            <div className="mainClock">
              <div className="time">{formatTime()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="timer-controls">
        <button onClick={handleStart} disabled={isActive && !isPause}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          {isPause ? "Resume" : "Pause"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
