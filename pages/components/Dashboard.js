/* import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import styles from "../../styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Dashboard
      </Heading>

      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
        <GridItem>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" fontSize="xl" mb={2}>
              Estadísticas
            </Heading>
            <Text>Total de estudiantes: 50</Text>
            <Text>Total de clases: 100</Text>
            <Text>Total de ingresos: $5000</Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" fontSize="xl" mb={2}>
              Calendario
            </Heading>
            <Text>Calendario de eventos o clases</Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" fontSize="xl" mb={2}>
              Lista de estudiantes
            </Heading>
            <Text>Nombre del estudiante 1</Text>
            <Text>Nombre del estudiante 2</Text>
            <Text>Nombre del estudiante 3</Text>
          </Box>
        </GridItem>

        <GridItem>
          <Box bg="white" p={4} boxShadow="md" borderRadius="md">
            <Heading as="h2" fontSize="xl" mb={2}>
              Configuración
            </Heading>
            <Text>Personaliza la configuración del gimnasio</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard; */

import React from "react";
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import styles from "../../styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <Box className={styles.dashboard}>
      <Heading as="h1" mb={4}>
        Dashboard
      </Heading>

      <Grid className={styles.grid}>
        <GridItem className={styles.gridItem}>
          <Heading as="h2" mb={2}>
            Estadísticas
          </Heading>
          <Text>Total de estudiantes: 50</Text>
          <Text>Total de clases: 100</Text>
          <Text>Total de ingresos: $5000</Text>
        </GridItem>

        <GridItem className={styles.gridItem}>
          <Heading as="h2" mb={2}>
            Calendario
          </Heading>
          {/* Aquí puedes agregar un calendario o integrar una biblioteca de calendario */}
          <Text>Calendario de eventos o clases</Text>
        </GridItem>

        <GridItem className={styles.gridItem}>
          <Heading as="h2" mb={2}>
            Lista de estudiantes
          </Heading>
          {/* Aquí puedes mostrar la lista de estudiantes */}
          <Text>Nombre del estudiante 1</Text>
          <Text>Nombre del estudiante 2</Text>
          <Text>Nombre del estudiante 3</Text>
          {/* ... */}
        </GridItem>

        <GridItem className={styles.gridItem}>
          <Heading as="h2" mb={2}>
            Configuración
          </Heading>
          <Text>Personaliza la configuración del gimnasio</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;

