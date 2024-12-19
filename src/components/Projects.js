import React from "react";

function Projects() {
  const projects = [
    "Projeto de Educação Infantil",
    "Reflorestamento Comunitário",
    "Capacitação Profissional para Jovens"
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
