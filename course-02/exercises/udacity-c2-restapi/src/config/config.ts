export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.AWS_DATABASE,
    "host": process.env.AWS_HOST,
    "dialect": process.env.AWS_DIALECT,
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET,
  },
  "prod": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.AWS_DATABASE,
    "host": process.env.AWS_HOST,
    "dialect": process.env.AWS_DIALECT
  },
  "jwt":{
    "secret":process.env.AWS_JWT
  }
}
