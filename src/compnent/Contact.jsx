import { useState } from "react";
import "./Contact.css";

const contactEmail = "padhyshubham123@gmail.com";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);

    setSubmitted(true);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <section className="contact-panel" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="contact-eyebrow">CONTACT</p>
          <h1 id="contact-title">
            Let’s make
            <span> something great.</span>
          </h1>
          <p className="contact-description">
            Have an idea, an opportunity, or just want to say hello? Send a
            message and let’s start a conversation.
          </p>
          <a className="contact-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-orbit-art" aria-hidden="true">
            <span className="contact-orbit contact-orbit-a" />
            <span className="contact-orbit contact-orbit-b" />
            <span className="contact-orbit-core">S</span>
            <span className="contact-orbit-star contact-orbit-star-a">✦</span>
            <span className="contact-orbit-star contact-orbit-star-b">✧</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message">How can I help?</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me a little about your project..."
            rows="5"
            required
          />

          <button className="contact-submit" type="submit">
            Send a message <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-form-note" role="status">
            {submitted
              ? "Your email app should open with your message ready to send."
              : "This opens your email app with your message ready to send."}
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
