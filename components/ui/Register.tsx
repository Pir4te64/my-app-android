// components/RegisterForm.tsx
import React, { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import { registerUser } from "@/scripts/authService"; // Importa la función de registro desde authService
import { useRouter } from "expo-router"; // Importa useRouter para la navegación

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Estado para controlar si está cargando
  const router = useRouter(); // Hook para la navegación

  const handleRegister = async () => {
    setLoading(true); // Inicia el loading
    try {
      const user = await registerUser(email, password); // Llama a la función de registro
      setLoading(false); // Detiene el loading
      Alert.alert("Success", `Account created for ${user.email}`); // Muestra un alert de éxito
      setEmail(""); // Limpia el campo de email
      setPassword(""); // Limpia el campo de password
    } catch (error) {
      setLoading(false); // Detiene el loading en caso de error
      Alert.alert("Registration error:", error.message);
    }
  };

  return (
    <>
      <Text style={styles.title}>Register</Text>

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
        <Button title="Register" onPress={handleRegister} />
      )}

      <Text style={styles.loginText}>
        {`Already have an account? `}
        <TouchableOpacity onPress={() => router.replace("/login")}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  loginText: {
    marginTop: 12,
    fontSize: 16,
    color: "#333",
  },
  link: {
    color: "#1E90FF", // Color azul para el enlace
    textDecorationLine: "underline", // Subraya el texto
  },
});
