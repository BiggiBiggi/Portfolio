import styles from "./HeaderMenuXs.module.scss";

function HeaderMenuXs() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
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
  );
}

export default HeaderMenuXs;
