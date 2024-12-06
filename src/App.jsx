import styles from "./App.module.scss";
import Content from "./components/Page/Content";
import Footer from "./components/Page/Footer";
import Header from "./components/Page/header";

function App() {
  return (
    <>
      <div className={`${styles.appContainer} d-flex flex-column`}>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
