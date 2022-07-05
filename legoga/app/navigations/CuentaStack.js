import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cuenta from "../screens/Cuenta/Cuenta"
import Login from "../screens/Cuenta/Login"
import Register from "../screens/Cuenta/Register";

const Stack = createStackNavigator();

export default function  CuentaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cuenta"
        component={Cuenta}
        options={{ title: " MI PERFIL " }}
        
      />

      <Stack.Screen
       name='login'
       component={Login}
       options={{title:'Inicie sesion'}}
      />



<Stack.Screen
 name='register'
 component={Register}
 options={{title:'Registro'}}
/>

    </Stack.Navigator>
  )
}
