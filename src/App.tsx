function App() {
  return (
    <>
      <header>
        <h1>Semantic Portfolio</h1>

        <nav>
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <p>
            Merhaba, ben Betül. Web Tasarımı ve Programlama dersi kapsamında
            hazırlanan bu sayfa semantik HTML yapısını öğrenmek için
            oluşturulmuştur.
          </p>
        </section>

        <section id="projeler">
          <h2>Projeler</h2>

          <article>
            <h3>Proje 1</h3>
            <p>İlk web tasarım çalışmam.</p>
          </article>

          <article>
            <h3>Proje 2</h3>
            <p>React ile geliştirdiğim örnek proje.</p>
          </article>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Email: betul@example.com</p>
        </section>
      </main>

      <footer>
        <p>© 2026 Betül Altunyuva</p>
      </footer>
    </>
  )
}

export default App