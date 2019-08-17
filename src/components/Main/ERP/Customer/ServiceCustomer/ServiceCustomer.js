import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import EditModal from './EditModal';

import littleImage from "../../../../../media/temp/little.jpg";

const { width, height } = Dimensions.get("window");

class ServiceCustomer extends Component {
  constructor(props) {
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  _onPressAdd() {
    this.refs.EditModal.showEditModal();
  }
  render() {
    const { navigate } = this.props.navigation;
    const {
      container,
      profile,
      txtInf,
      username,
      txt_,
      btnSignInStyle1,
      username1,
      btnSignInStyle,
      loginContainer
    } = styles;

    return (
      <ScrollView>
        <View style={container}>
          <Image source={littleImage} style={profile} />
          <View>
            <Text style={username}>Trạng thái sử dụng dịch vụ</Text>
          </View>
        </View>
        <View
          style={{
            height: 1,
            borderWidth: 1,
            margin: 15,
            marginLeft: 50,
            marginRight: 50,
            borderColor: "#a9a9a9"
          }}
        />
        <View>
          <View style={loginContainer}>
            <View style={btnSignInStyle}>
              <ScrollView nestedScrollEnabled={true}>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  onPress={this._onPressAdd}
                >
                  <Text style={txtInf}>Dich vu A </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  underlayColor="tomato"
                  onPress={this._onPressAdd}
                >
                  <Text style={txtInf}>Dich vu A </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  underlayColor="tomato"
                  onPress={this._onPressAdd}
                >
                  <Text style={txtInf}>Dich vu A </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  underlayColor="tomato"
                  onPress={this._onPressAdd}
                >
                  <Text style={txtInf}>Dich vu A </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  underlayColor="tomato"
                  onPress={this._onPressAdd}
                >
                  <Text style={txtInf}>Dich vu A </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginRight: 10 }}
                  underlayColor="tomato"
                  onPress={this._onPressAdd}
                >
                  <Text style={txtInf}>Dich vu A </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          <View>
            <Text style={txtInf}>Tổng: </Text>
            <View style={txt_} />
            <Text style={txtInf}>Đã thanh toán: </Text>
            <View style={txt_} />
            <Text style={txtInf}>Còn nợ: </Text>
            <View style={txt_} />
          </View>
        </View>
        <EditModal ref={"EditModal"} parentFlatList={this}></EditModal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center"
  },
  profile: {
    height: 120,
    borderRadius: 60,
    marginVertical: 20
  },
  btnSignInStyle: {
    height: height / 5,
    backgroundColor: "yellow",
    borderRadius: 5,
    width: (width * 3) / 4,
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
  txtInf: {
    color: "#015C7B",
    fontFamily: "Avenir",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20
  },
  txt_: {
    height: 0.3,
    borderWidth: 0.3,
    margin: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#a9a9a9"
  },

  username: {
    color: "#015C7B",
    fontFamily: "Avenir",
    fontSize: 20
  },
  username1: {
    color: "#fff",
    fontFamily: "Avenir",
    fontSize: 20
  },
  loginContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default ServiceCustomer;
