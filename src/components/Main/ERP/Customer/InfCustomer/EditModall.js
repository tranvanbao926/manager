/*
Mr Nguyen Duc Hoang
https://www.youtube.com/c/nguyenduchoang
Email: sunlight4d@gmail.com
FlatList Component with Images
This Modal Component shows Food's information adding to FlatList
*/
import React, { Component } from 'react';
import {
    Platform, TouchableHighlight, Dimensions,
    ScrollView, Text
} from 'react-native';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');
export default class EditModall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FoodName: '',
            FoodDescription: ''
        };
    }
    showEditModall = () => {
        this.refs.myModall.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal
                ref={"myModall"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <ScrollView nestedScrollEnabled={true}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40
                    }}>Service information</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 20,
                            marginBottom: 10,
                            borderBottomWidth: 1
                        }}
                    >Gói dịch vụ: </Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Thuộc cơ sở: </Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Ngày mua</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Nhân viên tư Vấn</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Ngày mua</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Giá bán</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Giá trị sau khuyến mại: </Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Nhân viên làm thao tác trị liệu</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Thời gian bắt đầu/ Kết thúc</Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Tiền một lần trị liệu: </Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Đã trả: </Text>
                    <Text
                        style={{
                            height: 40,
                            borderBottomColor: 'gray',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop: 10,
                            marginBottom: 20,
                            borderBottomWidth: 1
                        }}
                    >Còn nợ: </Text>
                    
                </ScrollView>
            </Modal>
        );
    }
}