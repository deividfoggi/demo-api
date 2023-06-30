# Demo Api
***
Simple express server with an API simulator and a jmeter test plan.

## How to run this demo

1. Start the node server by running the following command on prompt: node app.js
2. Access API endpoints from browser:

    https://localhost:3000/api/devices
    https://localhost:3000/api/users

***
## How to use the jmeter test plan

### Running from CLI
Adjust the test plan accordingly to your needs, it's configured to run a very simple and lower number of requests, with 10000 users. You can use the jmeter cli to run the tests:

1. Access jmeter bin folder and run the following in cmd:

    jmeter -n -t http_requests.jmx

2. Once the tests are finished open the jmeter.log to analyse the results.

### Running using Azure Load Testing

Load test a website by using an existing JMeter script in Azure Load Testing
https://learn.microsoft.com/en-us/azure/load-testing/how-to-create-and-run-load-test-with-jmeter-script