import React, { useState } from "react";

const List = () => {
  const [list, setlist] = useState(["Eat", "Sleep", "Code", "Repeat"]);
  const [task, setTask] = useState("");

  function inputTask(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task.trim() !== "") {
      setlist((l) => [...l, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    setlist((l) => l.filter((_, i) => i !== index));
  }

  function upTask(index) {
    if (index > 0) {
      const newlist = [...list];
      const temp = newlist[index - 1];
      newlist[index - 1] = newlist[index];
      newlist[index] = temp;
      setlist(newlist);
    }
  }

  function downTask(index) {
    if (index < list.length - 1) {
      const newlist = [...list];
      const temp = newlist[index + 1];
      newlist[index + 1] = newlist[index];
      newlist[index] = temp;
      setlist(newlist);
    }
  }

  return (
    <div>
      <div className="text-center text-3xl underline text-zinc-600 mt-2">
        Meow Table
      </div>
      <input
        className="input input-info bg-slate-300 max-w-xs text-blue-700 mt-2"
        type="text"
        placeholder="Add Task to Meow"
        value={task}
        onChange={inputTask}
      />
      <button className="btn btn-info mt-2" onClick={addTask}>
        Add
      </button>
      <ol className="mt-2 text-black flex flex-col gap-2 w-64 ml-2">
        {list.map((task, index) => (
          <li
            key={index}
            className=" text-xl flex justify-between bg-gray-300 p-2 rounded-lg"
          >
            <span className="text-xl">{task}</span>
            <div className="flex gap-3">
              <button
                className="btn btn-success btn-sm text-xl"
                onClick={() => upTask(index)}
              >
                ⬆
              </button>
              <button
                className="btn btn-warning btn-sm text-xl"
                onClick={() => downTask(index)}
              >
                ⬇
              </button>
              <button
                className="btn btn-error btn-sm text-xl"
                onClick={() => deleteTask(index)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
