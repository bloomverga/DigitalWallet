/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { createStackNavigator } from "@react-navigation/stack"
 import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
 
 import { SignUp } from './screens'
 
 const theme = {
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     borders: "transparent"
   }
 }
 
 const Stack = createStackNavigator()
 
 const App = () => {
   return (
     <NavigationContainer theme={theme}>
       <Stack.Navigator
         screenOptions={{
           headerShown: false
         }}
         initialRouteName={'SignUp'}
       >
         <Stack.Screen name="SignUp" component={SignUp}/>
       </Stack.Navigator>
     </NavigationContainer>
   )
 }
 
 export default App;
 