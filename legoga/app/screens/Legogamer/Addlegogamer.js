import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Toast from 'react-native-toast-message'
import Addlegogamerform from '../../components/Legogamer/Addlegogamerform'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'

export default function Addlegogamer({ navigation }) {
const toastRef = useRef()
const [loading, setLoading] = useState(false)
  return (
    <KeyboardAwareScrollView>
      <Addlegogamerform
        toastRef={toastRef} 
        setLoading={setLoading}
        navigation={navigation}
      />
      <Loading isVisible={loading} text='Creando nuevo videojuego...'/>
      <Toast ref={toastRef} position='top' opacity={0.9}/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})
