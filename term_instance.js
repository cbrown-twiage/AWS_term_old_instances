const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

console.log("loading function");

const ec2 = new AWS.EC2();
const asg = new AWS.AutoScaling();

exports.handle = event => {
  // double ASG MaxSize, MinSize, and DesiredCapacity
  asg.describeAutoScalingGroups(
    { AutoScalingGroupNames: [event.targetASG] },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let desiredCapacity = data.AutoScalingGroups[0].DesiredCapacity * 2;
        let max = data.AutoScalingGroups[0].MaxSize * 2;
        let min = data.AutoScalingGroups[0].MinSize * 2;
        console.log(
          `New Desired: ${desiredCapacity} | New Max: ${max} | New Min: ${min}`
        );
        // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#putScalingPolicy-property
      }
    }
  );
  // when new instances are ready, return ASG MaxSize, MinSize, and DesiredCapacity back to original values
  // ASG should terminate old instances
};
