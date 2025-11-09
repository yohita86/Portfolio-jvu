import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email // Permite responder directamente al usuario
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("Mensaje enviado correctamente!", response.status, response.text);
        setStatus("Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((err) => {
        console.error("Error al enviar el mensaje:", err);
        setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">Enviar</button>
        {status && <p className="status-msg">{status}</p>}
      </form>

      <div className="social-icons">
        <a href="https://github.com/yohita86" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/johana-ullua/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:yohanitaullua@gmail.com"><FaEnvelope /></a>
        <a href="https://wa.me/5491169112950" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>

      <div className="cv-links">
        <a href="/cv-es.pdf" target="_blank" rel="noopener noreferrer">CV Español</a>
        <a href="/cv-en.pdf" target="_blank" rel="noopener noreferrer">CV Inglés</a>
        <a href="/cv-pt.pdf" target="_blank" rel="noopener noreferrer">CV Portugués</a>
      </div>
    </section>
  );
};

export default Contact;
