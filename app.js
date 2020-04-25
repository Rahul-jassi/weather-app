// console.log('starting')

const request = require("request")

// setTimeout( ()=>{
//     console.log('3 secound time')
// },3000)
// setTimeout( ()=>{
//     console.log('0 secound time')
// },000)




console.log('finishing')
// const request = require('request')
// const url ='http://api.openweathermap.org/data/2.5/find?lat=55.5&lon=37.5&cnt=10'
// request ({url:url, json:true }, (error,response) =>{
//     if(error){
//         console.log('unable to connect weather service')
//     }
//     else if(response.body.error){
//      console.log('unable to find location')
//     }
//     else{
//         const data = JSON.parse(response.body)
//     console.log(response.body.daily.data[0].summary + 'it is currently' + response.body.daily.data[0]) 
//     }
    
    
// } )

const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicmpqYXNzaSIsImEiOiJjazlkd3hiMnUwN250M2xtbGh0OGx5dm1oIn0.uXnaUmVeGTSL-nwZa_ToNg&limit=1'
request({ url:geocodeURL, json: true},(error,response)=> {
    if(error)
    {
        console.log('unable to connect')
    }
    else if (response.body.features.length===0)
    {
        console.log('unable to find location service try another')
    }
    else{
        const latitude =response.body.features[0].center[0]
const logtitude =response.body.features[0].center[1]
console.log(latitude,logtitude)
    }

}
)