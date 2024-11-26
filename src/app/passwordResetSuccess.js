import React from "react";
import { StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const PasswordResetSuccess = () => {
  const router = useRouter();

  return (
    <LinearGradient colors={["#61cadf", "#cee5ee"]} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Password Reset Successful</Text>
        <Text style={styles.message}>
          Your password has been reset successfully. You can now log in with
          your new password.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/")}
        >
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A628A",
    paddingVertical: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default PasswordResetSuccess;
