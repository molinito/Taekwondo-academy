import React from "react";
import styles from "../../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
              <div className={styles.socialIcons}>

      <p>&copy; Todos los derechos reservados</p>
      <p>Powered by Molinito</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;