import React, { useState } from "react";

const Button = () => {
  const [meow, setMeow] = useState(true);

  const toggleMeow = () => {
    setMeow(!meow);
  };

  return (
    <div className="flex items-center justify-center mt-3 gap-5">
      <div className="avatar">
        <div className="mask mask-hexagon-2 w-32 ">
          <img
            src={
              meow
                ? "/questionMark.gif"
                : "https://i.pinimg.com/736x/7f/af/e7/7fafe7c7cdae656f99506b1035dbbc3f.jpg"
            }
          />
        </div>
      </div>
      <div className="avatar">
        <div className="mask mask-squircle w-32 ">
          <img
            src={
              meow
                ? "/questionMark.gif"
                : "https://i.pinimg.com/474x/89/13/f4/8913f46d29bece3e4e4b10066ca12e6d.jpg"
            }
          />
        </div>
      </div>
      <button
        className="hover:btn-info btn btn-secondary text-3xl text-white"
        onClick={toggleMeow}
      >
        Meow !
      </button>
      <div className="avatar">
        <div className="mask mask-hexagon-2 w-32 ">
          <img
            src={
              meow
                ? "/public/questionMark.gif"
                : "https://i.pinimg.com/564x/b7/77/dd/b777ddb908f7ac2d59fd153e24393f99.jpg"
            }
          />
        </div>
      </div>
      <div className="avatar">
        <div className="mask mask-hexagon-2 w-32">
          <img
            src={
              meow
                ? "/public/questionMark.gif"
                : "https://i.pinimg.com/474x/de/bd/34/debd3441d44bc4e9c897c6ec1a35a2d2.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Button;
