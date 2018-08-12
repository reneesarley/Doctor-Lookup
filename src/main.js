import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorQuery } from './betterDoctorQuery.js'
// let Promise = require('es6-promise').Promise;

$(document).ready(function(){
  $("#doctorLookup").submit(function(e){
    e.preventDefault();
    let medicalIssue = $("#medicalIssue").val();
    $("#medicalIssue").val("");
    let betterDoctorQuery = new BetterDoctorQuery();
    let promiseGetDoctors = betterDoctorQuery.getDoctorsUsingQuery(medicalIssue);
    console.log(medicalIssue);

    promiseGetDoctors.then(function(response) {
      console.log("the get doctor promise is running");
      let body = JSON.parse(response);
      $("#searchResults").append(`<h3>Doctors matching your search for ${medicalIssue}</h3><div id="foundDoctors"></div>`)
      console.log(`the length of the arry is ${body.data.length}`)
      for (let i = 0; i<=body.data.length; i++){
        console.log(body.data[i]);
        console.log(`the first name is ${body.data[i].profile.first_name}`);
        $("#foundDoctors").append(`<div id="doctor${i}"><h4>${body.data[i].profile.first_name} ${body.data[i].profile.last_name}</h4><div id="practices${i}"></div>`);
      }
      // should include first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});


  // // let promiseGetConditions = betterDoctorQuery.getKnownConditions();
  // promiseGetDoctors.then(function(response) {
  //   let body = JSON.parse(response);
  //   console.log("the get doctor promise is running");
  //   console.log(body.data[1]);
  //   // $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  //   // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  // }, function(error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  // });
  // promiseGetConditions.then(function(response) {
  //   let body = JSON.parse(response);
  //   console.log("the get conditions promise is running");
  //   console.log(body.data.length);
  //   console.log(body.data[0].name);
  // }, function(error) {
  //   $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  // });
