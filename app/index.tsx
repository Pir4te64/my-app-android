import React from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Button, Card } from "react-native-paper";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Card style={styles.container}>
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => router.push("/login")}
            style={styles.button}
          >
            Log in
          </Button>
          <Button
            mode="outlined"
            onPress={() => router.push("/register")}
            style={styles.button}
          >
            Create Account
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Fondo claro
  },
  container: {
    width: "80%",
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 4, // Sombra para Android
    shadowColor: "#000", // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    marginVertical: 8,
  },
});
