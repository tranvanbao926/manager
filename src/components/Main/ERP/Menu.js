import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import profileIcon from "../../../media/temp/profile.png";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const {
      container,
      profile,
      btnSignInStyle,
      btnTextSignIn,
      loginContainer,
      username,
      btnSignInStyle1,
      btnSignInStyle2
    } = styles;

    const drawer = (
      <View style={loginContainer} >
        <TouchableOpacity style={btnSignInStyle2} onPress={() => {
          navigate("InfCustomer");
        }}>
          <Text style={username}>Tran Van Bao</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={btnSignInStyle} onPress={() => {
            navigate("ServiceCustomer");
          }}>
            <Text style={btnTextSignIn}>Trạng thái sử dụng dịch vụ</Text>
          </TouchableOpacity>
        </View>
        

        <TouchableOpacity
          style={btnSignInStyle1}
          onPress={() => {
            navigate("LoginForm");
          }}
        >
          <Text style={username}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    );
    return (
      <View style={container}>
        <Image source={profileIcon} style={profile} />
        {drawer}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#015C7B",
    borderRightWidth: 3,
    borderColor: "#fff",
    alignItems: "center"
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 30
  },

  btnSignInStyle: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnSignInStyle1: {
    height: 50,
    backgroundColor: "#004462",
    borderRadius: 5,
    width: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1
  },
  btnSignInStyle2: {
    height: 50,
    backgroundColor: "#015C7B",
    borderRadius: 5,
    width: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.1
  },
  btnTextSignIn: {
    color: "#015C7B",
    fontSize: 14
  },
  loginContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  username: {
    color: "#fff",
    fontFamily: "Avenir",
    fontSize: 15
  }
});

export default Menu;
