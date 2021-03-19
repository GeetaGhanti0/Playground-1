const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];

if(location){

    geocode(location, (error, {latitude, longitude, location:address} = {}) => {
        if(error){
            return console.log(error);
        }

        forecast(latitude,longitude,(error, forecastdata) => {
            if(error){
                return console.log(error);
            } 
            console.log(' Location ---> ' + address)
            console.log('Forecast --->', forecastdata);
    })

})
} else {
    console.log('Location msut be given');
}


   







