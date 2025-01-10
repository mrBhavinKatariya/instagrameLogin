import React, { useState, useEffect } from "react";
import "./coundown.css"

const CountdownTimer = ({ targetTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  function calculateTimeLeft(target) {
    const now = new Date().getTime();
    const distance = target - now;

    if (distance <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((distance / (1000 * 60)) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((distance / 1000) % 60)
      .toString()
      .padStart(2, "0");

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="countdown-container">
      <div className="time-box">
        <span className="time">{timeLeft.days}</span>
        <span className="label">Days</span>
      </div>
      <span className="colon">:</span>
      <div className="time-box">
        <span className="time">{timeLeft.hours}</span>
        <span className="label">Hours</span>
      </div>
      <span className="colon">:</span>
      <div className="time-box">
        <span className="time">{timeLeft.minutes}</span>
        <span className="label">Minutes</span>
      </div>
      <span className="colon">:</span>
      <div className="time-box">
        <span className="time">{timeLeft.seconds}</span>
        <span className="label">Seconds</span>
      </div>
    </div>
  );
};

const Coundown = () => {
  // Check if target time is already saved in localStorage
  let savedTargetTime = localStorage.getItem("targetTime");

  // If it's not saved, set it to 1 day from now and store it
  if (!savedTargetTime) {
    savedTargetTime = new Date().getTime() + 1 * 24 * 60 * 60 * 1000; // 1 day from now
    localStorage.setItem("targetTime", savedTargetTime);
  }

  return (
    <div className="app pt-10 pb-8 ">
      <h3>🚀 Free Instagram Blue Tick: Only This Hours Left to Claim!:</h3>
      <CountdownTimer targetTime={parseInt(savedTargetTime)} />
    </div>
  );
};

export default Coundown;
