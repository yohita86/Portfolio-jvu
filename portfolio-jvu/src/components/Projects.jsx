import React, { useState, useRef } from "react";
import "./Projects.css";

import turneroThumbnail from "../assets/portadavu.png";
import turneroVideo from "../assets/videovu.mp4";
import portfolioThumbnail from "../assets/paraportfolio.png";
import hrThumbnail from "../assets/HR1.png";
import ecommerceThumbnail from "../assets/Portada-ecommerce.png";
import Ecommercevideo from "../assets/video-ecommerce.mp4";

function Projects() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const scrollRef = useRef(null);

  const projects = [
    {
      name: "HR System",
      mediaType: "image",
      mediaSrc: hrThumbnail,
      description:
        "Proyecto final de gestión de recursos humanos con NestJS y TypeORM. Incluye autenticación, gestión de empleados, roles, y funcionalidades de backend robustas. Deploy en Vercel para front-end.",
      tech: "NestJS, TypeORM, PostgreSQL, Socket.IO, Stripe, Cloudinary, Swagger, RxJS, JWT",
      codeLink: "https://github.com/HRSYSTEM-PROJECT/Back.git",
      demoLink: "https://front-git-main-hr-systems-projects.vercel.app/",
    },
    {
      name: "Gestión de Turnos",
      mediaType: "image",
      mediaSrc: turneroThumbnail,
      description:
        "Aplicación full stack para gestión de turnos en estética, con frontend en React y backend en Express/TypeORM. Incluye autenticación por sesión, CRUD de turnos, validaciones de horarios y manejo de video para demostraciones.",
      tech: "React, Axios, Formik, Yup, SweetAlert2, Express, TypeORM, PostgreSQL, Nodemailer, framer-motion",
      codeLink: "https://github.com/yohita86/Verte-Unica-Estetica-Integral.git",
      demoLink: turneroVideo,
    },
    {
      name: "E-commerce Backend",
      mediaType: "image",
      mediaSrc: ecommerceThumbnail,
      description:
        "Backend de e-commerce desarrollado con NestJS, incluye autenticación, CRUD de productos, gestión de stock, órdenes de compra y migraciones de base de datos con TypeORM.",
      tech: "NestJS, TypeORM, PostgreSQL, Cloudinary, JWT, Swagger, Bcrypt",
      codeLink: "https://github.com/yohita86/e-commerce.git",
      demoLink: Ecommercevideo,
    },
    {
      name: "Portfolio Personal",
      mediaType: "image",
      mediaSrc: portfolioThumbnail,
      description:
        "Portfolio desarrollado en React para mostrar proyectos personales, habilidades y contacto. Implementa navegación con React Router, animaciones con framer-motion y envío de formularios con EmailJS.",
      tech: "React, framer-motion, EmailJS, React Icons, Vite",
      codeLink: "https://github.com/yohita86/portfolio-jvu",
      demoLink: "#",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; // ajusta según el ancho de la card
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects">
      <div className="projects-header">
        <h2>Construyendo tecnología que transforma</h2>
        <p>
          Cada proyecto que desarrollo nace de un desafío real: mejorar
          procesos, optimizar experiencias y generar impacto tangible. Desde
          aplicaciones full stack hasta sistemas complejos, mi enfoque es
          siempre práctico, eficiente y escalable.
        </p>
      </div>

      <div className="projects-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          &#10094;
        </button>
        <div className="projects-grid" ref={scrollRef}>
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-media">
                {p.mediaType === "image" ? (
                  p.mediaSrc ? (
                    <img src={p.mediaSrc} alt={p.name} />
                  ) : (
                    <div className="no-media">Sin imagen disponible</div>
                  )
                ) : (
                  <>
                    {playingVideo === i ? (
                      <video src={p.mediaSrc} autoPlay loop muted controls />
                    ) : (
                      <img
                        src={p.thumbnail}
                        alt={p.name}
                        onClick={() => setPlayingVideo(i)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </>
                )}
              </div>
              <h3>{p.name}</h3>
              <p className="project-description">{p.description}</p>
              <p className="project-tech">
                <strong>Tecnologías:</strong> {p.tech}
              </p>
              <div className="project-buttons">
                <a href={p.codeLink} target="_blank" rel="noopener noreferrer">
                  Ver código
                </a>
                <a href={p.demoLink} target="_blank" rel="noopener noreferrer">
                  Ver demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Projects;
