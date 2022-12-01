import React from "react"
import { Image, StyleSheet, TouchableOpacity } from "react-native"
import star from '../../assets/star.png'
import starGray from '../../assets/starGray.png'

export default function Star({
    onPress, 
    enable = false,
    fill,
    isBig = false
}) {
    
    const styles = stylesFunction(isBig)

    const getImage = () => {
        if (fill)
            return star
        return starGray
    }

    return <TouchableOpacity 
                onPress={onPress}
                disabled={enable}>
                <Image source={getImage()} style={styles.star}/>
            </TouchableOpacity>
}


const stylesFunction = (isBig) => StyleSheet.create({
    star: {
        width: isBig ? 36 : 12,
        height: isBig ? 36 : 12,
        marginRight: 2
    }
})