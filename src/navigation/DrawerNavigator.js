import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from "react-native"
import HomeNavigator from "./HomeNavigator"
import { HOME_NAVIGATOR } from "../constants/routeNames";

 const DrawerNavigator=()=> {
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;