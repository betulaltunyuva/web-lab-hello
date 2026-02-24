import "./App.css";

function App() {
  return (
    <>
      {/* Skip Link */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Semantic Portfolio</h1>

        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>

          <figure>
            <img
              src="https://via.placeholder.com/150"
              alt="Betül Altunyuva profil fotoğrafı"
            />
            <figcaption>Betül Altunyuva</figcaption>
          </figure>

          <p>
            Merhaba, ben Betül. Web Tasarımı ve Programlama dersi kapsamında
            hazırlanan bu sayfa semantik HTML yapısını öğrenmek için oluşturulmuştur.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
          </ul>
        </section>

        {/* Projeler */}
        <section id="projeler">
          <h2>Projeler</h2>

          <article>
            <h3>Proje 1</h3>
            <p>İlk web tasarım çalışmam.</p>
            <button type="button">Detay Gör</button>
          </article>

          <article>
            <h3>Proje 2</h3>
            <p>React ile geliştirdiğim örnek proje.</p>
          </article>
        </section>

        {/* İletişim */}
        <section id="iletisim">
          <h2>İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2026 Betül Altunyuva</p>
      </footer>
    </>
  );
}

export default App;