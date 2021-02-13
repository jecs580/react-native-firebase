import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import userListScreen from './screens/userListScreen';
import CreateUserScreen from './screens/createUserScreen';
import userDetailScreen from './screens/userDetailScreen';

const Stack = createStackNavigator();
function MyStack(){
  return (
    <Stack.Navigator>
     <Stack.Screen name="UsersList" options={{title:'User List'}} component={userListScreen}/> 
     <Stack.Screen name="CreateUserScreen" options={{title:'Create a new user'}} component={CreateUserScreen}/> 
     <Stack.Screen name="UserDetailScreen" options={{title:'User detail'}} component={userDetailScreen}/> 
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
