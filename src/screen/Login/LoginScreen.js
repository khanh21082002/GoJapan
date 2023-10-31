import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, TextInput, Animated, Easing, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../theme";
import UIButton from "../../component/UIButton";
import Icon from 'react-native-vector-icons/FontAwesome5';


function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [onFocusEmail, setOnFocusEmail] = useState(colors.gray);
    const [onFocusPassword, setOnFocusPassword] = useState(colors.gray);

    const [onFocusEmailColor, setOnFocusEmailColor] = useState(colors.gray);
    const [onFocusPasswordColor, setOnFocusPasswordColor] = useState(colors.gray);

    const [onFocusEmailText, setOnFocusEmailText] = useState(false);
    const [onFocusPasswordText, setOnFocusPasswordText] = useState(false);




    const emailTranslateY = useRef(new Animated.Value(0)).current;
    const passwordTranslateY = useRef(new Animated.Value(0)).current;
    const [isPasswordHidden, setIsPasswordHidden] = useState(false);

    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
    };

    const onFocusHandlerEmail = () => {
        setOnFocusEmail(colors.primary);
        setOnFocusEmailColor(colors.primary);
        setOnFocusEmailText(!!email);
        !email &&
        Animated.spring(emailTranslateY, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

    };

    const onBlurEmail = () => {
        setOnFocusEmail(colors.gray);
        setOnFocusEmailColor(colors.gray);
        !email &&
        Animated.spring(emailTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const onFocusHandlerPassword = () => {
        setOnFocusPassword(colors.primary);
        setOnFocusPasswordColor(colors.primary);
        setOnFocusPasswordText(!!password);
        !password &&
        Animated.spring(passwordTranslateY, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const onBlurPassword = () => {
        setOnFocusPassword(colors.gray);
        setOnFocusPasswordColor(colors.gray);
        !password &&
        Animated.spring(passwordTranslateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };



    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image
                    source={require('./../../../assets/img/Logo.png')}
                    resizeMode="cover"
                />
            </View>
            <View style={[styles.input, { borderColor: onFocusEmail}]}>
                <Animated.View style={[styles.placeholderContainer, { transform: [{ translateY: emailTranslateY.interpolate({ inputRange: [0, 1], outputRange: [0, -30] }) }, { scale: emailTranslateY.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) }] }]}>
                    <Text style={[styles.placeholder, onFocusEmailText , { color: onFocusEmailColor}]}>Tên đăng nhập hoặc email</Text>
                </Animated.View>
                <TextInput
                    style={styles.inputWithValue}
                    placeholder=""
                    onChangeText={onChangeEmail}
                    placeholderTextColor={colors.gray}
                    value={email}
                    onFocus={onFocusHandlerEmail}  
                    onBlur={onBlurEmail}
                />
            </View>
            <View style={[styles.input, { borderColor: onFocusPassword }]}>
                <Animated.View style={[styles.placeholderContainer, { transform: [{ translateY: passwordTranslateY.interpolate({ inputRange: [0, 1], outputRange: [0, -30] }) }, { scale: passwordTranslateY.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) }] }]}>
                    <Text style={[styles.placeholder, onFocusPasswordText , { color: onFocusPasswordColor }]}>Mật khẩu</Text>
                </Animated.View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 25}}>
                    <TextInput
                        style={styles.inputWithValue}
                        placeholder=""
                        onChangeText={onChangePassword}
                        secureTextEntry={isPasswordHidden ? true : false}
                        placeholderTextColor={colors.gray}
                        value={password}
                        onFocus={onFocusHandlerPassword}
                        onBlur={onBlurPassword}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
                        <Icon
                            name={isPasswordHidden ? 'eye-slash' : 'eye'}
                            size={20} color={colors.primary}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <UIButton
                onPress={() => { }}
                title="ĐĂNG NHẬP"
                borderWidth={1}
                height={45}
                borderRadius={5}
                marginHorizontal={10}
                marginVertical={5}
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.primary}
                borderColor={colors.primaryButton}
                textColor={colors.white}
                fontSize={fonts.h5}
                fontWeight="bold"
            />
            <UIButton
                onPress={() => { }}
                title="ĐĂNG KÝ TÀI KHOẢN"
                borderWidth={1}
                height={45}
                borderRadius={5}
                marginHorizontal={10}
                marginVertical={5}
                justifyContent="center"
                alignItems="center"
                backgroundColor={colors.white}
                borderColor={colors.white}
                textColor={colors.primary}
                fontSize={fonts.h5}
                fontWeight="bold"
            />
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: colors.white
    },
    img: {
        marginTop: 50,
        marginBottom: 30,
        alignItems: 'center',
    },
    placeholderContainer: {
        backgroundColor: colors.white,
        position: 'absolute',
        margin: 10,
        padding: 10,

    },
    input: {
        justifyContent: 'center',
        height: 60,
        width: 370,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        borderColor: colors.gray
    },
    inputWithValue: {
        fontSize: fonts.h5,
        width: "100%",
        color: colors.primary
    },
    placeholder: {
        fontSize: fonts.h5,       
    },
    icon: {
        marginRight: 60,
        padding: 5,
    }
});
