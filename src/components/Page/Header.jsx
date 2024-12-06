import { useState } from "react";
import styles from "./Header.module.scss";
import HeaderMenuXs from "./HeaderMenuXs";
import BFLogo from "/src/assets/images/logo_bf.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={` m-10 d-flex flex-row center ${styles.header}`}>
      <div className="flex-fill">
        <img src={BFLogo} alt="Logo BF" />
      </div>
      <ul className={`${styles.headerList}`}>
        <button className={`btn btn-primary`}>
          <li>
            <strong>Profil</strong>
          </li>
        </button>
        <button className={`btn btn-primary`}>
          <li>
            <strong>Etudes</strong>
          </li>
        </button>
        <button className={`btn btn-primary`}>
          <li>
            <strong>Entreprise</strong>
          </li>
        </button>
        <button className={`btn btn-primary`}>
          <li>
            <strong>Veille Technologique</strong>
          </li>
        </button>
        <button className={`btn btn-primary`}>
          <li>
            <strong>Projets</strong>
          </li>
        </button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXS}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenuXs />
        </>
      )}
    </header>
  );
}

export default Header;
