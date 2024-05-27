import axios from 'axios';

axios.get('https://dummyjson.com/carts/1')
  .then(function (response) {
    // handle success
    console.log(response.data.products);
  })