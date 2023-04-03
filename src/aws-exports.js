const awsmobile = {
    "aws_appsync_graphqlEndpoint": "<graphql-endpoint>",
    "aws_appsync_region": "<region>",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "<api-key>",
    "aws_cognito_identity_pool_id": "<identity-pool-id>",
    "aws_cognito_region": "<region>",
    "aws_user_pools_web_client_id": "<web-client-id>",
    "aws_dynamodb_table_schemas": [
      {
        "tableName": "<table-name>",
        "region": "<region>"
      }
    ],
    "aws_rds": {
      "mydb": {
        "host": "database-1.cbkknefcjewr.us-west-2.rds.amazonaws.com",
        "port": "3306",
        "username": "admin",
        "password": "burger",
        "database": "mydb",
        "awsSecretStoreArn": "arn:aws:secretsmanager:us-west-2:791852914748:secret:corgi-ZxTupU"
      }
    }
  };
  
  export default awsmobile;
  