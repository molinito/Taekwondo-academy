import { Box, Heading, Link } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import logo from "../../public/tae4.png";

 const Header = () => {
  return (
    
    <Box bg="gray.100" p={4} display="flex" alignItems="center" className={styles.header}>
   
        <Heading size="md" className={styles.headtitle}>
          Academia <Image src="/logo.jpg" alt="logo" className={styles.logo} width={200} height={200} boxSize="50px" mx={2} /> Taekwondo
        </Heading>
        
    </Box>
  );
};
 export default Header;
