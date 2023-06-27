import { Box, Heading, Text, Button, Link, Image } from '@chakra-ui/react';
import styles from '../../styles/Middle.module.css';

const Middle = () => {
  return (
    <Box className={styles.middle}>
      <Box className={styles.middleContent}>
        <Heading size="md" className={styles.headtitle}>
          ¿Qué enseñamos?
        </Heading>
        <Text className={styles.descrip}>
          Nuestro enfoque se centra en desarrollar habilidades físicas, fortaleza mental y valores como el respeto y la disciplina. Mediante técnicas de autodefensa y ejercicios divertidos, los niños aprenderán a canalizar su energía, mejorar su equilibrio y confianza en sí mismos. ¡Únete a nuestras clases y descubre cómo el Taekwondo puede transformar la vida de tu hijo, brindándole herramientas para crecer y enfrentar los desafíos con determinación!
        </Text>
        <Button className={styles.btn}>
          <Link href="/login" className={styles.menuLink}>
            ¡Únete!
          </Link>
        </Button>
      </Box>
      <Box className={styles.middleContent}>
        <Heading size="md" className={styles.headtitle}>
          ¿Por qué elegirnos?
        </Heading>
        <Text className={styles.descrip}>
          Nuestros instructores altamente capacitados tienen años de experiencia en la enseñanza de Taekwondo a niños y adultos de todas las edades y habilidades. Además, nuestras instalaciones están diseñadas para brindar un ambiente seguro y acogedor para todos nuestros estudiantes. ¡Únete a nuestra comunidad y descubre cómo el Taekwondo puede transformar tu vida!
        </Text>
        <Image src="/tae1.png" alt="Taekwondo" className={styles.image} />
        <Image src="/tae2.png" alt="Taekwondo" className={styles.image} />
        <Button className={styles.btn}>
          <Link href="/login" className={styles.menuLink}>
            ¡Únete!
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Middle;