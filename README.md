# Introduction
This API allows Carton Caps users to refer friends to install the CC app on their mobile device, and utilizes deferred deep links to customize the installation experience for the referred user.

# TLDR
Full API documentation can be referenced [here](https://editor.swagger.io/?url=https://raw.githubusercontent.com/joshua-d-hill/cartoncaps/master/openapi.yaml).

To run the mock API service:
  - [Install Node.js](https://github.com/nvm-sh/nvm#installing-and-updating)
  - nvm install node
  - cd nodejs-server
  - npm start

The service will be available at http://localhost:8080

To run tests utilizing Mocha, Chai, and Supertest:
 - npm test

# OpenAPI Specification
This API is documented in **OpenAPI v3 format** and is based on the
[Petstore sample](https://petstore.swagger.io/) provided by the [swagger.io](https://swagger.io) team.

# Mock Web Service
The Node.js mock web service was generated using [Swagger Codegen](https://swagger.io/docs/open-source-tools/swagger-codegen/).

# Skills Challenge Questions
Q: How will existing users create new referrals using their existing referral code?
A: The CC app would POST to the /referrals endpoint with data matching the referral schema (see below).

Q: How will the app generate referral links for the share feature?
A: The app would make a request to the third-party vendor for deferred deep link support.  This link would be included in the POST to the /referrals endpoint.

Q: How will existing users check the status of their referrals?
A: The app would make a GET request to the /referrals endpoint with a filter on the user's referrer ID.

Q: How will the app know where to direct new users after they install the app via a referral?
A: The deferred deep link provided by the third-party vendor would direct new users to the "You've Been Invited" gate page after they have installed the Carton Caps application.

Q: Since users may eventually earn rewards for referrals, should we take extra steps to mitigate abuse?
A: 
  **Proactive**: Rate limit POST requests to /referrals and monitor IP/email addresses for indications of self-referral, account-cycling, or broadcasting.
  **Reactive**: Detected abuse might be addressed in three ways, depending on client preference and in escalating severity: 
    - generate a new referral code (for example, if a user posted their code on a discount-sharing website)
    - disable the "share" feature for the offending user
    - disable the app credentials for the offending user
