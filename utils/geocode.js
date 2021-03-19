const request = require('request');



const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZ2VldGFnaGFudGkiLCJhIjoiY2ttOW9xOHhoMTd2NzJvbXpiaXU5MmZhaSJ9.m55EcZZbRr2_4pEpQQIv2Q&limit=1';
    request({ url,  json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services',  undefined);
        }else if(body.features !== undefined){
        if(body.features.length === 0){
            callback('Unable to find location, and try another search', undefined)
        }  else {
            callback(undefined, {
                latitude: body.features[0].center[1], 
                Longitude:body.features[0].center[1], 
                location: body.features[0].place_name
            })
        }
        } else{
        callback('Unable to find location, and try another search',  undefined);
    }

})
} 

module.exports = geocode