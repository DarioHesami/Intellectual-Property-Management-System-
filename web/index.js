const express = require('express');
const app = express();
//const c_u = require('../backend/microservices/createuser');

const app2 = require('../appuser');
const app3 = require('../app');
//
//app.use(express.json());


const PORT = 3000;

app.get('/loginform/index.html', (req, res) => {
   // res.send('Hello World!');
   res.sendFile('./loginform/index.html', { root: __dirname })
});



app.post('/user/create', function (req, res) {
  console.log('Create new user ...');
  //c_u.newuser;
  app2.main2();
  //console.log(req.body);
  //res.send('hello');
  //res.send(req.body);
});

app.get('/createasset/index.html', function (req, res) {
  console.log('Create new Asset ...');
  res.sendFile('./createasset/index.html', { root: __dirname })
});

app.post('/asset/create', function (req, res) {
  console.log('Create new user ...');
  app3.main1();
});

app.get('/admin', (req, res) => {
  res.sendFile('./admin-panel.html', { root: __dirname })
});



//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));