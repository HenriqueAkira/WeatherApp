import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Platform, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';

import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      location: 'San Francisco',
    };
  }

  changeLocation = (text) =>{
    this.setState({location: text});
    console.log(this.state.location + "asafda fafa")
  }

  
  render() {
    return (

      <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}>
            <View style={styles.detailsContainer}>
              <Text style={[styles.largeText, styles.textStyle]}>{this.state.location}</Text>
              <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
              <Text style={[styles.largeText, styles.textStyle]}>24°</Text> 
              <SearchInput placeholder="Search any city" onSubmit={this.changeLocation}></SearchInput>
            </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },

  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
    },
    

  largeText: {
    fontSize: 44,
  },

  smallText: {
    fontSize: 18,
  },

  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  }


});
