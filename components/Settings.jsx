"use client";

import { ChevronRight, X } from "lucide-react";

export default function Settings({ onBack, onSettingSelect }) {
  const settings = [
    { label: "Focus Session", value: 25, unit: "min" },
    { label: "Short Break", value: 5, unit: "min" },
    { label: "Long Break", value: 15, unit: "min" },
    { label: "Long break after", value: 4, unit: "Sess." },
  ];

  return (
    <div className="relative w-full h-full bg-dark text-white p-8 rounded-3xl shadow-lg">
      <div className="flex justify-center items-center pb-5">
        <h1 className="text-xl font-bold">Settings</h1>
      </div>
      <button
        onClick={onBack}
        className="absolute top-5 right-5 text-white hover:text-red-500 border border-neutral-700 rounded-full p-3 flex-shrink-0 hover:border-[#ff2d2d] transition-all duration-200"
      >
        <X />
      </button>

      <div className="mt-4 flex items-center justify-center gap-4 mb-5">
        <div className="bg-neutral-800 w-fit p-1 rounded-full">
          <button className="bg-neutral-900 text-white py-1 px-4 rounded-full focus:ring-2 ring-neutral-500">
            Duration
          </button>
          <button className="text-neutral-400 py-1 px-4 rounded-full hover:text-white ">
            Notifications
          </button>
        </div>
      </div>

      <div className="mt-6">
        {settings.map(({ label, value, unit }) => (
          <div
            key={label}
            onClick={() => onSettingSelect({ label, value, unit })}
            className="flex justify-between items-center py-2 border-b border-neutral-900 hover:bg-neutral-900 transition-all duration-300 cursor-pointer hover:border-[#ff2d2d]"
          >
            <p>{label}</p>
            <div className="flex items-center gap-2">
              <span>{value}</span>
              <span className="text-neutral-400">{unit}</span>
              <button className="text-neutral-400 hover:text-white">
                <ChevronRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
