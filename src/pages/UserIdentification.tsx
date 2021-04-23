import { useNavigation } from '@react-navigation/core';
import React,{ useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from '../assets/components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


export function UserIdentification() {
const [focus, isFocus] = useState(false);
const [ isFilled, setIsFilled ] = useState(false);
const [ name, setName] = useState<string>()

const navigation = useNavigation();

function handleSubmit(){
    navigation.navigate("Confirmation");
}

    function handleInputBlur(){
        isFocus(false);
        setIsFilled(!!name)
    }

    function handleInputFocus(){
        isFocus(true)
    }

    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS==='ios'?'padding':'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                { isFilled ? '😃':'😄'}
                            </Text>
                            <Text style={styles.title}>
                                Como podemos{'\n'}
                                chamar você?
                            </Text>
                        </View>
                        <TextInput 
                            style={[styles.input, ( focus || isFilled) && {borderColor:colors.green}]} 
                            placeholder="Digite um nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />
                        <View style={styles.footer}>
                            <Button title='Confirmar' onPress={handleSubmit} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'

    },

    content: {
        flex: 1,
        width: '100%',
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 56,
        alignItems: 'center',
      
    },

    header:{
        alignItems:'center'
    },

    emoji: {
        fontSize: 44
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
        width: '100%'

    },

    title: {
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.heading,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    },

    footer: {
        width:'100%',
        marginTop:40,
        paddingHorizontal:20

    }
});