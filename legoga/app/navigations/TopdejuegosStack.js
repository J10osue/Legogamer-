import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Topdejuegos from '../screens/Topdejuegos';

const Stack = createStackNavigator()

export default function TopdejuegosStack(){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="TOPDEJUEGOS"
            component={Topdejuegos}
            options={{ title: "Top de los juegos que estan de moda" }}
    
          />
        </Stack.Navigator>
      );
}