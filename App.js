import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Platform, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
        <TextInput style={styles.textInput} placeholder="Search any city" placeholderTextColor="white" autoCorrect={false} clearButtonMode="always"></TextInput>
      </KeyboardAvoidingView>
    );
  }
}

const redColor = {color: "red"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle:{
    textAlign: "center",
    ...Platform.select({
      ios:{
        fontFamily: "AvenirNext-Regular"
      },
      android:{
        fontFamily: "Roboto"
      },
    })
  },

  largeText: {
    fontSize: 44,
  },

  smallText: {
    fontSize: 18,
  },

  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    textAlign:"center",
  }
});
