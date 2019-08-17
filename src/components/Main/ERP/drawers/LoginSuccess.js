import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import console = require('console');

export default class LoginSuccess extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "#ffefd5", flex: 1 }}>
        <View
          style={{
            marginBottom: 50,
            height: 150,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../../../../media/temp/54.jpg")}
            style={{ height: 120, width: 120, borderRadius: 120 }}
          />
          <Text style={{ fontSize: 20 }}>baotran</Text>
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={stylesOflogin.ViewTouchForm}>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  fontWeight: "bold",
                  marginLeft: 15,
                  textAlign: "center"
                }}
              >
                Order History
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={stylesOflogin.ViewTouchForm}>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  fontWeight: "bold",
                  marginLeft: 15,
                  textAlign: "center"
                }}
              >
                Change Infor
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={stylesOflogin.ViewTouchForm}>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  fontWeight: "bold",
                  marginLeft: 15,
                  textAlign: "center"
                }}
              >
                Sign Out
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const stylesOflogin = StyleSheet.create({
  ViewTouchForm: {
    flexDirection: "row",
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white"
  }
});
