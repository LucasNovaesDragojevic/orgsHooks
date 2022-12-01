import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import useProducers from '../../../../hooks/useProducers'
import Producer from '../Producer'

export default function Producers({appbar: Appbar}) {

    const [title, list] = useProducers()

    const listHeader = () => {
        return <>
            <Appbar/>
            <Text style={styles.title}>{title}</Text> 
        </>
    }
    
    return <FlatList
                data={list}
                renderItem={({item}) => <Producer {...item}/>}
                keyExtractor={({name}) => name}
                ListHeaderComponent={listHeader}/>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        color: '#464646'
    }
})