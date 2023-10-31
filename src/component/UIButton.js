import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { colors, fonts } from '../theme'
function UIButton(props) {
    const {
        display,
        onPress,
        title,
        borderWidth,
        height,
        borderRadius,
        marginHorizontal,
        marginVertical,
        justifyContent,
        alignItems,
        backgroundColor,
        borderColor,
        textColor,
        fontSize,
        fontWeight,
        width,
    } = props
    return (
        <TouchableOpacity
            disabled={display}
            onPress={onPress}
            style={
                [
                   {borderWidth: borderWidth},
                   {width: width},
                   {height: height},
                   {borderRadius: borderRadius},
                   {marginHorizontal: marginHorizontal},
                   {marginVertical: marginVertical},
                   {justifyContent: justifyContent},
                   {alignItems: alignItems},
                   {backgroundColor: backgroundColor},
                   {borderColor: borderColor},       
                              
                ]
            }>
            <Text style={[
                {fontSize: fontSize},
                {fontWeight: fontWeight},
                {color: textColor},
            ]}>{title}</Text>

        </TouchableOpacity>
    )
}

export default UIButton