import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} 
                placeholder={this.props.placeholder}
                placeholderTextColor="white" 
                autoCorrect={false} 
                clearButtonMode="always"></TextInput>
      </View>
    );
  }
}

const redColor = {color: "red"}

const styles = StyleSheet.create({

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
