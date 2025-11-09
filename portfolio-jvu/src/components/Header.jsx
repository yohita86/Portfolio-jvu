import logo from "../assets/logo-jvu.png"; // <-- ajustá el path si es distinto

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="JVU Logo" className="logo-img" />
      </div>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
