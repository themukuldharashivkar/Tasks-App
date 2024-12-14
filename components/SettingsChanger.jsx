"use client"; // Next.js 15 enables client-side interactivity
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function SettingsChanger() {
  const [time, setTime] = useState(15); // Default to 25 minutes

  const decreaseTime = () => {
    if (time > 1) setTime((prev) => prev - 1);
  };

  const increaseTime = () => {
    setTime((prev) => prev + 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-black text-white p-6 rounded-3xl shadow-lg max-w-sm h-[24rem]">
      <button className="absolute top-5 left-5 text-white hover:text-red-500 border border-neutral-700 rounded-full p-3 flex-shrink-0 hover:border-[#ff2d2d] transition-all duration-200">
        <ChevronLeft />
      </button>
      <h1 className="text-xl font-bold mb-5">Focus Session</h1>
      <div className="flex items-center justify-center gap-4">
        {/* Decrease Button */}
        <button
          onClick={decreaseTime}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700"
        >
          <span className="text-2xl">−</span>
        </button>

        {/* Timer Display */}
        <span className="text-5xl font-bold">{time}</span>
        <span className="text-lg mt-3">min</span>

        {/* Increase Button */}
        <button
          onClick={increaseTime}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700"
        >
          <span className="text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}
