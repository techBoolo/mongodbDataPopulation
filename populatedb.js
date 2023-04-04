// > populating a collection from the json file
// > Usage populatedb --import / --delete collectionName dataFile
//
import fs from 'node:fs'
import connectDB, { getDB } from './config/db.js'
const args = process.argv.slice(2)

if(args[0] === '--import' && args.length < 3) {
  console.log(`Usage: node populatedb --op collection [dataPath]`);
  process.exit(1)
} else if(args.length < 2) {
  console.log(`Usage: node populatedb --op collection [dataPath]`);
  process.exit(1)
}

const [ operation, collection, dataFile ] = args

await connectDB()

const Model = getDB().collection(collection) 
if(operation === '--import') {
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'))
  await importData(Model, data)
} else if (operation === '--delete') {
  await deleteData(Model)
} else {
  console.log('unknown operation, available operations are --import or --delete');
}
    
async function importData (Model, dataFile) {
  try {
    await Model.insertMany(dataFile) 
    process.exit()
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}

async function deleteData (Model) {
  try {
    await Model.deleteMany({})
    process.exit()
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
}
