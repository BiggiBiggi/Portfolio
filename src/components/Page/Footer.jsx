import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${styles.footer} d-flex center flex-column p-10`}>
      <p>Copyright © 2024 Benjamin FRELAND</p>
    </footer>
  );
}

export default Footer;
