import React , {useState} from "react";  
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native"; 
import { colors, fonts } from "../../theme";

import StoreItem from "./StoreItem";

function StoreScreen(props) {

    const[courses, setCourses] = useState([
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Khóa học bảng chữ cái",
            detail: "Hiragana + Katakana",
            user : "500",
            video : "20",
            time:"3",
            price : "350,000",
        },
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Khóa học N5",
            detail: "",
            user : "168",
            video : "215",
            time:"8",
            price : "600,000",
        },
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Khóa học N4",
            detail: "Khóa học N4",
            user : "819",
            video : "49",
            time:"12",
            price : "1,000,000",
        },
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Combo khóa học N4 + N5",
            detail: "Khóa học N4 + N5",
            user : "1,650",
            video : "500",
            time:"24",
            price : "1,400,000",
        },
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Khóa học N3",
            detail: "",
            user : "230",
            video : "350",
            time:"12",
            price : "1,800,000",
        },
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Khóa học N2",
            detail: "",
            user : "230",
            video : "350",
            time:"12",
            price : "1,800,000",
        },
        {
            image:"https://images.foody.vn/BlogsContents/46444498_1785582584898023_6834569445101273088_n(1).jpg",
            name: "Khóa học N1",
            detail: "",
            user : "230",
            video : "350",
            time:"12",
            price : "1,800,000",
        },
    ])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={courses}
                renderItem={({item}) => (
                    <StoreItem 
                        image={item.image}
                        title={item.name}
                        detail={item.detail}
                        participants={item.user}
                        video={item.video}
                        time={item.time}
                        price={item.price}
                    />
                )}
            />
        </View>
    );
}

export default StoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bluish
    },
})