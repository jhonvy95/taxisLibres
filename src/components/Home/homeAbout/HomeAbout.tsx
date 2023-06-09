import styles from "./HomeAbout.module.scss";
import Information1 from "../../../assets/images/Information1.jpg";
import Information2 from "../../../assets/images/Information2.jpg";
import Information3 from "../../../assets/images/Information3.jpg";
import Information4 from "../../../assets/images/Information4.jpg";
const HomeAbout = () => {
  1;
  return (
    <section className="section">
      <div className="container">
        <div className={styles.row}>
          <div className={`${styles.image} ${styles.column}`}>
            <img src={Information1} alt="information1" />
          </div>
          <div className={`${styles.content} ${styles.column}`}>
            <h3>¿Qué es la Hackathon Taxis Libres y quiénes pueden participar?</h3>
            <div>
              Es una maratón de desarrollo virtual donde se reunirán programadores, diseñadores,
              data scientist's, mercadólogos, economistas, financieros y todos aquellos apasionados
              por la innovación y la creatividad.
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.content} ${styles.column}`}>
            <h3>¿Cuándo se realizará?</h3>
            <div>Este evento virtual se llevará a cabo del 10 al 12 de julio de 2023</div>
          </div>
          <div className={`${styles.image} ${styles.column}`}>
            <img src={Information2} alt="information2" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.image} ${styles.column}`}>
            <img src={Information3} alt="information3" />
          </div>
          <div className={`${styles.content} ${styles.column}`}>
            <h3>¿Donde es?</h3>
            <div>
              La Hackathon Taxis Libres será un evento virtual que se llevará a cabo del 15 al 17 de
              noviembre de 2021. Reunirá a programadores, diseñadores y expertos en innovación para
              desarrollar soluciones creativas en movilidad, tecnología y sostenibilidad. Habrá
              premios para los mejores equipos y oportunidades laborales. ¡No te lo pierdas!
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={`${styles.content} ${styles.column}`}>
            <h3>¿Cuál es el objetivo de la Hackathon de Taxis Libres?</h3>
            <div>
              Nuestro objetivo es fomentar la creatividad y el talento de los colombianos al abordar
              cinco aspectos clave en movilidad, tecnología y sostenibilidad: seguridad, eficiencia,
              sostenibilidad, experiencia del usuario y economía colaborativa. ¡Queremos que los
              participantes desarrollen soluciones innovadoras que mejoren la calidad de vida de los
              colombianos!
            </div>
          </div>
          <div className={`${styles.image} ${styles.column}`}>
            <img src={Information4} alt="information4" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAbout;
