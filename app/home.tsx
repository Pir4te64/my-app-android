import React from "react";
import { StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "@/scripts/firebaseConfig"; // Ajusta la ruta según tu configuración de Firebase
import {
  Button,
  Text,
  Card,
  Paragraph,
  Avatar,
  Provider as PaperProvider,
} from "react-native-paper";

const HomeScreen: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra sesión con Firebase
      Alert.alert("Logout", "You have been logged out.");
      router.replace("/"); // Redirige al usuario a la pantalla de login
    } catch (error) {
      Alert.alert("Error", error.message); // Muestra un error si ocurre
    }
  };

  return (
    <PaperProvider>
      <Card style={styles.container}>
        <Card.Title
          title="Welcome to Home Screen"
          subtitle="You are logged in!"
          left={(props) => <Avatar.Icon {...props} icon="home" />}
        />
        <Card.Content>
          <Paragraph style={styles.subtitle}>
            Explore the app or logout to return to the login screen.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={handleLogout}
            style={styles.logoutButton}
          >
            Logout
          </Button>
        </Card.Actions>
      </Card>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 4, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  logoutButton: {
    marginTop: 16,
    alignSelf: "flex-end",
  },
});

export default HomeScreen;
