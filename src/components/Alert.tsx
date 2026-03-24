import type { ReactNode } from "react";

type AlertVariant = "error" | "info" | "success";

interface AlertProps {
  variant: AlertVariant;
  title: string;
  children: ReactNode;
}

export default function Alert({ variant, title, children }: AlertProps) {
  const styles: Record<AlertVariant, string> = {
    error:
      "border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-100",
    info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100",
    success:
      "border-green-200 bg-green-50 text-green-900 dark:border-green-900 dark:bg-green-950 dark:text-green-100",
  };

  return (
    <div
      className={`rounded-lg border p-4 ${styles[variant]}`}
      role="alert"
    >
      <h2 className="font-semibold">{title}</h2>
      <div className="mt-1 text-sm">{children}</div>
    </div>
  );
}
