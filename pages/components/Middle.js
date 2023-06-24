import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../styles/Middle.module.css";

const Middle = () => {
  return (
    <Box bg="gray.100" p={4} display="flex" alignItems="center" className={styles.middle}>
         
         <Image
        src="/tae1.png"
        alt="Gimnasio"
        className={styles.photo}
        width={800}
        height={600}
      />
      <div>
      
       
      <Heading size="md" className={styles.headtitle}>
          Que enseñamos ?
        </Heading>
        <p className={styles.descrip}>
        Nuestro enfoque se centra en desarrollar habilidades físicas, fortaleza mental 
        y valores como el respeto y la disciplina. Mediante técnicas de autodefensa y 
        ejercicios divertidos, los niños aprenderán a canalizar su energía, mejorar su 
        equilibrio y confianza en sí mismos. ¡Únete a nuestras clases y descubre cómo 
        el Taekwondo puede transformar la vida de tu hijo, brindándole herramientas para 
        crecer y enfrentar los desafíos con determinación!
        </p>
        <button className={styles.btn}>
        <Link href="/login" className={styles.menuLink}>
        ¡Únete!
            </Link>
        </button>
      </div>

      
    </Box>
  );
};

export default Middle;