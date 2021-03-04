import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, Platform, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native';

import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';


export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}>
            <View style={styles.detailsContainer}>
              <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
              <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
              <Text style={[styles.largeText, styles.textStyle]}>24°</Text> 
              <SearchInput placeholder="Search any city"></SearchInput>
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
