import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

import { loadProducers } from '../../../../services/loadData'

export default function Producer({appbar: Appbar}) {

    const [title, setTitle] = useState('')
    const [list, setList] = useState([])
    
    useEffect(() => {
        const producersLoaded = loadProducers()
        setTitle(producersLoaded.title)
        setList(producersLoaded.producers)
        console.log(producersLoaded)
    }, [])

    const listHeader = () => {
        return <>
            <Appbar/>
            <Text style={styles.title}>{title}</Text> 
        </>
    }
    
    return <FlatList
                data={list}
                renderItem={({item: {name}}) => <Text>{name}</Text>}
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