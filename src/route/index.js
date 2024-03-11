import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Detail from '../screens/detail/Detail';
import Favourities from '../screens/favourities/Favourities';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';

const Stack = createNativeStackNavigator();
const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Favourities" component={Favourities} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})