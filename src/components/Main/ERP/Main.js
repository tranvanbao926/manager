import React, { Component, PureComponent } from "react";
import { Dimensions } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import InfCustomer from "./Customer/InfCustomer/InfCustomer";
import Header from "./Header/Header";
import Menu from "./Menu";
import LoginSuccess from "./drawers/LoginSuccess";
import LoginForm from "./drawers/LoginForm";
import RegisterForm from "./drawers/RegisterForm";
import ServiceCustomer from "./Customer/ServiceCustomer/ServiceCustomer";
import EditModal from "./Customer/ServiceCustomer/EditModal";
import EditModall from "./Customer/InfCustomer/EditModall"

export default class Main extends Component {
  render() {
    return <AppContainer />;
  }
}

const width = Dimensions.get("window").width;

const MainNavigator = createStackNavigator(
  {
    Main: ServiceCustomer,
    ServiceCustomer: ServiceCustomer,
    InfCustomer: InfCustomer
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: () => <Header navigation={navigation} />
    })
  }
);

const LeftHandSlider = createDrawerNavigator(
  {
    Dashboard: MainNavigator,

    LoginForm: {
      screen: LoginForm,
      navigationOptions: {
        headerTitle: "Login Form"
      }
    },
    RegisterForm: {
      screen: RegisterForm,
      navigationOptions: {
        headerTitle: "Register Form"
      }
    },
    ServiceCustomer: {
      screen: ServiceCustomer,
      navigationOptions: {
        headerTitle: "ServiceCustomer"
      }
    },
    EditModal: {
      screen: EditModal,
      navigationOptions: {
        headerTitle: "Edit Modal"
      }
    },
    
    InfCustomer: {
      screen: MainNavigator,
      navigationOptions: {
        headerTitle: "InfCustomer"
      }
    },
    EditModall: {
      screen: EditModall,
      navigationOptions: {
        headerTitle: "EditModall"
      }
  },
  },
  {
    contentComponent: props => {
      const x = false;
      if (x) {
        return <LoginSuccess {...props} navigation={navigation} />;
      } else {
        return <Menu {...props} />;
      }
    }
  }
);

const AppContainer = createAppContainer(LeftHandSlider);
