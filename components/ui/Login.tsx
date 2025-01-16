import React, { useState } from "react";
import { StyleSheet, Alert, View } from "react-native";
import { Text, TextInput, Button, ActivityIndicator, Card } from "react-native-paper";
import { useRouter } from "expo-router";
import { loginUser } from "@/scripts/authService"; // Importa la función de login desde authService

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado para controlar si está cargando
  const router = useRouter(); // Hook para la navegación

  const handleLogin = async () => {
    setLoading(true); // Inicia el loading
    try {
      const user = await loginUser(email, password); // Usa la función loginUser
      setLoading(false); // Detiene el loading
      Alert.alert("Success", `Welcome, ${user.email}!`); // Muestra un alert de éxito
      setEmail(""); // Limpia el campo de email
      setPassword(""); // Limpia el campo de password
      router.push("/home");
    } catch (error) {
      setLoading(false); // Detiene el loading en caso de error
      Alert.alert("Login error:", error.message); // Muestra el mensaje de error
    }
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Log in</Text>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          {loading ? (
            <ActivityIndicator animating={true} size="large" />
          ) : (
            <Button mode="contained" onPress={handleLogin} style={styles.button}>
              Login
            </Button>
          )}
          <Text style={styles.registerText}>
            Don’t have an account?{" "}
            <Text
              style={styles.link}
              onPress={() => router.replace("/register")}
            >
              Sign Up
            </Text>
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 16, // Espaciado adicional para dispositivos pequeños
  },
  card: {
    width: "100%", // Usa todo el ancho disponible
    maxWidth: 400, // Limita el tamaño en pantallas grandes
    padding: 16,
    borderRadius: 8,
    elevation: 4, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    width: "100%", // Asegura que el input ocupe todo el ancho del contenedor
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    width: "100%", // Hace que el botón ocupe todo el ancho del contenedor
  },
  registerText: {
    marginTop: 12,
    fontSize: 14,
    textAlign: "center",
  },
  link: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});

export default Login;
