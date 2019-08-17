import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
// import Main from './src/components/Main/ERP/Main';
// import CustomerFlatList from './src/components/Main/ERP/Receptionist/components/CustomerList/CustomerFlatList'
// import EmployeeMain from './src/components/Main/ERP/Receptionist/components/EmployeeMain'
import EmployeeMain from './src/components/Main/ERP/Employee/EmployeeMain'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => EmployeeMain);