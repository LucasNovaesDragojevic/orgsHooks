import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import { loadProducers } from '../../../../services/loadData'
import Producer from '../Producer'

export default function Producers({appbar: Appbar}) {

    const [title, setTitle] = useState('')
    const [list, setList] = useState([])
    
    useEffect(() => {
        const producersLoaded = loadProducers()
        setTitle(producersLoaded.title)
        setList(producersLoaded.producers)
    }, [])

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