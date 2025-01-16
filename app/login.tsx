// app/login.tsx
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Login from "@/components/ui/Login"; // Importamos el componente Login

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Login /> {/* Usamos el componente Login aquí */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Permite que el contenido se expanda en la pantalla
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    padding: 16, // Añade un pequeño padding a los bordes
  },
  formContainer: {
    width: "100%", // Asegura que el formulario ocupe el ancho completo
    maxWidth: 400, // Máximo ancho del formulario
    padding: 20, // Añade padding para no estar tan pegado a los bordes
    borderRadius: 8, // Bordes redondeados para mejorar la apariencia
    backgroundColor: "#fff", // Fondo blanco para el formulario
  },
});

export default LoginScreen;
