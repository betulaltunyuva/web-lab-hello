import ContactForm from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Iletisim
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Benimle iletisime gecmek icin formu doldurabilirsiniz.
      </p>
      <ContactForm />
    </section>
  );
}
