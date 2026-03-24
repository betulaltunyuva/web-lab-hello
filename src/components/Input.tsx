import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`flex-1 min-w-[12rem] rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 ${className}`}
      {...props}
    />
  );
}
