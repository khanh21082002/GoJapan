import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen, StoreScreen } from "../screen";
import UITab from "./UITab";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
function App(props){
    return<NavigationContainer>
        <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Store" component={StoreScreen}/>
            <Stack.Screen name="Tab" component={UITab}/>
            <Stack.Screen name="Account" component={AccountScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default App