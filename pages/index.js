import React from "react";
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Middle from "./components/Middle.js";
import { Box, Spacer, Text } from "@chakra-ui/react";
import Footer from "./components/Footer.js";

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <br />
      <br />
      <Header />
      <Middle />
      <Footer />
      
      <Box p={8}>
      </Box>
      
    </>
  );
};

export default HomePage;
