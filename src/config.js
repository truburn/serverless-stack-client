const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'truburn-notes-app-upload',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://3tk5q3fei2.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_sVoAihgZp',
    APP_CLIENT_ID: '1q4gpmiv7s34qg5p85k01t5o7e',
    IDENTITY_POOL_ID: 'us-east-1:b5d4d6f2-6047-4a2a-a49d-1109e878f5f5',
  },
};

export default config;
