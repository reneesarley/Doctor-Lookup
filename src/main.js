import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
let Promise = require('es6-promise').Promise;

$(document).ready(function(){
  console.log("this is working");

  // let promise1 = new Promise(function(resolve, reject) {
  // setTimeout(resolve, 2000, 'foo');
  // });
  //
  // console.log(promise1);
  // expected output: [object Promise]

  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
  
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    console.log("the promise is running");
    console.log(body.data[0]);
    // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
