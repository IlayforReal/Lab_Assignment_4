import { View, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { Avatar, Text, TextInput, Button } from 'react-native-paper';

const Login = () => {
  return (
    <View style={{...loginStyle.container, backgroundColor: '#dedede'}}>
        <View style={{...loginStyle.section, marginBottom: 20}}>
            <Avatar.Image size={200} source={require('../assets/avatar.webp')} />
        </View>
        <View style={{...loginStyle.section}}>
            <TextInput 
                label='Username'
                placeholder='Enter your username'
                style={{height: 50, width: '80%', margin: 5}}  
                mode='outlined'  
            />
              <TextInput 
                label='Password'
                placeholder='Enter your password'
                style={{height: 50, width: '80%', margin: 5}}  
                mode='outlined'  
            />
        </View>
        <View style={{...loginStyle.section, justifyContent: 'flex-start'}}>
            <View style={{ margin: 10 }}>
                <Button onPress={() => console.log("Login")} contentStyle={{ width: '100%'}} mode='contained'>
                    Login
                </Button>
            </View>
            <View style={{ margin: 10 }}>
                <Button onPress={() => console.log("Register")} contentStyle={{ width: '100%'}} mode='contained'>
                    Register
                </Button>
            </View>
        </View>
    </View>
  )
}

export default Login

const loginStyle = StyleSheet.create(styles)