import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>Sobre mí</h2>
      <div className="about-content">
        <p>
          Soy <strong>Desarrolladora Web Full Stack</strong> formada en Soy Henry, con más de 800 horas de código, 
          trabajo colaborativo y desarrollo de proyectos reales. Me especializo en crear soluciones web completas 
          aplicando tecnologías modernas como <strong>JavaScript, TypeScript, React, Node.js, Express</strong> y 
          <strong> PostgreSQL</strong>.
        </p>
        <p>
          Tengo un fuerte enfoque en la <strong>organización, el diseño funcional y la experiencia del usuario</strong>, 
          buscando siempre optimizar la lógica y la estética de cada proyecto. Disfruto los desafíos que implican 
          combinar creatividad con buenas prácticas de desarrollo y una arquitectura limpia.
        </p>
        <p>
          Me considero una persona <strong>curiosa, responsable y orientada a resultados</strong>, 
          con ganas de seguir creciendo profesionalmente en entornos de desarrollo web y tecnología.
        </p>
        <a href="#contact" className="btn about-btn">Contáctame</a>
      </div>
    </section>
  );
}

export default About;
