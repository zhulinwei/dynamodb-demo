const AWS = require('aws-sdk');

const dynamodb = new AWS.DynamoDB({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000'
});

dynamodb.listTables({}).promise().then(data => console.log(data));

// 创建表，注意不可重复创建已经存在的表
// dynamodb.createTable({
//   AttributeDefinitions: [{
//     AttributeType: 'S',
//     AttributeName: 'Artist'
//   }, {
//     AttributeType: 'S',
//     AttributeName: 'SongTitle'
//   }],
//   KeySchema: [{
//     KeyType: 'HASH',
//     AttributeName: 'Artist'
//   }, {
//     KeyType: 'RANGE',
//     AttributeName: 'SongTitle'
//   }],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 5,
//     WriteCapacityUnits: 5
//   },
//   TableName: 'Music'
// }).promise().then(data => console.log(data));

// 更新表
// dynamodb.updateTable({
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 10,
//     WriteCapacityUnits: 10
//   },
//   TableName: 'Music'
// }).promise().then(data => console.log(data));

// 表详情
// dynamodb.describeTable({
//   TableName: 'Music'
// }).promise().then(data => console.log(data));
