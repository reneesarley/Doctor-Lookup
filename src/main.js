import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorLookup } from './DoctorLookup.js'
// let Promise = require('es6-promise').Promise;

$(document).ready(function(){
  console.log("this is working");

  let doctorLookup = new DoctorLookup();
  let promise = doctorLookup.getDoctorsByMedicalIssue();
  promise.then(function(response) {
    let body = JSON.parse(response);
    console.log("the promise is running");
    console.log(body.data[1]);
    // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
