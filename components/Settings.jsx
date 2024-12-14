"use client";

import { ChevronRight, Cross, X } from "lucide-react";

export default function Settings() {
  return (
    <div className="relative bg-dark text-white p-8 rounded-3xl shadow-lg max-w-sm">
      <div className="flex justify-center items-center pb-5">
        <h1 className="text-xl font-bold">Settings</h1>
      </div>
      <button className="absolute top-5 right-5 text-white hover:text-red-500 border border-neutral-700 rounded-full p-3 flex-shrink-0 hover:border-[#ff2d2d] transition-all duration-200">
        <X />
      </button>

      <div className="mt-4 flex items-center justify-center gap-4 mb-5">
        <div className="bg-neutral-700 w-fit p-1 rounded-full">
          <button className="bg-neutral-900 text-white py-1 px-4 rounded-full focus:ring-2 ring-neutral-500">
            Duration
          </button>
          <button className="text-neutral-400 py-1 px-4 rounded-full hover:text-white hover:bg-neutral-700">
            Notifications
          </button>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center py-2 border-b border-neutral-700">
          <p>Focus Session</p>
          <div className="flex items-center gap-2">
            <span>25</span>
            <span className="text-neutral-400">min</span>
            <button className="text-neutral-400 hover:text-white">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-neutral-700">
          <p>Short Break</p>
          <div className="flex items-center gap-2">
            <span>05</span>
            <span className="text-neutral-400">min</span>
            <button className="text-neutral-400 hover:text-white">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-neutral-700">
          <p>Long Break</p>
          <div className="flex items-center gap-2">
            <span>15</span>
            <span className="text-neutral-400">min</span>
            <button className="text-neutral-400 hover:text-white">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-2">
          <p>Long break after</p>
          <div className="flex items-center gap-2">
            <span>4</span>
            <span className="text-neutral-400">Sess.</span>
            <button className="text-neutral-400 hover:text-white">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
