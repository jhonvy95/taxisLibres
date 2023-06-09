import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.png";
import UserMenu from "./userMenu/UserMenu";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbar__content}>
          <img src={Logo} alt="Logo" />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
