import React,{useState, useEffect} from 'react'
import {StyleSheet, View, Text } from 'react-native'
import {Icon} from 'react-native-elements'

import firebase from 'firebase/app'

export default function Legogamer({navigation}){

const [user,setUser] = useState(null)


useEffect(() => {
   firebase.auth().onAuthStateChanged((userInfo)=>{ 
   setUser(userInfo)
    })
}, [])

return(
<View style={styles.viewBody} >
    <Text> Legogamer</Text>
    {user && ( 

    <Icon
    reverse
    type='material-community'
    name='plus'
    color='#040059'
    containerStyle={styles.btnContainer}
    onPress={()=> navigation.navigate('add-legogamer')}
    />
    
    )}
</View>

)

}

const styles = StyleSheet.create({

    viewBody:{
        flex:1,
        backgroundColor:'#fff'
    },
    btnContainer:{
        position: 'absolute',
        bottom: 15,
        right: 15,
        shadowColor: 'black',
        shadowOffset:{width: 2, height: 2},
        shadowOpacity: 0.5
    }
})