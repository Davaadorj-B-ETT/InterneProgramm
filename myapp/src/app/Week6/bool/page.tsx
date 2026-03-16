"use client";
import { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Унтраах" : "Асаах"}
      </button>
      <p>Төлөв: {isOn ? <AiOutlineLike /> : <AiFillLike />}</p>
      <p>Төлөв: {isOn ? "Асаалттай" : "Унтраалттай"}</p>
    </div>
  );
}