import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
const DB_NAME = process.env.DB_NAME

export default {
  PORT,
  MONGODB_URL,
  DB_NAME
}
