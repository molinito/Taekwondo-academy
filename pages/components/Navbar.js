/* import React from "react";
import { Box, Flex, Text, Link, Spacer } from "@chakra-ui/react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <Box className={styles.navbar}>
        <Box bg="gray.100" p={4}>
        <Flex>
            <Box p="2">
            <Link href="/">Home</Link>
            </Box>
            <Spacer />
            <Box p="2">
            <Link href="/login">Login</Link>
            </Box>
            <Box p="2">
            <Link href="/profile">Profile</Link>
            </Box>
            <Box p="2">
            <Link href="/student-list">Student List</Link>
            </Box>
            <Box p="2">
            <Link href="/teacher-list">Teacher List</Link>
            </Box>
            <Box p="2">
            <Link href="/training-days">Training Days</Link>
            </Box>
            <Box p="2">
            <Link href="/physical-requirements">Physical Requirements</Link>
            </Box>
        </Flex>
        </Box>
        </Box>
    );
    }

export default Navbar; 





import { useState } from 'react';
import { Box, Flex, Spacer, Link, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box className={styles.navbar}>
      <Box bg="gray.100" p={4}>
        <Flex align="center">
          <Box p="2">
            <Link href="/">Home</Link>
          </Box>

          <Spacer />
          <Box p="2">
            <Link href="/about">About us</Link>
            </Box>
            <Spacer />     
            <Box p="2">
            <Link href="/contact">Contact</Link>
            </Box>
            <Spacer />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<HamburgerIcon />}
              variant="outline"
              onClick={handleMenuToggle}
              display={{ base: 'block', md: 'none' }} // Mostrar solo en dispositivos móviles
            />
            <MenuList
              display={{ base: isMenuOpen ? 'block' : 'none', md: 'flex' }} // Mostrar solo en dispositivos móviles
              flexDirection={{ base: 'column', md: 'row' }} // Alinear en columnas en dispositivos móviles
              alignItems="flex-end" // Alinear a la derecha
            >
              <MenuItem>
                <Link href="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/profile">Profile</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/student-list">Student List</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/teacher-list">Teacher List</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/training-days">Training Days</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/physical-requirements">Physical Requirements</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar; */

import { useState } from 'react';
import { Box, Flex, Spacer, Link } from '@chakra-ui/react';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <Box className={styles.navbar}>
        <Box bg="gray.100" p={4}>
          <Flex align="center">
            <Box p="15" >
              <Link href="/">Home</Link>
            </Box>
            <Spacer />
            <Box p="2">
              <Link href="/about">About us</Link>
            </Box>
            <Spacer />
            <Box p="2">
              <Link href="/contact">Contact</Link>
            </Box>
            <Spacer />
            <div
              className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonActive : ''}`}
              onClick={handleMenuToggle}
            >
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </div>
          </Flex>
        </Box>
        {isMenuOpen && (
          <Box className={styles.menuLinks}>
            <Link href="/login" className={styles.menuLink}>
              Login
            </Link>
            <Link href="/profile" className={styles.menuLink}>
              Profile
            </Link>
            <Link href="/student-list" className={styles.menuLink}>
              Student List
            </Link>
            <Link href="/teacher-list" className={styles.menuLink}>
              Teacher List
            </Link>
            <Link href="/training-days" className={styles.menuLink}>
              Training Days
            </Link>
            <Link href="/physical-requirements" className={styles.menuLink}>
              Physical Requirements
            </Link>
          </Box>
        )}
      </Box>
    );
  };
  
  export default Navbar;