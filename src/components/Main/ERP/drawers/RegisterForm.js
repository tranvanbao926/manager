import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
const widhtPassUser = Dimensions.get('window').width - heightScreen * 0.25 * 0.75
export default class RegisterForm extends Component {
    render() {

        const { navigate } = this.props.navigation
        
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}>
                    <Image style={{
                        flex: 1,
                        width: null,
                        height: null
                    }}
                        source={require('../Header/images/background.png')}
                    >
                    </Image>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: heightScreen * 0.15, marginBottom: 5 }}>
                    <Text style={{ fontSize: 32, fontFamily: 'Cochin', fontWeight: 'bold', color: '#696969' }}> Register </Text>
                </View>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: heightScreen * 0.25, marginTop: heightScreen * 0.15 }}>
                    <View style={{}}>
                        <View style={{ marginLeft: 15, alignItems: 'center', flexDirection: 'row', height: heightScreen * 0.18 * 0.5 }}>
                            <Image style={{ height: heightScreen * 0.2 * 0.25, width: heightScreen * 0.2 * 0.25 }}
                                source={require('../Header/images/admin.png')}
                            ></Image>
                            <TextInput style={{ paddingLeft: 10, fontSize: 18, width: widhtPassUser }}
                                placeholder='Username'
                            ></TextInput>
                        </View>
                        <View style={{ height: 1, width: widhtPassUser * 1.125, borderWidth: 1, marginLeft: 15, borderColor: 'gray' }}></View>
                        <View style={{ marginLeft: 15, alignItems: 'center', flexDirection: 'row', height: heightScreen * 0.18 * 0.5 }}>
                            <Image style={{ height: heightScreen * 0.2 * 0.25, width: heightScreen * 0.2 * 0.25 }}
                                source={require('../Header/images/password.png')}
                            ></Image>
                            <TextInput style={{ paddingLeft: 10, fontSize: 18, width: widhtPassUser }}
                                placeholder='Password' secureTextEntry={true}
                            ></TextInput>
                        </View>
                        <View style={{ height: 1, width: widhtPassUser * 1.125, borderWidth: 1, marginLeft: 15, borderColor: 'gray' }}></View>
                        <View style={{ marginLeft: 15, alignItems: 'center', flexDirection: 'row', height: heightScreen * 0.18 * 0.5 }}>
                            <Image style={{ height: heightScreen * 0.2 * 0.25, width: heightScreen * 0.2 * 0.25 }}
                                source={require('../Header/images/email.png')}
                            ></Image>
                            <TextInput style={{ paddingLeft: 10, fontSize: 18, width: widhtPassUser }}
                                placeholder='Password'
                            ></TextInput>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {
                        alert('Welcome Shop AnhDoto')
                        setTimeout(()=>{
                            navigate('Dashboard')
                        },2000);

                    }}>
                        <Image style={{
                            height: heightScreen * 0.16 * 0.5,
                            width: heightScreen * 0.16 * 0.5,
                            borderRadius: heightScreen * 0.16 * 0.5,
                            marginLeft: 5,
                            marginRight: 5
                        }}
                            source={require('../Header/images/OK.png')}
                        ></Image>
                    </TouchableOpacity>
                </View>


                <TouchableOpacity onPress={() => {
                    navigate('LoginForm')
                }}>
                    <Text style={{ margin: 15, marginTop: heightScreen * 0.1, fontSize: 28, fontWeight: 'bold', color: '#ffa07a' }}>
                        Login
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


