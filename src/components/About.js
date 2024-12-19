import React from "react";
import aboutImage from "../assets/about-image.jpg";
import "../style/index.scss";

function About() {
  const scrollToContent = () => {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      className="about-section"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 275px",
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
      }}
    >
      <div className="about-content">
        <h2>Sobre Nós</h2>
        <p>
          Nossa missão é promover mudanças significativas na vida das pessoas
          através de projetos sociais, educativos e ambientais. Acreditamos no
          poder da comunidade unida para transformar o mundo.
        </p>
        <button className="scroll-button" onClick={scrollToContent}>
          &#9660;
        </button>
      </div>
      <div id="content">
        {/* Conteúdo adicional aqui */}
      </div>
    </section>
  );
}

export default About;
