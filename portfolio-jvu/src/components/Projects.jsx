import React, { useState } from "react";
import "./Projects.css";

// Importa tus imágenes o videos
import turneroThumbnail from "../assets/portadavu.png"; // imagen de portada
import turneroVideo from "../assets/videovu.mp4"; // video de tu proyecto
//import ecommerceThumbnail from "../assets/ecommerce.png";
import portfolioThumbnail from "../assets/paraportfolio.png";
import hrThumbnail from "../assets/hr1.png";

function Projects() {
  // Opcional: control para reproducir video al hacer click
  const [playingVideo, setPlayingVideo] = useState(null);

  const projects = [
    {
      name: "Gestión de Turnos",
      mediaType: "video",
      thumbnail: turneroThumbnail, // miniatura
      mediaSrc: turneroVideo,
      codeLink: "https://github.com/yohita86/gestión-turnos",
      demoLink: "#"
    },
    {
      name: "E-commerce Backend",
      mediaType: "image",
      //mediaSrc: ecommerceThumbnail,
      codeLink: "https://github.com/yohita86/e-commerce.git",
      demoLink: "#"
    },
    {
      name: "Portfolio Personal",
      mediaType: "image",
      mediaSrc: portfolioThumbnail,
      codeLink: "https://github.com/yohita86/portfolio-jvu",
      demoLink: "#"
    },
    {
      name: "HR System",
      mediaType: "image",
      mediaSrc: hrThumbnail,
      codeLink: "https://github.com/HRSYSTEM-PROJECT/Back.git",
      demoLink: "https://front-git-main-hr-systems-projects.vercel.app/"
    }
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-media">
              {p.mediaType === "image" ? (
                <img src={p.mediaSrc} alt={p.name} />
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
            <div className="project-buttons">
              <a href={p.codeLink} target="_blank" rel="noopener noreferrer">Ver código</a>
              <a href={p.demoLink} target="_blank" rel="noopener noreferrer">Ver demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
