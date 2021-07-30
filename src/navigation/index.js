import React, { useContext } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Text } from "react-native"
import HomeNavigator from "./HomeNavigator"
import AuthNavigator from "./AuthNavigator"
import DrawerNavigator from "./DrawerNavigator"
import GlobalContext from "../context/Provider"

 const AppNavContainer=()=> {
     const isLoggedIn = true;
     const state = useContext(GlobalContext)
     console.log('State:  ' + state)
    return(
        <NavigationContainer>
            {isLoggedIn?<DrawerNavigator/>:<AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavContainer;