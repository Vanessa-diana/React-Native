import React from 'react';
import { View, StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native'
import LoadingAnimation from '../assets/load.json'

export function Loading({ }){
    return(
        <View style={styles.container}>
            <LottieView 
                source={LoadingAnimation} 
                autoPlay 
                loop 
                style={styles.animation}/>
        </View>
    )   
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    animation:{
       backgroundColor:'transparent',
       width:200,
       height:200
    }

});