import React from "react";
import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project1.jpeg";
import projectImage3 from "../assets/project1.jpeg";


function Projects() {
  return (
    <section id="projects" style={{ padding: "50px 20px", textAlign: "center" }}>
      <h2>Projetos</h2>
      <p>Confira alguns dos nossos projetos e como estamos impactando a comunidade.</p>
      
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        <div className="project-card">
          <img 
            src={projectImage1} 
            alt="Projeto 1" 
            className="project-image"
          />
          <h3>Projeto 1</h3>
          <p>Descrição breve do Projeto 1, mostrando como ele impacta a comunidade de forma positiva.</p>
          <button className="project-button">Saiba Mais</button>
        </div>
        
        <div className="project-card">
          <img 
            src={projectImage2} 
            alt="Projeto 2" 
            className="project-image"
          />
          <h3>Projeto 2</h3>
          <p>Descrição breve do Projeto 2, destacando seus resultados e objetivos.</p>
          <button className="project-button">Saiba Mais</button>
        </div>
        
        <div className="project-card">
          <img 
            src={projectImage3} 
            alt="Projeto 3" 
            className="project-image"
          />
          <h3>Projeto 3</h3>
          <p>Descrição do Projeto 3, ressaltando suas metas e impacto social.</p>
          <button className="project-button">Saiba Mais</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
