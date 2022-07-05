import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Buscar from '../screens/Buscar';

const Stack = createStackNavigator()

export default function BuscarStack(){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="BUSCAR"
            component={Buscar}
            options={{ title: "Las mejores tiendas de videojuegos " }}
    
          />
        </Stack.Navigator>
      );
}