import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaFigma, FaLanguage, FaProjectDiagram 
} from "react-icons/fa";
import { 
  SiTypescript, SiNestjs, SiPostgresql, SiMysql, SiMongodb, SiSwagger, SiSendgrid, SiJest 
} from "react-icons/si";
import { MdWeb, MdCloud, MdSecurity, MdSchedule } from "react-icons/md";
import "../index.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Habilidades Técnicas</h2>

      <div className="skills-grid">

        {/* FRONTEND */}
        <div className="skill-card">
          <h3><FaReact /> Frontend</h3>
          <ul>
            <li><FaHtml5 /> HTML / CSS</li>
            <li><FaJs /> JavaScript (ES6+)</li>
            <li><SiTypescript /> TypeScript</li>
            <li><FaReact /> React.js</li>
            <li><MdWeb /> Vite</li>
          </ul>
        </div>

        {/* BACKEND */}
        <div className="skill-card">
          <h3><FaNodeJs /> Backend</h3>
          <ul>
            <li><FaNodeJs /> Node.js</li>
            <li><MdWeb /> Express.js</li>
            <li><SiNestjs /> NestJS</li>
            <li><FaDatabase /> TypeORM</li>
            <li><FaProjectDiagram /> REST APIs</li>
            <li><MdSecurity /> Autenticación(Sesiones)</li>
            <li><MdSecurity /> Autenticación(JWT)</li>
            <li><MdWeb /> WebSockets / Socket.io</li>
            <li><MdSchedule /> Cron Jobs</li>
          </ul>
        </div>

        {/* BASES DE DATOS */}
        <div className="skill-card">
          <h3><FaDatabase /> Bases de Datos</h3>
          <ul>
            <li><SiPostgresql /> PostgreSQL</li>
            <li><SiMysql /> MySQL</li>
            <li><SiMongodb /> MongoDB</li>
          </ul>
        </div>

        {/* HERRAMIENTAS & CONTROL DE VERSIONES */}
        <div className="skill-card">
          <h3><MdCloud /> Herramientas & Version Control</h3>
          <ul>
            <li><MdCloud /> Render / Vercel</li>
            <li><MdCloud /> Cloudinary</li>
            <li><SiSwagger /> Swagger</li>
            <li><SiSendgrid /> SendGrid</li>
            <li><MdSecurity /> Stripe</li>
            <li><MdWeb /> Postman</li>
            <li><FaFigma /> Visual Studio Code</li>
            <li><FaFigma /> Figma</li>
            <li><SiJest /> Jest (tests)</li>
            <li><FaGitAlt /> Git</li>
            <li><FaGithub /> GitHub</li>
            <li><MdWeb /> Git Flow</li>
            <li><MdWeb /> Pull Requests</li>
          </ul>
        </div>

        {/* OTROS */}
        <div className="skill-card">
          <h3><FaLanguage /> Otros</h3>
          <ul>
            <li><MdWeb /> Metodologías ágiles (Scrum)</li>
            <li><MdWeb /> Diseño Responsivo</li>
            <li><FaLanguage /> Inglés — Básico (B1)</li>
            <li><FaLanguage /> Portugués — Intermedio</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
