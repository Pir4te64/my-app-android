import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button title="Log in" onPress={() => router.push("/login")} />
      <Button title="Create Account" onPress={() => router.push("/register")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#f5f5f5",
  },
});
