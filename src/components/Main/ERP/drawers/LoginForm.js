import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import { TextInput } from "react-native-gesture-handler";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
const widhtPassUser =
  Dimensions.get("window").width - heightScreen * 0.25 * 0.75;

export default class LoginForm extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Image
            style={{
              flex: 1,
              width: null,
              height: null
            }}
            source={require("../Header/images/background.png")}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: heightScreen * 0.15,
            marginBottom: 5
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontFamily: "Cochin",
              fontWeight: "bold",
              color: "#696969"
            }}
          >
            {" "}
            Login{" "}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            height: heightScreen * 0.25
          }}
        >
          <View style={{}}>
            <View
              style={{
                marginLeft: 15,
                alignItems: "center",
                flexDirection: "row",
                height: heightScreen * 0.18 * 0.5
              }}
            >
              <Image
                style={{
                  height: heightScreen * 0.2 * 0.25,
                  width: heightScreen * 0.2 * 0.25
                }}
                source={require("../Header/images/admin.png")}
              />
              <TextInput
                style={{ paddingLeft: 10, fontSize: 18, width: widhtPassUser }}
                placeholder="Username"
              />
            </View>
            <View
              style={{
                height: 1,
                width: widhtPassUser * 1.125,
                borderWidth: 1,
                marginLeft: 15,
                borderColor: "gray"
              }}
            />
            <View
              style={{
                marginLeft: 15,
                alignItems: "center",
                flexDirection: "row",
                height: heightScreen * 0.18 * 0.5
              }}
            >
              <Image
                style={{
                  height: heightScreen * 0.2 * 0.25,
                  width: heightScreen * 0.2 * 0.25
                }}
                source={require("../Header/images/password.png")}
              />
              <TextInput
                style={{ paddingLeft: 10, fontSize: 18, width: widhtPassUser }}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate("Dashboard");
            }}
          >
            <Image
              style={{
                height: heightScreen * 0.16 * 0.5,
                width: heightScreen * 0.16 * 0.5,
                borderRadius: heightScreen * 0.16 * 0.5,
                marginLeft: 5,
                marginRight: 5
              }}
              source={require("../Header/images/next.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: heightScreen * 0.08,
            margin: 15,
            justifyContent: "space-between",
            height: heightScreen * 0.08
          }}
        >
          <View
            style={{
              width: (widthScreen * 2) / 5,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              style={{
                height: heightScreen * 0.08 * 0.35,
                width: heightScreen * 0.08 * 0.35
              }}
              source={require("../Header/images/checkbox.png")}
            />
            <Text style={{ marginLeft: 12, fontSize: 14, color: "#808080" }}>
              Remember me
            </Text>
          </View>
          <View
            style={{
              width: (widthScreen * 2) / 5,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Text style={{ marginLeft: 10, fontSize: 14, color: "#808080" }}>
              Forgot Password ?
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate("RegisterForm");
          }}
        >
          <Text
            style={{
              margin: 15,
              marginTop: heightScreen * 0.1,
              fontSize: 28,
              fontWeight: "bold",
              color: "#ffa07a"
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
