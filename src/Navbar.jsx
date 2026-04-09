export default function Navbar({ logo }) {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#inicio" className="logo-container">
        <img src={logo} alt="WS Pilates Logo" />
      </a>
      </div>
      
      <div className="nav-links">
        <a href="#inicio">Início</a>
        <a href="#sobre">O Studio</a>
        <a href="#contato">Localização</a>
      </div>
    </nav>
  );
}