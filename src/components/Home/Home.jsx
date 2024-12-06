import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={`d-flex flex-fill center flex-column m-30 ${styles.home}`}>
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>
        Bonjour et merci de visiter mon espace en ligne. Passionné par
        l&apos;informatique et plus précisément par le développement de site et
        de logiciel, je m&apos;efforce de transformer des idées en réalisations
        concrètes. Vous découvrirez ici mes projets, mes expériences et ce qui
        me motive au quotidien. N&apos;hésitez pas à explorer, et si quelque
        chose vous inspire ou suscite votre curiosité, je serais ravi d&apos;en
        discuter ! Bonne visite !
      </p>
    </div>
  );
}

export default Home;
