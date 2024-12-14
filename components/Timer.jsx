"use client";
import { Eye, RotateCcw, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const totalTime = 25 * 60;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  // Timer logic
  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setRunning(false);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  // Calculate progress
  const progress = ((totalTime - time) / totalTime) * 100;

  return (
    <div className="bg-dark text-white rounded-3xl max-w-sm shadow-lg p-8">
      <div className="mt-6 relative flex items-center justify-center">
        <svg
          className="absolute w-72 h-72"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeDasharray="282.6" /* Circumference of the circle */
            strokeDashoffset={`${282.6 - (progress / 100) * 282.6}`}
            strokeLinecap="round"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
              transition: "stroke-dashoffset 0.3s ease",
            }}
          />

          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ff5a5f" />
              <stop offset="100%" stopColor="#ff2d2d" />
            </linearGradient>
          </defs>
        </svg>

        <div className="bg-dark w-64 h-64 rounded-full flex flex-col items-center justify-center space-y-3">
          <Eye />
          <h2 className="text-5xl font-bold">{formatTime(time)}</h2>
          <div className="flex space-x-3">
            <div className="w-1 h-4 bg-[#ff2d2d] rounded-full" />
            <div className="w-1 h-4 bg-[#ff2d2d] rounded-full" />
            <div className="w-1 h-4 bg-neutral-500 rounded-full" />
            <div className="w-1 h-4 bg-neutral-500 rounded-full" />
          </div>
          <h3 className="text-neutral-500">FOCUS</h3>
        </div>
      </div>

      <div className="pt-10 flex justify-around">
        <button
          onClick={() => {
            setTime(totalTime);
            setRunning(false);
          }}
          className="border border-neutral-700 rounded-full p-3 flex-shrink-0 hover:border-[#ff2d2d] transition-all duration-200"
        >
          <RotateCcw />
        </button>
        <button
          onClick={() => setRunning(!running)}
          className="bg-neutral-800 py-2 px-6 rounded-full font-medium border border-neutral-600"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button className="border border-neutral-700 rounded-full p-3 flex-shrink-0 hover:border-[#ff2d2d] transition-all duration-200">
          <Settings />
        </button>
      </div>
    </div>
  );
}
