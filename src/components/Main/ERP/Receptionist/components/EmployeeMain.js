import React, { Component, PureComponent } from 'react'
import { View, Text, Dimensions, SafeAreaView, ScrollView, Image, } from 'react-native'
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator, createBottomTabNavigator
} from 'react-navigation'

import CustomerFlatList from './CustomerList/CustomerFlatList';
import Header from '../../Header/Header';
import EmployeeMenu from './EmployeeMenu';
import LoginSuccess from '../../drawers/LoginSuccess';
import LoginForm from '../../drawers/LoginForm';
import RegisterForm from '../../drawers/RegisterForm';
import EmployeeFlatList from './EmployeeList/EmployeeFlatList'
import ReceptionistInf from './ReceptionistInf/ReceptionistInf'

export default class Main extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

const width = Dimensions.get('window').width

const AllBottomMain = createStackNavigator(
    {
        Main: CustomerFlatList,
        CustomerFlatList: CustomerFlatList,
        EmployeeFlatList: EmployeeFlatList,
        ReceptionistInf: ReceptionistInf
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
        }, 
        'RegisterForm': {
            screen: RegisterForm,
            navigationOptions: {
                headerTitle: 'Register Form'
            }
        },
        'CustomerFlatList': {
            screen: CustomerFlatList,
            navigationOptions: {
                headerTitle: 'CustomerFlatList'
            }
        },
        'EmployeeFlatList': {
            screen: EmployeeFlatList,
            navigationOptions: {
                headerTitle: 'EmployeeFlatList'
            }
        },
        'ReceptionistInf': {
            screen: EmployeeFlatList,
            navigationOptions: {
                headerTitle: 'ReceptionistInf'
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