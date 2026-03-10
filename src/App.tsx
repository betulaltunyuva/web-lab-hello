import "./App.css";

function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Ana içeriğe atla
      </a>

      <header className="bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold">Semantic Portfolio</h1>

        <nav aria-label="Ana navigasyon" className="mt-4">
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
            <li><a href="/uikit">UI Kit</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content" className="p-8 max-w-5xl mx-auto">

        {/* HAKKIMDA */}
        <section id="hakkimda" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Hakkımda</h2>

          <p>
            Merhaba, ben Betül. Bu sayfa semantik HTML yapısını öğrenmek için
            hazırlanmıştır.
          </p>
        </section>

        {/* PROJELER */}
        <section id="projeler" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projeler</h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <article className="border p-5 rounded shadow">
              <h3>Proje 1</h3>
              <p>İlk web tasarım çalışmam.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Detay Gör
              </button>
            </article>

            <article className="border p-5 rounded shadow bg-gray-100">
              <h3>Proje 2</h3>
              <p>React örnek proje.</p>
              <button className="border px-4 py-2 rounded">
                Detay Gör
              </button>
            </article>
          </div>
        </section>

        {/* İLETİŞİM */}
        <section id="iletisim">
          <h2 className="text-2xl font-semibold mb-6">İletişim</h2>

          <form className="space-y-4">
            <input className="border p-2 w-full" placeholder="Ad Soyad" />
            <input className="border p-2 w-full" placeholder="E-posta" />
            <textarea className="border p-2 w-full" placeholder="Mesaj" />
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Gönder
            </button>
          </form>
        </section>

      </main>

      <footer className="bg-gray-900 text-white text-center p-4">
        © 2026 Betül Altunyuva
      </footer>
    </>
  );
}

export default App;