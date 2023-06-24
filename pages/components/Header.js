import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <Box bg="gray.100" p={4} display="flex" alignItems="center" className={styles.header}>
      <div>
        <Heading size="md" className={styles.headtitle}>
          Academia de Taekwondo
        </Heading>
        <p className={styles.descrip}>
          Descubre el increíble mundo del Taekwondo. Aprenderás poderosas
          técnicas de autodefensa, fortalecerás tu cuerpo y mejorarás tu
          equilibrio. Además, desarrollarás disciplina y confianza en ti mismo,
          cualidades esenciales en la vida cotidiana. Únete a esta apasionante
          disciplina y desbloquea tu máximo potencial físico y mental. ¡El
          Taekwondo te espera!
        </p>
        <button className={styles.btn}>
        <Link href="/login" className={styles.menuLink}>
        ¡Únete!
            </Link>
        </button>
      </div>

      <Image
        src="/tae2.png"
        alt="Gimnasio"
        className={styles.photo}
        width={600}
        height={400}
      />
    </Box>
  );
};

export default Header;
