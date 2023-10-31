import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { UIButton } from "../../component";
import { colors, fonts } from "../../theme";


function AccountScreen(props) {
    const [name, setName] = useState("thuong");
    return (
        <View style={styles.container}>
            <Image  source={{uri: "https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg"}} style={styles.image}/>
            <Text style={styles.name}>{name}</Text>
            <UIButton
                onPress={() => { }}
                title="QUẢN LÝ TÀI KHOẢN"
                borderWidth={1}
                height={45}
                borderRadius={5}
                marginHorizontal={50}
                marginVertical={5}
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.primaryButton}
                borderColor={colors.primaryButton}
                textColor={colors.white}
                fontSize={fonts.h4}
                fontWeight="bold"
            />
            <UIButton
                onPress={() => { }}
                title="LỊCH SỬ GIAO DỊCH"
                borderWidth={1}
                height={45}
                borderRadius={5}
                marginHorizontal={50}
                marginVertical={5}
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.white}
                borderColor={colors.primaryButton}
                textColor={colors.primaryButton}
                fontSize={fonts.h4}
                fontWeight="bold"
            />
            <UIButton
                onPress={() => { }}
                title="ĐĂNG XUẤT"
                borderWidth={1}
                height={45}
                borderRadius={5}
                marginHorizontal={50}
                marginVertical={5}
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.white}
                borderColor={colors.secondary}
                textColor={colors.secondary}
                fontSize={fonts.h4}
                fontWeight="bold"
            />
        </View>
    );
}
export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: "50%"
    },

    image: {
        width: 110,
        height: 110,
        resizeMode: 'cover',
        borderRadius: 55,
        marginRight: 15,
        alignSelf: 'center',
        marginBottom: 25,
        borderWidth: 5,
        borderColor: colors.lightGray
    },

    name:{
        fontSize: fonts.h4,
        fontWeight: 'bold',
        color: colors.lightGray,
        alignSelf: 'center'
    }





})