  # _Doctor Lookup_

#### _Search for doctors in the Portland area, 8/12/18_

#### By _**Renee Sarley**_

## Description

_This application will allow the users to search for doctors in the Portland area. The search can be norrowed down by doctor name, medical condition needing to be treated, or both. The list is generated using the BetterDoctor API_

## Setup/Installation Requirements

* _Create an account with BetterDoctor API here: https://developer.betterdoctor.com/_
* _Clone the GitHub repo for this application here: https://github.com/reneesarley/Doctor-Lookup.git_
* _At the root level of the project folder create a file named .env_
* _Find your BetterDoctor API credentials under My Account, Applications_
* _In the .env file store your API credentials using the variable name 'exports.apiKey'_
* _Install all packages - From the root level of the project folder run the terminal command $ npm install_
* _Run the program - From the root level of the project folder run the terminal command $ npm install_

## Specs
  * Spec 1: A user will be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query, input: sore throat, output: doctor's details, first name, last name, address, phone number, website and whether or not the doctor is accepting new patients
  * Spec 2: A user will be able to to enter a name to receive a list of doctors in the Portland area that fit the search query., input: string of name, output: list of doctors which will include doctor's details.
  * Spec 3: If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is, output: .
  * Spec 4: If query returns no results there will be a message stating no results found, output: "no results found"

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Email me with any questions._

## Technologies Used

* _BetterDoctor API_
* _JavaScript_
* _jQuery_
* _Bootstrap_

### License

*This software is licensed under the MIT License*

Copyright (c) 2016 **_Renee Sarley_**
