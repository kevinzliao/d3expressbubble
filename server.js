const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path');


app.use(express.static('public'))

let testJSON = [{
    lat: null,
    long: null,
    datasource_name: "AK_GFBOR",
    market_name: "Alaska - GFBOR",
    last_updated: "None",
    active_listings: 1182
    },
    {
    lat: 33.48503204794918,
    long: -86.63856745714243,
    datasource_name: "AL_BAMLS",
    market_name: "Alabama - BAMLS",
    last_updated: "2011-04-04 08:51:49.803000",
    active_listings: 13368
    },
    {
    lat: 31.274638490727487,
    long: -85.39756255996193,
    datasource_name: "AL_DMLS",
    market_name: "Alabama - DMLS",
    last_updated: "None",
    active_listings: null
    },
    {
    lat: 32.813848438314906,
    long: -85.87274279037159,
    datasource_name: "AL_LMAAR",
    market_name: "Alabama - LMAAR",
    last_updated: "None",
    active_listings: 997
    }]

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/'));
});

app.get('/api', function(req, res){
    res.send(testJSON);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});