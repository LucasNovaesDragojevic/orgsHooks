import React, { useMemo, useReducer } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Stars from '../../../../components/Stars'

export default function Producer({name, image, distance, stars}) {

    const [selected, invertSelected] = useReducer(
        (selected) => !selected,
        false
    )

    const distanceInMeters = () => {
        return `${distance}m`
    }

    const distanceInText = useMemo(
        () => distanceInMeters(distance), 
        [distance]
    )

    return <TouchableOpacity 
                style={styles.card}
                onPress={invertSelected}>
            <Image source={image} style={styles.image} accessibilityLabel={name}/>
            <View style={styles.info}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Stars 
                        quantity={stars}
                        updatable={selected}
                        isBig={selected}/>
                </View>
                <Text style={styles.distance}>{distanceInText}</Text>
            </View>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        // Android
        elevation: 4,
        // IOS
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22
    },
    distance: {
        fontSize: 12,
        lineHeight: 19
    }
})