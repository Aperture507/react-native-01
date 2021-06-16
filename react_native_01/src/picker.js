/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
  
class PickerComponent extends Component {

    state = {
        country: 'korea'
    }

    render(){
        return(
            
            <View style = {Styles.container}>
                {/* <Slider
                    style = {{height: 40, width: 300}}
                /> */}
                <Picker
                    style = {{height: 50, width: 250}}
                    selectedValue = {this.state.country}
                    onValueChange = {(val, idx) => 
                        this.setState({country: val})
                    }
                >
                    <Picker.item  label = 'Korea' value = 'korea'/>
                    <Picker.item  label = 'Japan' value = 'japan'/>
                </Picker>
            </View>
            
        )
    }
}
 
const Styles = StyleSheet.create({ 
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center'
    }
})
 
 
export default PickerComponent;