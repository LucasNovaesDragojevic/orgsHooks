import { BOLD_WEIGHT } from 'jest-matcher-utils'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import logo from '../../../../assets/logo.png'

export default function Appbar() {
    return <View style={styles.appbar}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.hellowUser}>Olá mundo!</Text>
            <Text style={styles.wellcomePhrase}>Encontre os melhores produtores</Text>
        </View>
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#f6f6f6',
        padding: 16
    },
    image: {
        width: 70,
        height: 28
    },
    hellowUser: {
        marginTop: 24,
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42
    },
    wellcomePhrase: {
        fontSize: 16,
        lineHeight: 26
    }
})