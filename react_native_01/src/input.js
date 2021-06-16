/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

  
class Input extends Component {

    state = {
        myTextInput: ''
    }
    
    onChangeInput = (e) => {
        this.setState({
            myTextInput: e
        })
    }

    render(){
        return(
            
            <View style = {Styles.mainView}>
                <TextInput
                    value = {this.state.myTextInput}
                    style = {Styles.input}
                    onChangeText = {this.onChangeInput}
                    multiline = {true }
                />    
            </View>
            
        )
    }
}
 
const Styles = StyleSheet.create({ 
    mainView: {
        width: '100%'
    },

    input: {
        width: '100%',
        backgroundColor: '#cecece',
        marginTop: 20,
        fontSize: 25,
        padding: 10

    }

})
 
 
export default Input;
  
 
 