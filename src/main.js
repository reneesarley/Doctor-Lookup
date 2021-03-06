import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDoctorQuery } from './betterDoctorQuery.js'
// let Promise = require('es6-promise').Promise;

$(document).ready(function(){
  $("#doctorLookup").submit(function(e){
    e.preventDefault();
    $('#searchResults').text("");
    let medicalIssue = $("#medicalIssue").val();
    let doctorsName = $("#doctorsName").val();
    $("#medicalIssue").val("");
    $("#doctorsName").val("");
    let betterDoctorQuery = new BetterDoctorQuery();
    let promiseGetDoctors = betterDoctorQuery.getDoctorsUsingQuery(medicalIssue, doctorsName);

    promiseGetDoctors.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length == 0){
        $("#searchResults").append(`<h3>We're sorry, there were no doctors matching your search</h3>`)
      } else {
        $("#searchResults").append(`<h3>Doctors matching your search for ${medicalIssue}</h3><div id="foundDoctors"></div>`)
        console.log(`the length of the arry is ${body.data.length}`)
        for (let i = 0; i<body.data.length; i++){
          console.log(body.data[i]);
          let doctor = `${body.data[i].profile.first_name} ${body.data[i].profile.last_name} ${body.data[i].profile.title}`
          $("#foundDoctors").append(`<div id="doctor${i}"><h4>${doctor}</h4><h5 id="practicesFor${i}">Practices:</h5>`);
            for (let j = 0; j<body.data[i].practices.length; j++){
              let practiceName = body.data[i].practices[j].name;
              let website = body.data[i].practices[j].website === undefined ? "No website listed" : body.data[i].practices[j].website;
              let newPatients = (body.data[i].practices[j].accepts_new_patients ? "Currently accepting new patients." : "This practice is not currently accepting new patients.")
              let address = `${body.data[i].practices[j].visit_address.street} ` + `${body.data[i].practices[j].visit_address.street2 === undefined ? "" : body.data[i].practices[j].visit_address.street2}` + `${body.data[i].practices[j].visit_address.city} ${body.data[i].practices[j].visit_address.state} ${body.data[i].practices[j].visit_address.zip}`;
              let phone = body.data[i].practices[j].phones[0].number;
              $(`#practicesFor${i}`).append(`<div id="practice${j}For${i}"><h6 >${practiceName}</h6><ul id="practice${j}For${i}List"></ul></div>`);
              $(`#practice${j}For${i}List`).append(`<li>${website}</li><li>${newPatients}</li><li>${address}</li><li>Phone: ${phone}</li>`);
              
            }
        }
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    });
});
