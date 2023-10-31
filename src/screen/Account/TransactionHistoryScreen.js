import React , {useState} from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { colors, fonts } from "../../theme";

const screenWidth = Dimensions.get('window').width;

const data = [
    ['STT', 'Mã đơn hàng', 'Tên', 'Mô tả', 'Thời hạn', 'Giá', 'Ngày đặt mua', 'Trạng thái'],
    ['1', '415826', 'Khóa học N5', 'Khóa học N5', '6 tháng', '299,000', '21/7/2020', 'Chờ thanh toán'],
    ['2', '415827', 'Khóa học N4', 'Khóa học N4', '6 tháng', '299,000', '21/7/2020', 'Chờ thanh toán'],
    ['3', '415828', 'Khóa học N3', 'Khóa học N3', '6 tháng', '299,000', '21/7/2020', 'Đã mua'],
    ['4', '415829', 'Khóa học N2', 'Khóa học N3', '6 tháng', '299,000', '21/7/2020', 'Hủy'],
    ['5', '415830', 'Khóa học N1', 'Khóa học N1', '6 tháng', '299,000', '22/7/2020', 'Đã mua'],
    ['6', '415831', 'Khóa học N5', 'Khóa học N5', '6 tháng', '299,000', '23/7/2020', 'Chờ thanh toán'],
    ['7', '415832', 'Khóa học N4', 'Khóa học N4', '6 tháng', '299,000', '23/7/2020', 'Đã mua'],
    ['8', '415833', 'Khóa học N3', 'Khóa học N3', '6 tháng', '299,000', '24/7/2020', 'Hủy'],
    ['9', '415834', 'Khóa học N2', 'Khóa học N2', '6 tháng', '299,000', '24/7/2020', 'Đã mua'],
    ['10', '415835', 'Khóa học N1', 'Khóa học N1', '6 tháng', '299,000', '25/7/2020', 'Đã mua'],
    ['11', '415836', 'Khóa học N5', 'Khóa học N5', '6 tháng', '299,000', '25/7/2020', 'Chờ thanh toán'],
    ['12', '415837', 'Khóa học N4', 'Khóa học N4', '6 tháng', '299,000', '26/7/2020', 'Đã mua'],
];

function TransactionHistoryScreen() {
    const [tableData, setTableData] = useState(data.slice(1));

    const handleStatusPress = (rowData, rowIndex) => {
        const status = rowData[rowIndex];
        if (status === 'Chờ thanh toán') {
            alert('Chờ thanh toán đã được chọn.');
            const newTableData = [...tableData];
            newTableData[rowIndex][7] = 'Chờ thanh toán';
            setTableData(newTableData);
        }
    };

    const renderStatusColumn = (rowData, rowKey, rowIndex) => {
        const columnHeader = data[0][rowIndex];
        let textColor = null;
        if (columnHeader === 'Trạng thái') {
            if (rowData[rowIndex] === 'Chờ thanh toán') {
                textColor = 'blue';
            } else if (rowData[rowIndex] === 'Đã mua') {
                textColor = 'green';
            } else if (rowData[rowIndex] === 'Hủy') {
                textColor = 'red';
            }
        
            const textStyle = textColor ? { color: textColor } : {};
    
            return (
                <Text style={[styles.text, {...textStyle}]}>
                    <TouchableOpacity onPress={() => handleStatusPress(rowData, rowIndex)}>
                        <Text>{rowData[rowIndex] ? rowData[rowIndex] : colors.primary}</Text>
                    </TouchableOpacity>
                </Text>
            );
        } else {
            return <Text style={styles.text}>{rowData[rowIndex] ? rowData[rowIndex] : '-'}</Text>;
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView horizontal
            >
                <View style={styles.container}>
                    <ScrollView>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                            <Row
                                data={data[0]}
                                style={styles.head}
                                textStyle={styles.textHead}
                                widthArr={[50, 150, 150, 150, 100, 100, 150, 150]}
                            />
                        </Table>
                        <ScrollView horizontal>
                            <ScrollView style={styles.dataWrapper}>
                                <Table borderStyle={ styles.table}>
                                    <Rows
                                        data={tableData}
                                        widthArr={[50, 150, 150, 150, 100, 100, 150, 150]}
                                        textStyle={styles.text}
                                        renderCell={renderStatusColumn}
                                    />
                                </Table>
                            </ScrollView>
                        </ScrollView>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: colors.white,
    },
    head: {
        height: 50,
        backgroundColor: colors.grey,
    },
    textHead: {
        margin: 6,
        fontSize: fonts.h5,
        alignSelf: 'center',
        color: colors.gray,
        fontWeight: 'bold',
    },
    
    text: {
        margin: 6,
        fontSize: fonts.h5,
        alignSelf: 'center',
        color: colors.gray,
    },
    table :{
        borderWidth: 2,
        borderColor: '#C1C0B9'
    },
    dataWrapper: {
        marginTop: -1
    },
    highlight: {
        textDecorationLine: 'underline',
        color: 'blue'
    }
});

export default TransactionHistoryScreen;