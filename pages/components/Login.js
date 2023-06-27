import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Center, Container, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import styles from "../../styles/Login.module.css";
import NextLink from "next/link";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Center className={styles.Login}>
      <Container className={styles.loginContainer}>
        <Heading className={styles.loginTitle}>Login</Heading>
        <form className={styles.loginForm}>
          <Stack spacing={6}>
            <FormControl>
              <FormLabel className={styles.loginFormLabel}>Username</FormLabel>
              <Input type="text" className={styles.loginFormInput} />
            </FormControl>
            <FormControl>
              <FormLabel className={styles.loginFormLabel}>Password</FormLabel>
              <Input type="password" className={styles.loginFormInput} />
            </FormControl>
            <NextLink href="/dashboard">
              <Button colorScheme="green" className={styles.loginFormButton}>
                Iniciar Sesión
              </Button>
            </NextLink>
            <div className={styles.loginFormDivider} style={{ display: "flex", alignItems: "center" }}>
  <div className={styles.loginFormDividerLine} style={{ flex: 1 }}>______________________</div>
  <div className={styles.loginFormDividerText} style={{ margin: "0 1rem" }}>o</div>
  <div className={styles.loginFormDividerLine} style={{ flex: 1 }}>_______________________</div>
</div>
            <Button
              colorScheme="red"
              className={styles.loginFormButton}
              onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
            >
              Sign In with Google
            </Button>
            <NextLink href="/" className={styles.loginLink}>
              Volver a página de inicio
            </NextLink>
          </Stack>
        </form>
      </Container>
    </Center>
  );
};

export default Login;



