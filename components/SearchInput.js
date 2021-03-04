import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={textAlign}
                placeholder={this.props.placeholder}
                placeholderTextColor="white" 
                autoCorrect={false} 
                clearButtonMode="always"></TextInput>
      </View>
    );
  }
}

const textAlign = {textAlign: 'center', textAlignVertical: 'bottom'}

const styles = StyleSheet.create({

  container: {
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    },
    
});
