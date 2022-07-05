import React from 'react'
import{ NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Icon } from "react-native-elements"

import LegogamerStack from './LegogamerStack'
import BuscarStack from './BuscarStack'
import MapaStack from './MapaStack'
import OfertasStack from './OfertasStack'
import TopdejuegosStack from './TopdejuegosStack'
import CuentaStack from './CuentaStack'
import TopdeconsolasStack from './TopdeconsolasStack'


const Tab = createBottomTabNavigator()

export default function Navigation(){
return(
    <NavigationContainer>
        <Tab.Navigator
        
        initialRouteName=" restaurants "
        tabBarOptions={{
          inactiveTintColor: "#040059",
          activeTintColor: "#FF0000",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
        
        >  
          <Tab.Screen 
          name='Topdejuegos' 
          component={TopdejuegosStack}
          options={{title:"Topdejuegos"}}
          />
          <Tab.Screen 
          name='Topdeconsolas' 
          component={TopdeconsolasStack}
          options={{title:"Topdeconsolas"}}
          />
          <Tab.Screen 
          name='Ofertas' 
          component={OfertasStack}
          options={{title:"Ofertas"}}
          />
          <Tab.Screen 
          name='legogamer' 
          component={LegogamerStack}
          options={{title:"Legogamer"}}
          />
           <Tab.Screen 
          name='Buscar' 
          component={BuscarStack}
          options={{title:"Buscar"}}
          />
           <Tab.Screen 
          name='Mapa' 
        
          component={MapaStack}
          options={{title:"Mapa"}}
          
          />

          <Tab.Screen 
          name='Cuenta' 
          component={CuentaStack}
          options={{title:"Cuenta"}}
          
          />

  
        </Tab.Navigator>
    </NavigationContainer>
)

}

function screenOptions(route, color) {
  let iconname;
  switch (route.name) {
    case "legogamer":
        iconname = "home";
        break
    case "Buscar":
        iconname = "magnify";
        break
    case "Topdejuegos":
        iconname = "star-circle";
        break
    case "Topdeconsolas":
          iconname = "star-box-outline";
        break
    case 'Ofertas':
        iconname = 'tag'    
        break
    case 'Mapa':
        iconname= 'map-marker-radius'  
        break
    case 'Cuenta':
        iconname= 'account-circle'  
        break

  }
  return (
      <Icon type= 'material-community' name={iconname} size={22} color={color}/>
  )

}

           

      