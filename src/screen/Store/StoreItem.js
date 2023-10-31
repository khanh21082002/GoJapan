import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, fonts } from "../../theme";
import { UIButton } from "../../component";

function StoreItem(props) {
    const { image, title, detail, participants, video, time, price } = props
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={styles.title} >{title}</Text>
                <Text style={styles.detail}>{detail}</Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , marginHorizontal: 20 }}>
                    <Icon name={"user"} size={15} color={colors.black} style={styles.icon} />
                    <Text style={styles.icon}>{participants}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , marginHorizontal: 20 }}>
                    <Icon name={"play"} size={15} color={colors.black} style={styles.icon} />
                    <Text style={styles.icon}>{video} video</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' , marginHorizontal: 20 }}>
                    <Icon name={"calendar"} size={15} color={colors.black} style={styles.icon} />
                    <Text style={styles.icon}>{time} tháng</Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.price}>{price} ₫</Text>
            </View>

            <UIButton
                onPress={() => { }}
                title="MUA NGAY"
                borderWidth={1}
                height={45}
                borderRadius={5}
                marginHorizontal={20}
                marginVertical={10}
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.primaryButton}
                textColor={colors.white}
                fontSize={fonts.h4}
                fontWeight="bold"
            />

        </View>
    );
}
export default StoreItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: 15
    },

    image: {
        height: 200,
        borderRadius: 10,
        margin: 20
    },

    title: {
        fontSize: fonts.h2,
        fontWeight: 'bold',
        color: colors.black,
        margin: 5
    },

    detail: {
        fontSize: fonts.h6,
        color: colors.black,
        margin: 10
    },

    icon :{
        fontSize: fonts.h5,
        color: colors.grey,
        margin: 2
    },

    price: {
        fontSize: fonts.h2,
        fontWeight: 'bold',
        color: colors.secondary,
        margin: 15
    }


})