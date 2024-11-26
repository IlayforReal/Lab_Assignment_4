import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const PasswordRecovery = () => {
  const router = useRouter(); // Initialize the router
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle the redirection to the success page
  const handleRecovery = () => {
    router.push('/passwordResetSuccess'); // Navigate directly to the success page
  };

  return (
    <LinearGradient colors={['#cee5ee', '#61cadf']} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Password Recovery</Text>
        <Text style={styles.subText}>Enter your email address and new password below.</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
        />
        <TextInput
          label="Re-enter Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
        />

        {/* TouchableOpacity triggers handleRecovery directly */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleRecovery} // Navigate to the success page
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20 },
  subText: { color: '#373A40', fontSize: 16, marginBottom: 30, textAlign: 'center' },
  input: { width: '100%', marginBottom: 15 },
  continueButton: {
    backgroundColor: '#4A628A',
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
});

export default PasswordRecovery;
