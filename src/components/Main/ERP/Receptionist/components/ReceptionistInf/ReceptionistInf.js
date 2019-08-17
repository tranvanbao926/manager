import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

import profileIcon from "../../../../../../media/temp/profile.png";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import EditModall from "./EditModall";

class ReceptionistInf extends Component {
  constructor(props) {
    super(props);
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  _onPressAdd() {
    this.refs.EditModall.showEditModall();
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
      username1
    } = styles;

    return (
      <ScrollView>
        <View style={container}>
          <Image source={profileIcon} style={profile} />
          <View>
            <Text style={username}>Tran Van Bao</Text>
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
          <Text style={txtInf}>Tên: Tran Van Bao</Text>
          <Text style={txt_} />
          <Text style={txtInf}>Ngày sinh:   23/2/19</Text>
          <View style={txt_} />
          <Text style={txtInf}>Giới tính:   Nam</Text>
          <View style={txt_} />
          <Text style={txtInf}>CMT:     2520570578</Text>
          <View style={txt_} />
          <Text style={txtInf}>Thẻ CC:  8245729529</Text>
          <View style={txt_} />
          <Text style={txtInf}>Địa chỉ:     Ha Noi</Text>
          <View style={txt_} />
          <Text style={txtInf}>Điện thoại:  2948572985</Text>
          <View style={txt_} />
          <Text style={txtInf}>Mail:    baotran@gmail.com</Text>
          <View style={txt_} />
          <Text style={txtInf}>Trực thuộc cơ sở:    D2</Text>
          <View style={txt_} />
          <Text style={txtInf}>Đăng ký tại cơ sở:   D2</Text>
          <View style={txt_} />
          <Text style={txtInf}>Ghi chú:  Chao ban</Text>
          <View style={txt_} />
        </View>
        <View style={container}>
          <TouchableOpacity style={btnSignInStyle1} onPress={this._onPressAdd}>
            <Text style={username1}>Edit</Text>
          </TouchableOpacity>
        </View>
        <EditModall ref={"EditModall"} parentFlatList={this}></EditModall>
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20
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
  }
});

export default ReceptionistInf;
