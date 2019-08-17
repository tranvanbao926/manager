import React, { Component } from 'react';
import {
    Text,
    Platform, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../../data/flatListData';

var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            description: ''
        };
    }
    showEditModal = (editingEmployee, flatlistItem) => {     
        this.setState({
            key: editingEmployee.key,
            employeeName: editingEmployee.name,
            description: editingEmployee.description,
            flatlistItem: flatlistItem
        });
        this.refs.myModal.open();
    } 
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});        
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
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
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>Employee's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ employeeName: text })}
                    placeholder="Enter Employee's name"
                    value={this.state.employeeName}                 
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({ description: text })}
                    placeholder="Enter Employee's description"
                    value={this.state.description}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                         if (this.state.employeeName.length == 0 || this.state.description.length == 0) {
                            alert("You must enter Employee's name and description");
                            return;
                        }       
                        //Update existing employee
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0) {
                            return; //not found
                        }
                        flatListData[foundIndex].name = this.state.employeeName;
                        flatListData[foundIndex].description = this.state.description;
                        //Refresh flatlist item
                        this.state.flatlistItem.refreshFlatListItem();
                        this.refs.myModal.close();                                                                       
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}