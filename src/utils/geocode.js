const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3V2cmF0LXNhcmFzd2F0MjAxMSIsImEiOiJja2p1NmJhbXgwM3Q2MnJtczFjYnNsMHZtIn0.dbmGI61nNFX_8Zj4C1DvjA&limit=1'
    request({ url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to search for location. Try again with a valid location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode