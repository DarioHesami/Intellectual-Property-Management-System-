const express = require('express');
const app = express();
const app2 = require('./app');
//import {main1} from "./app.js"
  
  

app.get('/', (req, res) => {
    res.send({ message: 'Hello WWW!' });
    
});

app.get('/asset', (req, res) => {
    res.send({ message: 'asset' });
    //
    app2.main1();

});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});