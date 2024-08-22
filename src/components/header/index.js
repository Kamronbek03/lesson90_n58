"use client";

import { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-[#2B3844] px-20 dark:text-white">
      <h1 className="text-xl font-bold">Where in the World?</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`flex items-center p-2 rounded-md ${
          darkMode ? "bg-white" : "bg-transparent"
        } dark:bg-[#2B3844]`}
      >
        <MoonIcon className="w-6 h-6" />
        <span className="ml-2">Dark Mode</span>
      </button>
    </header>
  );
}
