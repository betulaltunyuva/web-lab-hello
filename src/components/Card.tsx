import { useState, type ReactNode } from "react";

interface CardProps {
  variant?: "elevated" | "flat";
  title: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export default function Card({
  variant = "flat",
  title,
  image,
  imageAlt,
  children,
}: CardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const elevation =
    variant === "elevated"
      ? "shadow-lg ring-1 ring-gray-200 dark:ring-gray-700"
      : "border border-gray-200 dark:border-gray-700";

  return (
    <article
      className={`h-full overflow-hidden rounded-lg bg-white dark:bg-gray-900 ${elevation}`}
    >
      {image && !imgFailed ? (
        <img
          src={image}
          alt={imageAlt ?? title}
          className="h-40 w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : image ? (
        <div
          className="flex h-40 w-full items-center justify-center bg-gray-200 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400"
          role="img"
          aria-label={imageAlt ?? title}
        >
          Görsel yok
        </div>
      ) : null}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {children}
      </div>
    </article>
  );
}
