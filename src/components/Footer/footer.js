import * as React from "react";
import * as styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} The Last. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;