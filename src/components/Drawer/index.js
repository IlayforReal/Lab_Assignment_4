import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DrawerContent(props) {
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();
  const year = new Date().getFullYear();
  const { top, bottom } = useSafeAreaInsets();

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const savedImage = await AsyncStorage.getItem("profileImage");
        if (savedImage) {
          setProfileImage(savedImage);
        }
      } catch (error) {
        console.error("Error loading profile image:", error);
      }
    };

    loadProfileImage();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: top,
          backgroundColor: "#ffffff",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                marginBottom: 10,
              }}
            />
          ) : (
            <MaterialCommunityIcons
              name="account-circle"
              size={100}
              color="#6c757d"
              style={{ marginBottom: 10 }}
            />
          )}
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#343a40" }}>
            Shiela Theresa L. Mosqueda
          </Text>
        </View>

        <DrawerItemList {...props} />

        <DrawerItem
          label="My Quests"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list"
              color={color}
              size={size}
            />
          )}
          onPress={() => router.push("/my-quests")}
        />
        <DrawerItem
          label="Post a Quest"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={size}
            />
          )}
          onPress={() => router.push("/post-quest")}
        />
        <DrawerItem
          label="Quest History"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )}
          onPress={() => router.push("/quest-history")}
        />
        <DrawerItem
          label="Earnings/Payments"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={size} />
          )}
          onPress={() => router.push("/earnings")}
        />

        <DrawerItem
          label="FAQ"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="help-circle-outline"
              color={color}
              size={size}
            />
          )}
          onPress={() => console.log("FAQ clicked")}
        />
        <DrawerItem
          label="Help Center"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="headset" color={color} size={size} />
          )}
          onPress={() => console.log("Help Center clicked")}
        />
        <DrawerItem
          label="Contact Support"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="phone-outline"
              color={color}
              size={size}
            />
          )}
          onPress={() => console.log("Contact Support clicked")}
        />

        <DrawerItem
          label="About"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          )}
          onPress={() => console.log("About clicked")}
        />
        <DrawerItem
          label="Terms of Service"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document"
              color={color}
              size={size}
            />
          )}
          onPress={() => console.log("Terms of Service clicked")}
        />
        <DrawerItem
          label="Privacy Policy"
          labelStyle={{ color: "#007bff" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="shield-lock"
              color={color}
              size={size}
            />
          )}
          onPress={() => console.log("Privacy Policy clicked")}
        />

        <DrawerItem
          label="Logout"
          labelStyle={{ color: "#dc3545" }}
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          )}
          onPress={handleLogout}
        />
      </DrawerContentScrollView>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 20 + bottom,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Text style={{ color: "#6c757d" }}>
          Copyright &copy; {year}. All rights reserved
        </Text>
      </View>
    </View>
  );
}
