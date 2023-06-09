import styles from "./Hero.module.scss";
import HeroImg from "../../assets/images/Hero.jpg";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={HeroImg} alt="hero" />
    </section>
  );
};
export default Hero;
