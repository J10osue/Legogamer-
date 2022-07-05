import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Topdeconsolas from '../screens/Topdeconsolas';

const Stack = createStackNavigator()

export default function TopdeconsolasStack(){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="TOPDECONSOLAS"
            component={Topdeconsolas}
            options={{ title: "Top de las consolas que estan de moda" }}
    
          />
        </Stack.Navigator>
      );
}