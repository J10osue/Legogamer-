import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Mapa from '../screens/Mapa';

const Stack = createStackNavigator()

export default function MapaStack(){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="MAPA"
            component={Mapa}
            options={{ title: "Ubicación de las mejores tiendas de videojuegos" }}
    
          />
        </Stack.Navigator>
      );
}