import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';import { Text, View } from "react-native"
import { LOGIN, SIGNUP } from "../constants/routeNames";
 const Login=()=>{
     return(
         <View>
             <Text>Contacts</Text>
         </View>
     )
 }
 const Signup=()=>{
    return(
        <View>
            <Text>Settings</Text>
        </View>
    )
}

 const AuthNavigator=()=> {
    const AuthStack = createStackNavigator();

    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={SIGNUP} component={Signup}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;