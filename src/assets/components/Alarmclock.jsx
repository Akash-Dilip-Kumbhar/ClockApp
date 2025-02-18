import { useEffect, useState } from "react";
// import { Howl } from "howler"; 
// import song from '../songs/'

function Alarmclock() {
  const [time, setTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState();
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    console.log(alarmTime);
    console.log(time.toLocaleTimeString());
    if (alarmSet&&time.toLocaleTimeString() == alarmTime) {
      console.log(time);
      playAlarm();
    }
  }, [time, alarmTime, alarmSet]);

  const setAlarm = (e) => {
    e.preventDefault();
    const alarm = `${e.target.hours.value}:${e.target.minutes.value}:00 ${e.target.period.value}`;
    setAlarmTime(alarm);
    setAlarmSet(true);  
  };

  const playAlarm = () => {
    console.log("play");
    const audio = new Audio('https://vclock.com/sound/musicbox.mp3');
    audio.play();
    setAlarmSet(false);
  };

  return (
    <div className="alarm-clock">
      <form onSubmit={setAlarm}>
        <input
          type="number"
          name="hours"
          placeholder="HH"
          min="1"
          mix="12"
          required
        />
        <input
          type="number"
          name="minutes"
          placeholder="MM"
          min="0"
          mix="59"
          required
        />
        <select name="period">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <button type="submit">Set Alarm</button>
      </form>
      {/* {console.warn(alarmSet)} */}
      {alarmSet ? <h2>Alarm set for: {alarmTime}</h2> : <h2>...</h2>}
    </div>
  );
}

export default Alarmclock;