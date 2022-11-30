import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { loadAppbar } from '../../../../services/loadData'

import logo from '../../../../assets/logo.png'

export default class Appbar extends React.Component {

    state = {
        appbarState: {
            hellowUser: '',
            wellcomePhrase: ''
        }
    }

    mountAppbar() {
        const appbarLoaded = loadAppbar()
        this.setState({appbarState: appbarLoaded})
    }
    
    componentDidMount() {
        this.mountAppbar()
    }
    
    render() {
        return <View style={styles.appbar}>
                <Image source={logo} style={styles.image}/>
                <Text style={styles.hellowUser}>{this.state.appbarState.hellowUser}</Text>
                <Text style={styles.wellcomePhrase}>{this.state.appbarState.wellcomePhrase}</Text>
            </View>
    }
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
        lineHeight: 42,
        color: '#464646'
    },
    wellcomePhrase: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    }
})