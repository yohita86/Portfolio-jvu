import { useState } from "react";
import logo from "../assets/logo-jvu.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        {/* Logo como botón de inicio */}
        <a href="#hero" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="JVU Logo" className="logo-img" />
        </a>
      </div>

      <nav className={isOpen ? "nav nav-open" : "nav"}>
        <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#about" onClick={() => setIsOpen(false)}>Sobre mí</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Habilidades</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Header;
