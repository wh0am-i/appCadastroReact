import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //navegação entre telas
import { createStackNavigator } from '@react-navigation/stack'; //navegação entre telas

import Cadastro from './Cadastro.js'; // Atualize o caminho conforme necessário
import Login from './Login.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}


