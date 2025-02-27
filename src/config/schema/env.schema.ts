import * as Joi from 'joi'

export const envSchema = Joi.object({
  PORT: Joi.number().default(3000).description('Port to listen on'),
  DATABASE_HOST: Joi.string().required().description('Database hostname or IP address'),
  DATABASE_USERNAME: Joi.string().required().description('Database username'),
  DATABASE_PASSWORD: Joi.string().required().description('Database password'),
  DATABASE_NAME: Joi.string().required().description('Database name'),
  DATABASE_PORT: Joi.string().required().description('Database Port'),
  // // REDIS_URL: Joi.string().required().description('Redis URL'),
  // MAIL_USER: Joi.string().required().description('Mail User'),
  // MAILER_HOST: Joi.string().required().description('Mailer Host'),
  // MAILER_PASSWORD: Joi.string().required().description('Mailer password'),
  // MAIL_FROM: Joi.string().required().description('Mail From'),
  // ADMIN_EMAIL: Joi.string().required().description('Admin Email'),
  // TOKEN_EXPIRY: Joi.string().required().description('JWT Expiry'),
  // GOOGLE_CLIENT_ID: Joi.string().required().description('Google app Client ID'),
  // GOOGLE_CLIENT_SECRET: Joi.string().required().description('Google app Client Secret'),
  // GOOGLE_CALLBACK_URL: Joi.string().required().description('Google Auth Callback url'),
  BASE_URL: Joi.string().required().description('Base url')
  // HUBSPOT_ACCESS_TOKEN: Joi.string().required().description('hubspot token'),
  // HUBSPOT_ACCESS_APIURL: Joi.string().required().description('hubspot api url'),
  // OTP_EXPIRY: Joi.string().required().description('OTP Expiry')
  // APPLE_CLIENTID: Joi.string().required().description("APPLE_CLIENTID"),
  // APPLE_TEAMID: Joi.string().required().description("APPLE_TEAMID"),
  // APPLE_KEYID: Joi.string().required().description("APPLE_KEYID"),
  // APPLE_CALLBACK: Joi.string().required().description("APPLE_CALLBACK"),
  // APPLE_KEYFILE_PATH: Joi.string().required().description("APPLE_KEYFILE_PATH"),
})
