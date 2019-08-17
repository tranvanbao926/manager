import React, { Component, PureComponent } from 'react'
import { View, Text, Dimensions, SafeAreaView, ScrollView, Image, } from 'react-native'
import {
    createAppContainer,
    createDrawerNavigator,
    createMaterialTopTabNavigator,
    createStackNavigator, DrawerItems, DrawerView, createBottomTabNavigator
} from 'react-navigation'

import Header from '../Header/Header';
import EmployeeMenu from './EmployeeMenu';
import LoginSuccess from '../drawers/LoginSuccess';
import LoginForm from '../drawers/LoginForm';
import RegisterForm from '../drawers/RegisterForm';

export default class Main extends Component {

    render() {
        return (
            <AppContainer />
        );
    }
}

class screen1 extends Component {
    render() {
        return (
            <Text>asdasd</Text>
        )
    }
}
class screen2 extends Component {
    render() {
        return (
            <Text>asdasd</Text>
        )
    }
}
class screen3 extends Component {
    render() {
        return (
            <Text>asdasd</Text>
        )
    }
}

const width = Dimensions.get('window').width

const BottomNavigation = createBottomTabNavigator(
    {
        'Thông tin': screen1,
        'Hợp đồng': screen2,
        'Chấm công': screen3,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Thông tin') {
                    iconName = require('../header/images/home.png')
                } else if (routeName === 'Hợp đồng') {
                    iconName = require('../header/images/cart.png')
                } else if (routeName == 'Chấm công') {
                    iconName = require('../header/images/search.png')
                }

                return <Image source={iconName} style={{ height: 30, width: 30 }} tintColor={tintColor} />
            },
        })
    }
    , {
        tabBarOptions:
        {
            scrollEnabled: true,
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                width: width / 4,
            },
            style: {
                backgroundColor: 'white',
            },
        }
    }
)
const AllBottomMain = createStackNavigator(
    {
        Main: BottomNavigation
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            header: () => <Header navigation={navigation} />
        }),
    }
)

const LeftHandSlider = createDrawerNavigator(
    {
        'Dashboard': AllBottomMain,

        'LoginForm': {
            screen: LoginForm,
            navigationOptions: {
                headerTitle: 'Login Form'
            }
        }, 'RegisterForm': {
            screen: RegisterForm,
            navigationOptions: {
                headerTitle: 'Register Form'
            }
        },

    },
    {
        contentComponent: props => {
            const x = false
            if (x) {
                return (
                    <LoginSuccess {...props} navigation={navigation} />
                )
            } else {
                return (
                    <EmployeeMenu {...props} />
                )
            }
        }
    }
)

const AppContainer = createAppContainer(LeftHandSlider)