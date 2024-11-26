import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Settings = () => {
  const router = useRouter();

  const handlePress = (action) => {
    console.log(action);
  };

  return (
    <LinearGradient
      colors={['#61cadf', '#cee5ee']} // Gradient colors
      start={{ x: 0, y: 0 }} // Gradient starts at top left
      end={{ x: 1, y: 1 }} // Gradient ends at bottom right
      style={styles.container}
    >
      <Text style={styles.header}>Settings</Text>

      {/* Notification Settings */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => handlePress('Notification Settings')}
      >
        <MaterialIcons name="notifications" size={24} color="#333" />
        <Text style={styles.settingText}>Notifications</Text>
        <MaterialIcons name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* Privacy Settings */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => handlePress('Privacy Settings')}
      >
        <MaterialIcons name="lock" size={24} color="#333" />
        <Text style={styles.settingText}>Privacy</Text>
        <MaterialIcons name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* Language Settings */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => handlePress('Change Language')}
      >
        <MaterialIcons name="language" size={24} color="#333" />
        <Text style={styles.settingText}>Language</Text>
        <MaterialIcons name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* About */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => handlePress('About')}
      >
        <MaterialIcons name="info" size={24} color="#333" />
        <Text style={styles.settingText}>About</Text>
        <MaterialIcons name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* Help Centre */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => handlePress('Help Centre')}
      >
        <MaterialIcons name="help-outline" size={24} color="#333" />
        <Text style={styles.settingText}>Help Centre</Text>
        <MaterialIcons name="chevron-right" size={24} color="#888" />
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => router.replace('/')}
      >
        <MaterialIcons name="logout" size={24} color="#d9534f" />
        <Text style={[styles.settingText, { color: '#d9534f' }]}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  settingText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default Settings;
