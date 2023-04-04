import { MongoClient } from 'mongodb'
import envConfig from './envConfig.js'
const mongodbUrl = envConfig.MONGODB_URL
const dbName = envConfig.DB_NAME

const mongoClient = new MongoClient(mongodbUrl)

let db
const connectDB = async () => {
  if(db) return
  try {
    process.on('exit', async () => {
      if(mongoClient.topology.isConnected()) {
        console.log('closing the db');
        await mongoClient.close()
      }
    })
    await mongoClient.connect()
    console.log('connected to db')
    db = mongoClient.db(dbName)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

export const getDB = () => {
  return db
}

export default connectDB
