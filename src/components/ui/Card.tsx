import type { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
      <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
      <div className="mt-2">{children}</div>
    </div>
  );
}
