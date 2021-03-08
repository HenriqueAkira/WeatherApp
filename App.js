import React from 'react';
import { StyleSheet, Text, TextInput, View, StatusBar, Platform, KeyboardAvoidingView, ImageBackground, ActivityIndicator} from 'react-native';

import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      location: '',
      temperature: '',
      weather: '',
      loading: true,
      error: false,
    };
  }

  handleUpdateLocation = (city) =>{
    this.setState({loading: true})
    this.getCityInfo(city);
  }


getCityInfo = async (city) =>{
  try{

    let response = await fetch(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then((response) => response.json()).then((city) => this.setState({id: city[0].woeid, location: city[0].title}));
    
    let response2 = await fetch(`https://www.metaweather.com/api/location/${this.state.id}`)
    .then((response2) => response2.json()).then((city) => this.setState({temperature: city.consolidated_weather[0].the_temp, weather: city.consolidated_weather[0].weather_state_name, loading: false, error: false}))
  } catch(erro){
      this.setState({error: true, loading: false})
  }
}


  componentDidMount = () =>{
    this.handleUpdateLocation("San Francisco")
    
  }
  
  render() {
    const {loading,error,location,weather,temperature} = this.state;
    return (
      <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}>
            <View style={styles.detailsContainer}>
              <ActivityIndicator animating={loading} color="white" size="large"></ActivityIndicator>

              {!loading && (
                <View>
                  {error && (<Text style={[styles.smallText, styles.textStyle]}>Could not load, try a different city</Text>)}
                  {!error && (
                    <View>
                      <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
                      <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                      <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text> 
                    </View>
                  )}
                  <SearchInput placeholder="Search any city" onSubmit={this.handleUpdateLocation}></SearchInput>
                </View>
              )}
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
