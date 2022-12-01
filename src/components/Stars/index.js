import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import star from '../../assets/star.png'
import starGray from '../../assets/starGray.png'

export default function Stars({
    quantity: oldQuantity,
    updatable = false,
    isBig = false
}) {
    const [quantity, setQuantity] = useState(oldQuantity)

    const styles = stylesFunction(isBig)

    const getImage = (index) => {
        if (index < quantity)
            return star
        return starGray
    }

    const RenderStars = () => {
        const starsList = []
        for (let i = 0; i < 5; i++) {
            starsList.push(
                <TouchableOpacity 
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disabled={!updatable}>

                    <Image source={getImage(i)} style={styles.star}/>
                </TouchableOpacity>
            )
        }

        return starsList
    }

    return <View style={styles.stars}>
        <RenderStars />
    </View>

}

const stylesFunction = (isBig) => StyleSheet.create({
    star: {
        width: isBig ? 36 : 12,
        height: isBig ? 36 : 12,
        marginRight: 2
    },
    stars: {
        flexDirection: 'row'
    }
})