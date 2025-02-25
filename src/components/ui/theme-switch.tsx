"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="bg-opacity-80 border-opacity-40 fixed right-5 bottom-5 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-white shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
