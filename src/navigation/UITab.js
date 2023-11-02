import React from "react";
import { StoreScreen, AccountScreen, TrannsactionHistoryScreen } from '../screen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from "../theme";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, StyleSheet } from "react-native";
import TransactionHistoryScreen from "../screen/Account/TransactionHistoryScreen";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({

    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    marginBottom: 10,

    tabBarActiveBackgroundColor: colors.white,
    tabBarInactiveBackgroundColor: colors.white,

    tabBarIcon: ({ focused }) => {
        let screenName = route.name;
        const iconName =
            (screenName == 'Cửa hàng' ? 'credit-card' :
                (screenName == 'Tài khoản' ? 'user' : ''))

        return <Icon
            name={iconName}
            size={20}
            color={focused ? colors.primary : colors.grey} />
            
    },
    
})

const customTabBarIcon = (imageSource, tintColor) => (
    <Image
        source={{ uri: imageSource }}
        style={styles.imgtab}        
    />
);

function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Cửa hàng" component={StoreScreen} />
        <Tab.Screen
                name="Home"
                component={TransactionHistoryScreen}
                options={{
                    tabBarIcon: ({ focused }) =>
                        customTabBarIcon(
                            'https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg',
                            focused ? colors.primary : colors.grey
                        ),
                    tabBarLabel: '',    
                }}
            />
        <Tab.Screen name="Tài khoản" component={AccountScreen} />
        
    </Tab.Navigator>
}

export default UITab

const styles = StyleSheet.create({
    imgtab: {
        width: 60,
        height: 60,
        marginBottom: 20,
        borderRadius: 30
    }
})