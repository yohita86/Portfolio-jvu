import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="hero">
      <div className="intro">
        <h1>
          ¡Hola! Soy <span className="highlight">Johana Vanina Ullua</span>
        </h1>
        <h2>Desarrolladora Web Full Stack 💻</h2>

        {/* Texto principal con efecto brillante */}
        <div className="impact-line">
          <span className="impact-text">De la idea al impacto 🚀</span>
        </div>

        <p className="description">
          Apasionada por el diseño, la lógica y la creación de experiencias
          digitales únicas.
        </p>

        {/* Tecnologías principales */}
        <div className="main-techs">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Nest.js</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
        </div>

        <a href="#projects" className="btn-primary">
          Ver proyectos
        </a>

        {/* Íconos sociales */}
        <div className="social-icons">
          <a
            href="https://github.com/yohita86"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/johana-ullua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:yohanitaullua@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/5491169112950"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Enlaces CV */}
        <div className="cv-links">
          <a
            href={`${import.meta.env.BASE_URL}cv-es.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV Español
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv-en.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV Inglés
          </a>
          <a
            href={`${import.meta.env.BASE_URL}cv-pt.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV Portugués
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
