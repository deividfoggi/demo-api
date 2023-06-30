# Demo Api
***
Simple express server with an API simulator and a jmeter test plan.

## How to run this demo

1. Adjust repositoryUrl parameter in Azuredeploy.bicepparam with your repository's URL.
2. Deploy using Azuredeploy.bicep using either VSCode or az cli:
    A. VSCode: Right click on Azuredeploy.bicep file, select Deploy Bicep File... then follow the instructions.
    B. Use az cli to deploy the file:
         az deployment group create --resource-group demo-api-rg --template-file Azuredeploy.bicep --parameters Azuredeploy.bicepparam

3. Once the deployment is finished, open your repo's Actions and confirm that the build and deployment to App Service are done.
2. Access API endpoints from browser:

    https://<app-service-endpoint>/api/devices
    https://<app-service-endpoint>/api/users

***
## How to use the jmeter test plan

### Running from CLI
Adjust the test plan accordingly to your needs, it's configured to run a very simple and lower number of requests, with 10000 users. You can use the jmeter cli to run the tests:

1. Open http_requests.jmx and replace localhost on all lines like the following one with the app service endpoint:

     <stringProp name="HTTPSampler.domain">localhost</stringProp>
     
2. Access jmeter bin folder and run the following in cmd:

    jmeter -n -t http_requests.jmx

3. Once the tests are finished open the jmeter.log to analyse the results.

### Running using Azure Load Testing

Load test a website by using an existing JMeter script in Azure Load Testing
https://learn.microsoft.com/en-us/azure/load-testing/how-to-create-and-run-load-test-with-jmeter-script