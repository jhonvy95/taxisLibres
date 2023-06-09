import React, { useState, FormEvent } from "react";
import styles from "./HomeForm.module.scss";

const HomeForm: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pais, setPais] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [equipo, setEquipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className={styles.title}>Registrate al hackathon</h1>
        <div className={styles.HomeForm}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Nombre completo:
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <label>
              Dirección de correo electrónico:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Número de teléfono:
              <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </label>
            <label>
              País de residencia:
              <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} />
            </label>
            <label>
              Experiencia y habilidades relevantes:
              <textarea value={experiencia} onChange={(e) => setExperiencia(e.target.value)} />
            </label>
            <label>
              Equipo o registro individual:
              <input type="text" value={equipo} onChange={(e) => setEquipo(e.target.value)} />
            </label>
            <label>
              Breve descripción del proyecto o idea:
              <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </label>
            <button type="submit" className={styles.button}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;
