import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white', // Active tab icon/text color
        tabBarInactiveTintColor: '#888', // Inactive tab icon/text color
        tabBarActiveBackgroundColor: '#084C61', // Active tab background color
        tabBarInactiveBackgroundColor: '#E8E8E8', // Inactive tab background color
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          margin: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ddd', // Border for better contrast
          overflow: 'hidden', // Ensures rounded corners
          elevation: 5, // Adds subtle shadow for a modern look
        },
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? 'white' : '#888'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={24}
              color={focused ? 'white' : '#888'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color={focused ? 'white' : '#888'}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
