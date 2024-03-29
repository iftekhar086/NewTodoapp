import styles from "./Appfooter.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Appfooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-content"]}>
        &copy; Desined by iftekhar ||{" "}
        <a href="https://github.com/iftekhar086">
          <FaGithub color="white" />
        </a>{" "}
        ||{" "}
        <a href="https://www.linkedin.com/in/md-iftekhar-ahmed-70b3091b2/">
          <FaLinkedin  color="white" />
        </a>
      </div>
    </div>
  );
};

export default Appfooter;
