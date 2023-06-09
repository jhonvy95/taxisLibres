import styles from "./HomeAdwards.module.scss";
import Award1 from "../../../assets/images/adward1.png";
const HomeAwards = () => {
  return (
    <section className="section2">
      <div className="container">
        <div className={styles.homeAwards}>
          <h1>Premios</h1>
          <div className={styles.row}>
            <div className={styles.content}>
              <div className={styles.content__image}>
                <img src={Award1} alt="" />
              </div>
              <div className={styles.content__information}>
                <h3>Primer lugar</h3>
                <ol>
                  <li>$5.000.000 COP.</li>
                  <li>($10.000 USD IBM Cloud).</li>
                  <li>Un teléfono Huawei.</li>
                  <li>50 viajes en taxi ($15.000 COP c/u).</li>
                  <li>1 año de licencia Platzi.</li>
                  <li>6 meses de oficinas.</li>
                </ol>
              </div>
            </div>
            <div>
              <div className={styles.content__image}>
                <img src={Award1} alt="" />
              </div>
              <div className={styles.content__information}>
                <h3>Segundo lugar</h3>
                <ol>
                  <li>$3.000.000 COP.</li>
                  <li>Un teléfono Huawei.</li>
                  <li>20 viajes en taxi ($15.000 COP c/u).</li>
                  <li>6 meses de licencia para Platzi.</li>
                  <li>3 meses de oficinas</li>
                </ol>
              </div>
            </div>
            <div>
              <div className={styles.content__image}>
                <img src={Award1} alt="" />
              </div>
              <div className={styles.content__information}>
                <h3>Tercer lugar</h3>
                <ol>
                  <li>$2.000.000 COP.</li>
                  <li>Un teléfono Huawei.</li>
                  <li>10 viajes en taxi ($15.000 COP c/u).</li>
                  <li>6 meses de licencia para Platzi.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAwards;
