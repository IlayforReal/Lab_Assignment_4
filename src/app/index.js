import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Text, Button, Checkbox } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import MyButton from "../components/MyButton";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <LinearGradient colors={["#61cadf", "#cee5ee"]} style={loginStyle.gradient}>
      <SafeAreaView style={loginStyle.container}>
        <View
          style={{
            ...loginStyle.section,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={loginStyle.logo}
          />
        </View>

        <View style={{ ...loginStyle.section }}>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            label={"Email"}
            placeholder="Enter your email"
            style={loginStyle.textInput}
            theme={{ colors: { primary: "#61cadf" } }}
          />
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            label={"Password"}
            placeholder="Enter your password"
            style={loginStyle.textInput}
            secureTextEntry={!isShowPassword}
            right={
              <TextInput.Icon
                onPress={() => setIsShowPassword(!isShowPassword)}
                icon={isShowPassword ? "eye" : "eye-off"}
              />
            }
            theme={{ colors: { primary: "#084C61" } }}
          />

          <View style={loginStyle.rememberMeContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color="#084C61"
            />
            <Text style={loginStyle.rememberMeText}>Remember Me?</Text>
          </View>
        </View>

        <View style={{ ...loginStyle.section }}>
          <View style={{ marginVertical: 10 }}>
            <MyButton
              text="Login"
              action={() => router.replace("dashboard")}
              mode="contained"
              size="small"
              buttonColor="#61cadf"
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <MyButton
              text="Register"
              action={() => router.push("register")}
              mode="contained"
              size="small"
              buttonColor="#cee5ee"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              onPress={() => router.push("recover")}
              mode="text"
              style={{ width: "100%" }}
              labelStyle={{ color: "#084C61" }}
            >
              Forgot Password?
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;

const loginStyle = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
  },
  textInput: {
    margin: 10,
    backgroundColor: "#fff",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  rememberMeText: {
    color: "#084C61",
    fontSize: 14,
    marginLeft: 8,
  },
});
