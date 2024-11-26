import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import { useRouter } from 'expo-router';

const Register = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <LinearGradient // Gradient background
      colors={['#61cadf', '#cee5ee']}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Create an account</Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.loginLink}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <View style={styles.row}>
            <TextInput
              label="First name"
              mode="outlined"
              style={[styles.input, { marginRight: 10 }]}
            />
            <TextInput
              label="Last name"
              mode="outlined"
              style={styles.input}
            />
          </View>
          <TextInput
            label="Email"
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            mode="outlined"
            style={styles.input}
            secureTextEntry
          />

          {/* Terms & Conditions */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!checked)}
              color="#61cadf"
            />
            <Text>
              I agree to the{' '}
              <Text style={styles.link} onPress={() => console.log('Terms & Conditions')}>
                Terms & Conditions
              </Text>
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttons}>
  <Button
    mode="contained"
    style={styles.mainButton}
    contentStyle={{ height: 40 }} // Adjust height if needed
    labelStyle={{ fontSize: 18 }} // Set font size here
    onPress={() => console.log('Create account')}
  >
    Create account
  </Button>
</View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    marginTop: 120,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#294a78',
  },
  loginLink: {
    marginTop: 5,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  form: {
    width: '90%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  buttons: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  mainButton: {
    width: '100%',
    backgroundColor: '#61cadf',
    marginBottom: 20,
  },
});
