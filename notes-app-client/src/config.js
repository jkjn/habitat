export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "habitat-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://h46e9rkigb.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PnwBNtHDI",
    APP_CLIENT_ID: "44lag2q1tcinfg2phsmpiheld0",
    IDENTITY_POOL_ID: "us-east-2:3a082bbe-aaf5-4c00-9263-28f30fff56ac"
  }
};