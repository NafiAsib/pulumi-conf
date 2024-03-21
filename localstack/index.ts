import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import localpoints from "./provider";

const provider = new aws.Provider("localstack", {
  region: "ap-southeast-1",
  accessKey: "test",
  secretKey: "test",
  skipCredentialsValidation: true,
  skipRequestingAccountId: true,
  endpoints: [...localpoints],
});
// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket", {}, { provider: provider });

// Export the name of the bucket
export const bucketName = bucket.id;
