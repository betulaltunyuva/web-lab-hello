import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Bilinmeyen hata"
        );
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = applyFilters(
    projects,
    search,
    category,
    sortField,
    sortOrder
  );

  const categories: (Category | "all")[] = [
    "all",
    "frontend",
    "fullstack",
    "backend",
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Ana içeriğe atla
      </a>

      <header className="bg-gray-900 p-6 text-white">
        <h1 className="text-3xl font-bold">Semantic Portfolio</h1>

        <nav aria-label="Ana navigasyon" className="mt-4">
          <ul className="flex flex-col gap-4 md:flex-row md:gap-6">
            <li>
              <a href="#hakkimda" className="text-blue-300 hover:text-white">
                Hakkımda
              </a>
            </li>
            <li>
              <a href="#projeler" className="text-blue-300 hover:text-white">
                Projeler
              </a>
            </li>
            <li>
              <a href="#iletisim" className="text-blue-300 hover:text-white">
                İletişim
              </a>
            </li>
            <li>
              <a href="/uikit" className="text-blue-300 hover:text-white">
                UI Kit
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main
        id="main-content"
        className="min-h-screen bg-gray-50 p-4 md:p-8 dark:bg-gray-950"
      >
        <div className="mx-auto max-w-5xl">
          <section id="hakkimda" className="mb-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              Hakkımda
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Merhaba, ben Betül. Bu sayfa semantik HTML yapısını öğrenmek için
              hazırlanmıştır; aşağıda LAB-5 kapsamında JSON ve TypeScript ile
              yüklenen proje listesi yer alır.
            </p>
          </section>

          <section id="projeler" className="mb-10">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
                Projelerim
              </h2>

              {error && (
                <div className="mb-6">
                  <Alert variant="error" title="Hata">
                    {error}
                  </Alert>
                </div>
              )}

              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Input
                  id="search"
                  placeholder="Proje ara ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Projelerde ara"
                />

                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? "primary" : "ghost"}
                      size="sm"
                      onClick={() => setCategory(cat)}
                    >
                      {cat === "all" ? "Tümü" : cat}
                    </Button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 sm:ml-auto">
                  <select
                    value={sortField}
                    onChange={(e) =>
                      setSortField(e.target.value as SortField)
                    }
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    aria-label="Sıralama alanı"
                  >
                    <option value="year">Yıl</option>
                    <option value="title">Başlık</option>
                  </select>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setSortOrder((o) => (o === "asc" ? "desc" : "asc"))
                    }
                    aria-label={
                      sortOrder === "asc"
                        ? "Azalan sıraya geç"
                        : "Artan sıraya geç"
                    }
                  >
                    {sortOrder === "asc" ? "A-Z" : "Z-A"}
                  </Button>
                </div>
              </div>

              {loading && (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Yükleniyor...
                </p>
              )}

              {!loading && filtered.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Eşleşen proje bulunamadı.
                </p>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project) => (
                  <Card
                    key={project.id}
                    variant="elevated"
                    title={project.title}
                    image={project.image}
                    imageAlt={`${project.title} ekran görüntüsü`}
                  >
                    <p className="mb-3 text-sm text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                    <div className="mb-2 flex flex-wrap gap-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-gray-400">
                      {project.year} · {project.category}
                    </p>
                  </Card>
                ))}
              </div>

              {!loading && projects.length > 0 && (
                <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  {filtered.length} / {projects.length} proje gösteriliyor
                </p>
              )}
            </div>
          </section>

          <section id="iletisim">
            <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              İletişim
            </h2>

            <form className="max-w-lg space-y-4">
              <input
                className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                placeholder="Ad Soyad"
              />
              <input
                className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                placeholder="E-posta"
                type="email"
              />
              <textarea
                className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                placeholder="Mesaj"
                rows={4}
              />
              <button
                type="button"
                className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
              >
                Gönder
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 p-4 text-center text-white">
        © 2026 Betül Altunyuva
      </footer>
    </>
  );
}
