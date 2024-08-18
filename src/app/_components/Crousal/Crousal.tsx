"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const items = [
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
  "Harum cupiditate sint beatae! Aliquam soluta accusamus qui",
  "Pariatur inventore dolorem, minus quo error reprehenderit",
];

export default function Carousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="h-[75%] mt-24">
        <div className="text-left">
          {items.map((text, index) => (
            <p
              key={text}
              className={`w-[35%] text-5xl absolute transition-opacity duration-500 ${
                index === position ? "opacity-100" : "opacity-0"
              }`}
            >
              {text}
            </p>
          ))}
        </div>
        <div className="mt-48">
          {items.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer mx-1 inline-block w-2 h-2 rounded-full transition-colors duration-300 ${
                index === position ? "bg-orange-500" : "bg-gray-400"
              }`}
              onClick={() => setPosition(index)}
            ></span>
          ))}
        </div>
      </div>

      <button className="black_button">
        <Link href="/login"> Explore More →</Link>
      </button>
    </div>
  );
}
