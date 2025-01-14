import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import StopWatch from "./StopWatch";
import StopWatchButton from "./StopWatchButton";

export default function App() {
  const [timer, setTimer] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // when toggle is true, start timer
    if (toggle) {
      intervalId = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);

      // when toggle is false, stop & reset timer
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [toggle]);

  return (
    <div className="app">
      <StopWatchButton
        setToggle={setToggle}
        setTimer={setTimer}
        setLaps={setLaps}
        timer={timer}
      />
      <StopWatch timer={timer} laps={laps} />
    </div>
  );
}
