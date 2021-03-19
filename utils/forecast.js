const request = require('request');

const forecast = (latitude, longitude, callback) => {
 const url = 'http://api.weatherstack.com/current?access_key=abd94eec52fec7dfac6471c42cb0bc28&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f';
    console.log(url);
   
    request({url, json: true }, (error, { body }) => {
        if(error){
            callback('unable to connect to weather service', undefined);
        }else if(body.error){
            callback('unable to find weather for the given location'+ response.body.error, undefined);
        } else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.temperature + ' 5 degress out');
        }

    });
}

module.exports = forecast;
