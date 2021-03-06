export const apiWeather = async (city) => {
  let response = await fetch(`https://www.metaweather.com/api/location/search/?query=${cityt}`)
  .then((response) => response.json()).then((city) => this.setState({text: city[0].title}))
};
  
  
