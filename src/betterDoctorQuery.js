let Promise = require('es6-promise').Promise;

export class BetterDoctorQuery {
  getDoctorsUsingQuery(medicalIssue, doctorsName) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url;
      if(!(medicalIssue == "" && doctorsName == "")){
         url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorsName}&query=${medicalIssue}&location=or-portland&skip=0&limit=30&user_key=${process.env.exports.apiKey}`;
         console.log(url);
      } else if (!medicalIssue == ""){
        url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalIssue}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
        console.log(url);
      } else if (!doctorsName == ""){
        url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorsName}&location=or-portland&skip=0&limit=30&user_key=${process.env.exports.apiKey}`;
        console.log(url);
      } else {
        url = `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=30&user_key=${process.env.exports.apiKey}`;
        console.log(url);
      }
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
  }

  getDoctorsUsingName(doctorsName) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorsName}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
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
  }
  getKnownConditions() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/conditions?active=false&limit=100&user_key=${process.env.exports.apiKey}`;
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
  }

}
