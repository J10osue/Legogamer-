import { StyleSheet, Text, View, ScrollView, Alert, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Button, Input, Icon, Avatar, Image } from 'react-native-elements'
import CountryPicker from 'react-native-country-picker-modal'
import { map, size, filter, isEmpty } from 'lodash'
import { loadImageFromGallery, validateEmail } from '../../utils/helpers'


    const widthScreen = Dimensions.get('window').width

    export default function Addlegogamerform({ toastRef, setLoading, navigation }) {
        const [formData, setFormData ] = useState(defaultFormValues())
        const [errorName, setErrorName ] = useState(null)
        const [errorDescription, setErrorDescription ] = useState(null)
        const [errorEmail, setErrorEmail ] = useState(null)
        const [errorAddress, setErrorAddress ] = useState(null)
        const [errorPhone, setErrorPhone ] = useState(null)
        const [imagesSelected, setImagesSelected ] = useState([])
    
        

        const Addlegogamer = async () => {
            console.log(formData)
            console.log("Has agregado un nuevo local de videojuegos")
            if (!validForm()){
                return
            }
        }
            const validForm = () =>{
                clearErrors()
                let isvalid = true
          
                if (isEmpty(formData.name)){
                    setErrorName("Debes introducir el nombre del local de videojuegos")
                    isvalid = false
                }
                if (isEmpty(formData.address)){
                  setErrorAddress("Debes introducir la direccion del local")
                  isvalid = false
              }
              if (!validateEmail(formData.email)){
                  setErrorEmail("Debes introducir un email del local")
                  isvalid = false
              }
              if (size(formData.phone)< 10){
                  setErrorPhone("Debes introducir un telefono del local")
                  isvalid = false
              }
              if (isEmpty(formData.description)){
                  setErrorDescription("Debes introducir una descripcion del local")
                  isvalid = false
              }
          }
            const clearErrors = () => {
              setErrorAddress(null)
              setErrorDescription(null)
              setErrorEmail(null)
            
              setErrorPhone(null)
              setErrorName(null)
          }
        
        return (
        <ScrollView style={styles.viewContainer}>
            <Imagelegogamer
                Imagelegogamer={imagesSelected[0]}
            />
            <FormAdd
                    formData={formData}
                    setFormData={setFormData}
                    errorName={errorName}
                    errorDescription={errorDescription}
                    errorEmail={errorEmail}
                    errorAddress={errorAddress}
                    errorPhone={errorPhone}
            />
            <UploadImage
                toastRef={toastRef}
                imagesSelected={imagesSelected}
                setImagesSelected={setImagesSelected}
            />
            <Button
                    title='Crear un nuevo local '
                    onPress={Addlegogamer}
                    buttonStyle={styles.btnAddlegogamer}
            />
        </ScrollView>
      )
    }
    
    function Imagelegogamer({ Imagelegogamer }) {
        return (
        <View style={styles.viewPhoto}>
            <Image
                style={{ width: widthScreen, height: 200}}
                source={
                    Imagelegogamer
                        ? { uri: Imagelegogamer}
                        : require('../../../assets/img/no-image.png')
                }
            />
        </View>
        )
    }
    
    function UploadImage({ toastRef, imagesSelected, setImagesSelected }) {
        const imageSelect = async() => {
            const response = await loadImageFromGallery([4, 3])
            if (!response.status) {
                toastRef.current.show('No has seleccionado ninguna imagen..', 3000)
                return
            }
            setImagesSelected([...imagesSelected, response.image])
        }
    
        const removeImage = (image) => {
            Alert.alert(
                'Eliminar imagen',
                '¿Quieres eliminar la imagen?',
                [
                    {
                       text: 'No',
                       style: 'cancel'
                    },
                    {
                        text: 'Si',
                        onPress: () => {
                            setImagesSelected(
                                filter(imagesSelected, (imageUrl) => imageUrl !== image)
                            )
                        }
                    }
                ],
                { cancelable: false }
            )
        }
    
        return (
            <ScrollView
                horizontal
                style={styles.viewImages}
            >
                {
                    size(imagesSelected) < 7 && (
                        <Icon
                           type='material-community'
                           name='camera'
                           color='#7a7a7a'
                           containerStyle={styles.containerIcon}
                           onPress={imageSelect}
                        />
                    )
                }
                {
                map(imagesSelected, (Imagelegogamer, index) => (
                    <Avatar
                        key={index}
                        style={styles.miniatureStyle}
                        source={{ uri: Imagelegogamer }}
                        onPress={() => removeImage(Imagelegogamer)}
                    />
                ))
                }
            </ScrollView>
        )
    }
    
    function FormAdd({ formData, setFormData, errorName, errorDescription, errorEmail, errorAddress, errorPhone }) {
        const [country, setCountry] = useState('MX')
        const [callingCode, setCallingCode] = useState('52')
        const [phone, setPhone] = useState('')
    
        const onChange = (e, type) => {
            setFormData({ ...formData, [type] : e.nativeEvent.text })
        }
    
        return (
            <View style={styles.viewForm}>
                <Input
                    placeholder='Nombre del local...'
                    defaultValue={formData.name}
                    onChange={(e) => onChange(e, 'name')}
                    errorMessage={errorName}
                />
                <Input
                    placeholder='Direccion...'
                    defaultValue={formData.address}
                    onChange={(e) => onChange(e, 'address')}
                    errorMessage={errorAddress}
                />
                <Input
                    keyboardType='email-address'
                    placeholder='Email de contacto...'
                    defaultValue={formData.email}
                    onChange={(e) => onChange(e, 'email')}
                    errorMessage={errorEmail}
                />
                <View style={styles.phoneView}>
                    <CountryPicker
                        withFlag
                        withCallingCode
                        withFilter
                        withCallingCodeButton
                        containerStyle={styles.countryPicker}
                        countryCode={country}
                        onSelect={(country)=>{
                            setFormData({ 
                                ...formData, 
                                'country': country.cca2, 
                                'callingCode': country.callingCode[0]
                            })
                            setCountry(country.cca2)
                            setCallingCode(country.callingCode[0])
                        }}
                    />
                    <Input
                        placeholder='WhatsApp de contacto...'
                        keyboardType='phone-pad'
                        containerStyle={styles.inputPhone}
                        defaultValue={formData.phone}
                        onChange={(e) => onChange(e, 'phone')}
                        errorMessage={errorPhone}
                    />
                </View> 
                <Input
                    placeholder='Descripción del local...'
                    multiline
                    containerStyle={styles.textArea}
                    defaultValue={formData.description}
                    onChange={(e) => onChange(e, 'description')}
                    errorMessage={errorDescription}
                />              
            </View>
        )
    }
    
    const defaultFormValues = () => {
        return {
            name: '',
            description: '',
            email: '',
            phone: '',
            address: '',
            country: 'MX',
            callingCode: '52'
        }
    }
    
    const styles = StyleSheet.create({
        viewContainer:{
            height: '100%'
        },
        viewForm:{
            marginHorizontal: 10,
            backgroundColor: '#ECEFAF',
            justifyContent: 'center',
            color: 'black'
        },
        textArea:{
            height: 100,
            width: '100%',
        },
        phoneView:{
            width: '80%',
            flexDirection:'row',
        },
        inputPhone:{
            width: '80%'
        },
        btnAddlegogamer:{
            margin: 15,
            backgroundColor: '#040059',
            borderRadius:30
        },
        viewImages:{
            flexDirection: 'row',
            marginHorizontal: 15,
            marginTop: 25
        },
        containerIcon:{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
            height: 70,
            width: 79,
            backgroundColor: '#040059'
        },
        miniatureStyle:{
            width: 70,
            height: 70,
            marginRight: 10,
            
        },
        viewPhoto:{
            alignItems: 'center',
            height: 200,
            marginBottom: 20,
            backgroundColor: '#040059'
        }
    })    