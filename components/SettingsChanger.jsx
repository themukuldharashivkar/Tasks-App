"use client"; // Next.js 15 enables client-side interactivity
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function SettingsChanger({ setting, onBack }) {
  const [time, setTime] = useState(setting.value); // Default to 25 minutes

  const decreaseTime = () => {
    if (time > 1) setTime((prev) => prev - 1);
  };

  const increaseTime = () => {
    setTime((prev) => prev + 1);
  };

  const saveSetting = () => {
    console.log(`Saving ${setting}: ${time} minutes`);
    onBack(); // Return to the settings menu
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-black text-white rounded-3xl shadow-lg h-full w-full">
      <button
        onClick={onBack}
        className="absolute top-5 left-5 text-white hover:text-red-500 border border-neutral-700 rounded-full p-3 flex-shrink-0 hover:border-[#ff2d2d] transition-all duration-200"
      >
        <ChevronLeft />
      </button>
      <h1 className="text-xl font-bold mb-5">{setting.label}</h1>
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
        <span className="text-lg mt-3">{setting.unit}</span>

        {/* Increase Button */}
        <button
          onClick={increaseTime}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:bg-gray-700"
        >
          <span className="text-2xl">+</span>
        </button>
      </div>

      <button
        onClick={saveSetting}
        className="mt-6 bg-neutral-800 py-2 px-6 rounded-full font-medium border border-neutral-600 hover:bg-[#ff2d2d] transition-all duration-200"
      >
        Save
      </button>
    </div>
  );
}
