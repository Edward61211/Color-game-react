import React, { useState, useEffect } from "react";
import "daisyui/dist/full.css";
import "flowbite/dist/flowbite.css";

const CountDown = ({ triggerReset, level, answer, displayAnswer }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the countdown end time (10 days + 10 hours + 11 minutes + 1 second from now)
    let countDownDate =
      new Date().getTime() +
      10 * 24 * 60 * 60 * 1000 +
      10 * 60 * 60 * 1000 +
      11 * 60 * 1000 +
      1000;

    // Update the countdown every second
    let countdownInterval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(countdownInterval);
        // Optionally, you can perform actions when countdown finishes
      }
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(countdownInterval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col h-full">{/* Your game UI */}</div>
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-center text-black">
            Color Game
          </h1>
          {/* Countdown */}
          <div className="flex items-center justify-center mt-5">
            <div className="grid grid-flow-col gap-0.5 text-center auto-cols-max">
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span id="days" style={{ "--value": days }}>
                    {days}
                  </span>
                </span>
                days
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span id="hours" style={{ "--value": hours }}>
                    {hours}
                  </span>
                </span>
                hours
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span id="minutes" style={{ "--value": minutes }}>
                    {minutes}
                  </span>
                </span>
                min
              </div>
              <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-4xl">
                  <span id="seconds" style={{ "--value": seconds }}>
                    {seconds}
                  </span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* Buttons and other UI elements */}
          <div className="flex flex-col mt-5">
            <button
              id="level-btn"
              className="btn btn-primary hover:btn-error text-2xl"
            >
              Game Level {level} x {level}
            </button>
            <button
              id="reset-btn"
              className="btn btn-warning hover:btn-error text-2xl mt-5"
              onClick={triggerReset}
            >
              Restart
            </button>
            <button
              onClick={displayAnswer}
              disabled={answer}
              id="answer-btn"
              className="btn btn-warning hover:btn-error text-2xl mt-5"
            >
              Answer
            </button>
            <button
              data-popover-target="popover-bottom"
              data-popover-placement="bottom"
              type="button"
              className="text-white mt-5 h-12 w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-2xl px-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Game Rule
            </button>
            <div
              data-popover
              id="popover-bottom"
              role="tooltip"
              className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
            >
              <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Anouncement
                </h3>
              </div>
              <div className="px-3 py-2">
                <p>
                  🚨 Welcome to the Color Game! Pick the box with a different
                  color from the rest. The level increases with more boxes.
                  However, choose the wrong box, the game resets. Have fun!
                </p>
              </div>
              <div data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
