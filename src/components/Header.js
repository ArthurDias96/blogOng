import React from "react";
import logo from "../assets/logo.png"; // Certifique-se de que a logo está no caminho correto

function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", padding: "10px 20px", backgroundColor: "#945a9a" }}>
      {/* Logo */}
      <div style={{ flex: "1" }}>
        <img 
          src={logo} 
          alt="Logo da ONG" 
          style={{ height: "50px", objectFit: "contain" }} 
        />
      </div>

      {/* Menu de Navegação */}
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
          <li><a href="#about" style={{ textDecoration: "none", color: "white" }}>Sobre Nós</a></li>
          <li><a href="#projects" style={{ textDecoration: "none", color: "white" }}>Projetos</a></li>
          <li><a href="#how-to-help" style={{ textDecoration: "none", color: "white" }}>Como Ajudar</a></li>
          <li><a href="#contact" style={{ textDecoration: "none", color: "white" }}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
