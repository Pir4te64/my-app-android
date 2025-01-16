import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Login from "@/components/ui/Login"; // Importamos el componente Login

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Login /> {/* Usamos el componente Login aquí */}
    </ScrollView>
  );
};

// Configuración del header para esta pantalla
export const options = {
  title: "LogIn", // Título en formato camelCase
  headerStyle: {
    backgroundColor: "#6200EE", // Color de fondo del header
  },
  headerTintColor: "#fff", // Color del texto e íconos en el header
  headerTitleStyle: {
    fontWeight: "bold", // Texto del título en negrita
  },
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el contenido se expanda en toda la pantalla
    justifyContent: "center", // Centra verticalmente
    padding: 16, // Añade un pequeño padding a los bordes
    width: "100%", // Asegura que el contenedor ocupe el ancho completo
  },
});

export default LoginScreen;
