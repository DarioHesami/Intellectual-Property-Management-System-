var axios = require('axios');

axios({
  method: 'post',
  url: 'http://localhost:3000/user',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
.then(function (res) {
  console.log(res.data);
})
.catch(function (err) {
  console.log(err);
});