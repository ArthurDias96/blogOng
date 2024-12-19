import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Por favor, preencha os campos obrigatórios!");
    } else {
      setSuccessMessage("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}

export default Contact;
