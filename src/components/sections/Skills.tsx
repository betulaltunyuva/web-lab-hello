const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
  "Git",
];

export default function Skills() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900/40">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
          Yetenekler
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
