import styles from "./UserMenu.module.scss";
const UserMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="#">Nosotros</a>
      </li>
      <li>
        <a href="#">Viajeros</a>
      </li>
      <li>
        <a href="#">Empresas</a>
      </li>
      <li>
        <a href="#">Empresas</a>
      </li>
      <li>
        <a href="#">Vinculados</a>
      </li>
      <li>
        <a href="#">Ciudades</a>
      </li>
      <li>
        <a href="#">Mas</a>
      </li>
    </ul>
  );
};
export default UserMenu;
