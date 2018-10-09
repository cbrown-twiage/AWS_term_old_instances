const AWS = require("aws-sdk");

const ec2 = new AWS.EC2();

exports.handle = event => {
  // double ASG MaxSize, MinSize, and DesiredCapacity
  // when new instances are ready, return ASG MaxSize, MinSize, and DesiredCapacity back to original values
  // ASG should terminate old instances
};
