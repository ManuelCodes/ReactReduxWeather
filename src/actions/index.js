import axios from 'axios';

const API_KEY  = "6eeb54489207df0128cdae4e6fca3d0c";
//api.openweathermap.org/data/2.5/weather?q=London,uk
//http://api.openweathermap.org/data/2.5/forecast?q=chicago,us&appid=6eeb54489207df0128cdae4e6fca3d0c
//const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
//const ROOT_URL = 'api.openweathermap.org/data/2.5/weather?appid=' + API_KEY;
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city)
{
  const url = ROOT_URL + '&q=' + city + ',us';
  //const request = axios.get('http://35.166.73.246:3001/api/productos');
  const request = axios.get(url);
  /*const request = axios.get(url, {
	headers: {
	  'Access-Control-Allow-Origin': '*',
	}
}).then(function (response) {
    alert("yolo");
    console.log(response);
  }).catch(function (error) {
    window.error = error;
    console.log(error);
  });*/
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
