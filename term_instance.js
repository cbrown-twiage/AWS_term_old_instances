const AWS = require("aws-sdk");

const ec2 = new AWS.EC2();
const asg = new AWS.AutoScaling();

exports.handle = event => {
  // double ASG MaxSize, MinSize, and DesiredCapacity
  // asg.describeAutoScalingGroups(event.targetASG)
    // .then(response =>{
    //     let desiredCapactiy = response.data.AutoScalingGroups[0].DesiredCapacity *2
    //     let max = response.data.AutoScalingGroups[0].MaxSize * 2
    //     let min = response.data.AutoScalingGroups[0].MinSize * 2
    //     console.log(`DC: ${desiredCapacity} | Max: ${max} | Min: ${min}`);
    // })
    // .catch(err => console.error(err))
  asg.describeAutoScalingGroups(event.targetASG, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let desiredCapacity = data.AutoScalingGroups[0].DesiredCapacity * 2;
      let max = data.AutoScalingGroups[0].MaxSize * 2;
      let min = data.AutoScalingGroups[0].MinSize * 2;
      // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/AutoScaling.html#putScalingPolicy-property
    }
  });
  // when new instances are ready, return ASG MaxSize, MinSize, and DesiredCapacity back to original values
  // ASG should terminate old instances
};
