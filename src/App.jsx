import React, { useState } from "react";
import ColorGame from "./ColorGame.jsx";
import CountDown from "./CountDown.jsx";
import "flowbite";
function App() {
  const [col, setCol] = useState(2);
  const [row, setRow] = useState(2);
  const [level, setLevel] = useState(2);
  const [reset, setReset] = useState(false);
  const [answer, setAnswer] = useState(false);

  const triggerReset = () => {
    setReset(true);
  };
  const displayAnswer = () => {
    setAnswer(true);
  };

  return (
    <div className="bg-gradient-to-br from-red-300 via-purple-400 to-fuchsia-300 min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-black text-4xl font-bold mt-10">
        Hello Vite <img src="vite.png" className="inline size-10" /> + React{" "}
        <img src="react.png" className="inline size-10" /> !
      </h1>
      <div className="w-full h-full flex items-center justify-around">
        <ColorGame
          col={col}
          row={row}
          level={level}
          setCol={setCol}
          setRow={setRow}
          setLevel={setLevel}
          reset={reset}
          setReset={setReset}
          answer={answer}
          setAnswer={setAnswer}
        />
        <CountDown
          level={level}
          triggerReset={triggerReset}
          answer={answer}
          displayAnswer={displayAnswer}
        />
      </div>
    </div>
  );
}

export default App;
