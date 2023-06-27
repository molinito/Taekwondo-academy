import { useState } from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import styles from '../../styles/Navbar.module.css';
import NextLink from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className={styles.navbar}>
      <Box bg="gray.100" className={styles.box}>
        <Flex align="center">
          <Box p="7">
            <Image
              src="/logo1.jpg"
              alt="logo"
              className={styles.logo}
              width={100}
              height={100}
              boxSize="50px"
              mx={2}
            />
            </Box>
          <Box p="2">
            <Link href="/">Home</Link>
          </Box>
          <Spacer />
          <Box p="2">
            <Link href="/about">About</Link>
          </Box>
          <Spacer />
          <Box p="2">
            <Link href="/contact">Contact</Link>
          </Box>
          <Spacer />
          <div
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuButtonActive : ''
            }`}
            onClick={handleMenuToggle}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </div>
          <Box>
            <Image
              src="/logo2.jpg"
              alt="logo"
              className={styles.logo}
              width={100}
              height={100}
              boxSize="50px"
              mx={2}
            />
          </Box>
        </Flex>
      </Box>
      {isMenuOpen && (
        <Box className={styles.menuLinks}>
          <NextLink href="/login" passHref>
            <Link className={styles.menuLink}>Login</Link>
          </NextLink>
          <NextLink href="/dashboard" passHref>
            <Link className={styles.menuLink}>Dashboard</Link>
          </NextLink>
          <NextLink href="/profile" passHref>
            <Link className={styles.menuLink}>Profile</Link>
          </NextLink>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;


