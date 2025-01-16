// components/Login.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { loginUser } from "@/scripts/authService"; // Importa la función de login desde authService
import { useRouter } from "expo-router"; // Importa useRouter para la navegación

interface Props {
  // Puedes definir propiedades si es necesario
}

const Login: React.FC<Props> = () => {
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
    } catch (error) {
      setLoading(false); // Detiene el loading en caso de error
      Alert.alert("Login error:", error.message); // Muestra el mensaje de error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Loader mientras carga
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}

      <Text style={styles.registerText}>
        {`Don't have an account? `}
        <TouchableOpacity onPress={() => router.replace("/register")}>
          <Text style={styles.link} onPress={() => router.replace("/register")}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  registerText: {
    marginTop: 12,
    fontSize: 16,
    color: "#333",
  },
  link: {
    color: "#1E90FF", // Color azul para el enlace
    textDecorationLine: "underline", // Subraya el texto
  },
});

export default Login;
