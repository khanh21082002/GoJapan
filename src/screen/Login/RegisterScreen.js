import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput, Animated, Easing, TouchableOpacity, Keyboard, ScrollView } from "react-native";
import { colors, fonts } from "../../theme";
import UIButton from "../../component/UIButton";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { isValiatePassword, isValidationPhone } from "../../utilies/Validation";


function RegisterScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phone, setPhone] = useState("");


    const [onFocusEmail, setOnFocusEmail] = useState(colors.gray);
    const [onFocusPassword, setOnFocusPassword] = useState(colors.gray);
    const [onFocusRePassword, setOnFocusRePassword] = useState(colors.gray);
    const [onFocusPhone, setOnFocusPhone] = useState(colors.gray);

    const [onFocusEmailColor, setOnFocusEmailColor] = useState(colors.gray);
    const [onFocusPasswordColor, setOnFocusPasswordColor] = useState(colors.gray);
    const [onFocusRePasswordColor, setOnFocusRePasswordColor] = useState(colors.gray);
    const [onFocusPhoneColor, setOnFocusPhoneColor] = useState(colors.gray);

    const [onFocusEmailText, setOnFocusEmailText] = useState(false);
    const [onFocusPasswordText, setOnFocusPasswordText] = useState(false);
    const [onFocusRePasswordText, setOnFocusRePasswordText] = useState(false);
    const [onFocusPhoneText, setOnFocusPhoneText] = useState(false);


    const emailTranslateY = useRef(new Animated.Value(0)).current;
    const passwordTranslateY = useRef(new Animated.Value(0)).current;
    const rePasswordTranslateY = useRef(new Animated.Value(0)).current;
    const phoneTranslateY = useRef(new Animated.Value(0)).current;

    const [isPasswordHidden, setIsPasswordHidden] = useState(false);
    const [isRePasswordHidden, setIsRePasswordHidden] = useState(false);
    const [isKeyboardShow, setIsKeyboardShow] = useState(false);

    const [errorPassword, setErrorPassword] = useState('');
    const [errorRePassword, setErrorRePassword] = useState('');
    const [errorPhone, setErrorPhone] = useState('');

    const onChangeEmail = (text) => {
        setEmail(text);
    };

    const onChangePassword = (text) => {
        setPassword(text);
        setErrorPassword(isValiatePassword(text) == true ? '' : 'Invalid Password')
        setErrorRePassword(text === rePassword ? "" : "Mật khẩu không giống nhau");
    };

    const onChangeRePassword = (text) => {
        setRePassword(text);
        setErrorRePassword(isValiatePassword(text) == true ? '' : 'Invalid Password')
        setErrorRePassword(text === password ? "" : "Mật khẩu không giống nhau");
    };

    const onChangePhone = (text) => {
        setPhone(text);
        setErrorPhone(isValidationPhone(text) == true ? '' : 'Invalid Password')
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

    const onFocusHandlerRePassword = () => {
        setOnFocusRePassword(colors.primary);
        setOnFocusRePasswordColor(colors.primary);
        setOnFocusRePasswordText(!!rePassword);
        !rePassword &&
            Animated.spring(rePasswordTranslateY, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
    };

    const onBlurRePassword = () => {
        setOnFocusRePassword(colors.gray);
        setOnFocusRePasswordColor(colors.gray);
        !password &&
            Animated.spring(rePasswordTranslateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
    };

    const onFocusHandlerPhone = () => {
        setOnFocusPhone(colors.primary);
        setOnFocusPhoneColor(colors.primary);
        setOnFocusPhoneText(!!phone);
        !phone &&
            Animated.spring(phoneTranslateY, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
    };

    const onBlurPhone = () => {
        setOnFocusPhone(colors.gray);
        setOnFocusPhoneColor(colors.gray);
        !phone &&
            Animated.spring(phoneTranslateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
    };

    Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true));
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false));



    const isValidationOk = () =>
        email.length > 0 &&
        phone.length > 0 &&
        password.length > 0 &&
        isValiatePassword(password) == true &&
        isValidationPhone(phone) == true &&
        password == rePassword


    useEffect(() => {
        setErrorRePassword(password === rePassword ? "" : "Mật khẩu không giống nhau");
        setRePassword(rePassword);
    }, [password, rePassword]);


    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.img}>
                    <Image
                        source={require('./../../../assets/img/Logo.png')}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={[styles.input, { borderColor: onFocusEmail }]}>
                        <Animated.View style={[styles.placeholderContainer, { transform: [{ translateY: emailTranslateY.interpolate({ inputRange: [0, 1], outputRange: [0, -30] }) }, { scale: emailTranslateY.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) }] }]}>
                            <Text style={[styles.placeholder, onFocusEmailText, { color: onFocusEmailColor }]}>Tên đăng nhập hoặc email</Text>
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
                            <Text style={[styles.placeholder, onFocusPasswordText, { color: onFocusPasswordColor }]}>Mật khẩu</Text>
                        </Animated.View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 25 }}>
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
                    <View style={[styles.input, { borderColor: errorRePassword ? colors.incorrect : onFocusRePassword }]}>
                        <Animated.View style={[styles.placeholderContainer, { transform: [{ translateY: rePasswordTranslateY.interpolate({ inputRange: [0, 1], outputRange: [0, -30] }) }, { scale: rePasswordTranslateY.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) }] }]}>
                            <Text style={[styles.placeholder, onFocusRePasswordText, { color: errorRePassword ? colors.incorrect : onFocusRePasswordColor }]}>Nhập lại mật khẩu</Text>
                        </Animated.View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 25 }}>
                            <TextInput
                                style={styles.inputWithValue}
                                placeholder=""
                                onChangeText={onChangeRePassword}
                                secureTextEntry={isRePasswordHidden ? true : false}
                                placeholderTextColor={colors.gray}
                                value={rePassword}
                                onFocus={onFocusHandlerRePassword}
                                onBlur={onBlurRePassword}
                            />
                            <TouchableOpacity onPress={() => setIsRePasswordHidden(!isRePasswordHidden)}>
                                <Icon
                                    name={isRePasswordHidden ? 'eye-slash' : 'eye'}
                                    size={20} color={colors.primary}
                                    style={styles.icon}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={[styles.input, { borderColor: onFocusPhone }]}>
                        <Animated.View style={[styles.placeholderContainer, { transform: [{ translateY: phoneTranslateY.interpolate({ inputRange: [0, 1], outputRange: [0, -30] }) }, { scale: phoneTranslateY.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) }] }]}>
                            <Text style={[styles.placeholder, onFocusPhoneText, { color: onFocusPhoneColor }]}>Số điện thoại</Text>
                        </Animated.View>
                        <TextInput
                            style={styles.inputWithValue}
                            placeholder=""
                            onChangeText={onChangePhone}
                            placeholderTextColor={colors.gray}
                            value={phone}
                            onFocus={onFocusHandlerPhone}
                            onBlur={onBlurPhone}
                            keyboardType="numeric"
                        />
                    </View>

                    {errorRePassword ? <View style={styles.notification}><Text style={styles.notificationText} >{errorRePassword}</Text></View> : null}

                    <UIButton
                        display={isValidationOk() ? false : true}
                        onPress={() => { }}
                        title="ĐĂNG KÝ"
                        borderWidth={1}
                        width={"100%"}
                        height={45}
                        borderRadius={5}
                        marginHorizontal={10}
                        marginVertical={30}
                        justifyContent="center"
                        alignItems="center"
                        backgroundColor={isValidationOk() ? colors.primary : colors.grey}
                        borderColor={colors.white}
                        textColor={colors.white}
                        fontSize={fonts.h5}
                        fontWeight="bold"
                    />
                </View>
            </ScrollView>
        </View>
    );
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
    inputContainer: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 30,
        // paddingRight: 30,
        // paddingLeft: 30
    },
    input: {       
        justifyContent: 'center',
        height: 60,
        width: "100%",
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
    },
    notification: {
        alignItems: 'center',
    },
    notificationText: {
        color: colors.incorrect,
        fontSize: fonts.h5,
    }


});
