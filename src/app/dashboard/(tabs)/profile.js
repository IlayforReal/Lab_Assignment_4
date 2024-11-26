import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const { width } = Dimensions.get('window');

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const savedImage = await AsyncStorage.getItem('profileImage');
        if (savedImage) {
          setProfileImage(savedImage);
        }
      } catch (error) {
        console.error('Failed to load profile image:', error);
      }
    };
    loadProfileImage();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleChangePicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setProfileImage(imageUri);
      try {
        await AsyncStorage.setItem('profileImage', imageUri);
      } catch (error) {
        console.error('Failed to save profile image:', error);
      }
    }
  };

  const ProfileHeader = () => {
    return (
      <LinearGradient
        colors={isDarkMode ? ['#333', '#666'] : ['#61cadf', '#cee5ee']} // Gradient color adjustment based on dark mode
        style={styles.headerContainer}
      >
        <View style={styles.profileImageContainer}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.profileImagePlaceholder}>
              <Text style={{ color: isDarkMode ? '#bbb' : '#888' }}>No Image</Text>
            </View>
          )}

          <Ionicons
            name="camera"
            size={24}
            color="#FFF"
            style={styles.cameraIcon}
            onPress={handleChangePicture}
          />
        </View>
        <Text style={[styles.name, { color: isDarkMode ? '#FFF' : '#000' }]}>
          Shiela Theresa Mosqueda
        </Text>
        <Text style={[styles.status, { color: '#25a3d0' }]}>
          Software Engineer
        </Text>
      </LinearGradient>
    );
  };

  const ContactInfo = () => {
    return (
      <View
        style={[
          styles.contactContainer,
          { backgroundColor: isDarkMode ? '#333' : '#e7f7fc' }, // Background color adjustment
        ]}
      >
        <Text style={[styles.infoText, { color: isDarkMode ? '#FFF' : '#000' }]}>
          Email: shiela.mosqueda@example.com
        </Text>
        <Text style={[styles.infoText, { color: isDarkMode ? '#FFF' : '#000' }]}>
          Phone: +63 123 4567 890
        </Text>
      </View>
    );
  };

  const SettingsList = () => {
    return (
      <View style={[styles.settingsContainer]}>
        <View style={styles.settingItem}>
          <Ionicons
            name="moon"
            size={20}
            color={isDarkMode ? '#FFF' : '#000'}
          />
          <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>
            Dark Mode
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          />
        </View>
        <View style={styles.settingItem}>
          <Ionicons
            name="card"
            size={20}
            color={isDarkMode ? '#FFF' : '#000'}
          />
          <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>
            Cards
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDarkMode ? '#FFF' : '#888'}
          />
        </View>
        <View style={styles.settingItem}>
          <Ionicons
            name="person"
            size={20}
            color={isDarkMode ? '#FFF' : '#000'}
          />
          <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>
            Profile Details
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDarkMode ? '#FFF' : '#888'}
          />
        </View>
        <View style={styles.settingItem}>
          <Ionicons
            name="settings"
            size={20}
            color={isDarkMode ? '#FFF' : '#000'}
          />
          <Text style={[styles.settingText, { color: isDarkMode ? '#FFF' : '#000' }]}>
            Settings
          </Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDarkMode ? '#FFF' : '#888'}
          />
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: isDarkMode ? '#222' : '#eef9fd' }, // General background color adjustment
      ]}
    >
      <ProfileHeader />
      <ContactInfo />
      <SettingsList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  headerContainer: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  profileImageContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    marginBottom: 15,
  },
  profileImagePlaceholder: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: (width * 0.2) / 2,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 5,
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 14,
    color: '#FFC107',
  },
  contactContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
  },
  settingsContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
   
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  settingText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
});

export default Profile;
