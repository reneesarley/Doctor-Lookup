import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorQuery } from './betterDoctorQuery.js'
// let Promise = require('es6-promise').Promise;

$(document).ready(function(){
  console.log("this is working");

  let betterDoctorQuery = new BetterDoctorQuery();
  let promiseGetDoctors = betterDoctorQuery.getDoctorsByMedicalIssue();
  let promiseGetConditions = betterDoctorQuery.getKnownConditions();
  promiseGetDoctors.then(function(response) {
    let body = JSON.parse(response);
    console.log("the get doctor promise is running");
    console.log(body.data[1]);
    // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
    // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
  promiseGetConditions.then(function(response) {
    let body = JSON.parse(response);
    console.log("the get conditions promise is running");
    console.log(body.data[0].name);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
