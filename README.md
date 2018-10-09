# Terminate Old Instances after updating Launch Configuration

This is an AWS Lambda using the JavaScript SDK. It is meant to:

1.  Increase AutoScale Group's number of desired instances (spinning up new instances from an updated AMI)

2.  Wait for an event to fire indicating the new instances are ready.

3.  Terminate the old instances by decreasing the AutoScale Group's number of desired instances back to normal (should terminate old instances first, according to [SO](https://stackoverflow.com/questions/49498693/how-can-i-control-which-ec2-instances-get-removed-by-an-autoscalinggroup-using-a))
