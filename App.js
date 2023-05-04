
 

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from "./src/pages/Task/"
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
    <Stack.Screen
    name = "Task"
    component={Task}
    options={{
      headerTintColor:"#dea0f2"
    }}
    />
    <Stack.Screen
    name = "NewTask"
    component={NewTask}
    options={{
      headerTintColor:"#dea0f2"
    }}
    />
    <Stack.Screen
    name = "Details"
    component={Details}
    options={{
      headerTintColor:"#dea0f2"
    }}
    />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph2: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextInput:{
    width: '80%',
    pbackgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  }
});