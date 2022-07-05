import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Legogamer from '../screens/Legogamer/Legogamer'
import Addlegogamer from '../screens/Legogamer/Addlegogamer';

const Stack = createStackNavigator()

export default function LegogamerStack(){
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="LEGOGAMER"
            component={Legogamer}
            options={{ title: "Presentacion" }}
    
          />
           <Stack.Screen
            name="add-legogamer"
            component={Addlegogamer}
            options={{ title: "Crear locales de videojuegos" }}
    
          />
        </Stack.Navigator>
      );
}