import React, { useState, useEffect } from "react";
import "daisyui/dist/full.css";
import "flowbite/dist/flowbite.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ColorGame = ({
  col,
  row,
  level,
  setCol,
  setRow,
  setLevel,
  reset,
  setReset,
  answer,
  setAnswer,
}) => {
  const [boxes, setBoxes] = useState([]);
  const [answerBox, setAnswerBox] = useState(null);

  useEffect(() => {
    addBox(row, col, level);
  }, [row, col, level]);

  useEffect(() => {
    if (reset) {
      setCol(2);
      setRow(2);
      setLevel(2);
      setReset(false);
      setAnswer(false);
    }
  }, [reset, setReset]);

  useEffect(() => {
    if (answer && answerBox !== null) {
      setBoxes((prevBoxes) =>
        prevBoxes.map((box, index) => {
          if (index === answerBox) {
            return { ...box, boxClass: "box bg-black rounded-lg" };
          }
          return box;
        })
      );
    }
  }, [answer, answerBox]);

  const random = () => {
    const colors = [
      "bg-slate-300",
      "bg-slate-400",
      "bg-slate-500",
      "bg-slate-600",
      "bg-slate-700",
      "bg-gray-300",
      "bg-gray-400",
      "bg-gray-500",
      "bg-gray-600",
      "bg-gray-700",
      "bg-stone-300",
      "bg-stone-400",
      "bg-stone-500",
      "bg-stone-600",
      "bg-stone-700",
      "bg-red-300",
      "bg-red-400",
      "bg-red-500",
      "bg-red-600",
      "bg-red-700",
      "bg-orange-300",
      "bg-orange-400",
      "bg-orange-500",
      "bg-orange-600",
      "bg-orange-700",
      "bg-rose-300",
      "bg-rose-400",
      "bg-rose-500",
      "bg-rose-600",
      "bg-rose-700",
      "bg-amber-300",
      "bg-amber-400",
      "bg-amber-500",
      "bg-amber-600",
      "bg-amber-700",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-500",
      "bg-yellow-600",
      "bg-yellow-700",
      "bg-lime-300",
      "bg-lime-400",
      "bg-lime-500",
      "bg-lime-600",
      "bg-lime-700",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
      "bg-green-700",
      "bg-emerald-300",
      "bg-emerald-400",
      "bg-emerald-500",
      "bg-emerald-600",
      "bg-emerald-700",
      "bg-teal-300",
      "bg-teal-400",
      "bg-teal-500",
      "bg-teal-600",
      "bg-teal-700",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-cyan-300",
      "bg-cyan-400",
      "bg-cyan-500",
      "bg-cyan-600",
      "bg-cyan-700",
      "bg-sky-300",
      "bg-sky-400",
      "bg-sky-500",
      "bg-sky-600",
      "bg-sky-700",
      "bg-indigo-300",
      "bg-indigo-400",
      "bg-indigo-500",
      "bg-indigo-600",
      "bg-indigo-700",
      "bg-violet-300",
      "bg-violet-400",
      "bg-violet-500",
      "bg-violet-600",
      "bg-violet-700",
      "bg-purple-300",
      "bg-purple-400",
      "bg-purple-500",
      "bg-purple-600",
      "bg-purple-700",
      "bg-fuchsia-300",
      "bg-fuchsia-400",
      "bg-fuchsia-500",
      "bg-fuchsia-600",
      "bg-fuchsia-700",
      "bg-pink-300",
      "bg-pink-400",
      "bg-pink-500",
      "bg-pink-600",
      "bg-pink-700",
    ];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  const opacityClass = (level) => {
    const baseOpacity = 30;
    const increaseOpacityBy = 10;
    const opacityValue = Math.min(baseOpacity + level * increaseOpacityBy, 90);
    return `opacity-${opacityValue}`;
  };

  const addBox = (row, col, level) => {
    const randomColor = random();
    const iterations = row * col;
    const selectedBoxIndex = Math.floor(Math.random() * iterations);
    const opacityClassValue = opacityClass(level);

    const newBoxes = [];
    for (let i = 0; i < iterations; i++) {
      let boxClass = `box ${randomColor} rounded-lg`;
      if (i === selectedBoxIndex) {
        boxClass += ` ${opacityClassValue}`;
        console.log(`game level is ${level}`);
        console.log(`Ans: Box ${i + 1} with ${opacityClassValue}`);
      }
      newBoxes.push({ id: i + 1, boxClass });
    }
    setBoxes(newBoxes);
    setAnswerBox(selectedBoxIndex);
  };

  const handleBoxClick = (boxId) => {
    setAnswer(false);
    const clickedBox = boxes.find((box) => box.id === boxId);
    const CurrentOpacity = opacityClass(level);
    if (
      clickedBox.boxClass.includes(CurrentOpacity) ||
      clickedBox.boxClass.includes("bg-black")
    ) {
      setCol((preCol) => preCol + 1);
      setRow((preRow) => preRow + 1);
      setLevel((preLevel) => preLevel + 1);
    } else {
      const popup = withReactContent(Swal);
      popup.fire({
        icon: "error",
        title: "GAME OVER!",
        html: `
      Your Level: ${level}! <br>
      <div class="text-blue-500 mt-3">Press Space to Play Again</div> <br>`,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        footer: '<a href="#">Better luck next time 🤗</a>',
      });

      setCol(2);
      setRow(2);
      setLevel(2);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div
        className={`grid gap-0.5 w-[600px] h-[600px] bg-white rounded-lg cursor-pointer`}
        style={{
          gridTemplateColumns: `repeat(${col}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`,
        }}
      >
        {boxes.map((box) => (
          <div
            key={box.id}
            className={box.boxClass}
            id={`box${box.id}`}
            onClick={() => handleBoxClick(box.id)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorGame;
