import React from "react";
import "../style/index.scss";  

function HowToHelp() {
  return (
    <section id="how-to-help" className="how-to-help">
      <h2>Como Ajudar</h2>
      <p>Você pode nos ajudar doando ou se voluntariando.</p>
      <div className="button-container">
        <button onClick={() => alert("Obrigado por querer doar!")}>Doar</button>
        <button onClick={() => alert("Obrigado por querer ser voluntário!")}>Se Voluntariar</button>
      </div>
    </section>
  );
}

export default HowToHelp;
