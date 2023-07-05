// Importing AWS SDK
const AWS = require('aws-sdk');

// Creating an instance of AWS Lambda service
const lambda = new AWS.Lambda();

// Function to invoke a Lambda function
function invokeLambdaFunction(functionName, payload) {
    const params = {
        FunctionName: functionName,
        Payload: JSON.stringify(payload)
    };

    lambda.invoke(params, function(error, data) {
        if (error) {
            console.error(JSON.stringify(error));
        } else if (data.Payload) {
            console.log('Lambda function output:', JSON.parse(data.Payload));
        }
    });
}

// Invoking the Lambda function
invokeLambdaFunction('myLambdaFunction', { key1: 'value1', key2: 'value2', key3: 'value3' });