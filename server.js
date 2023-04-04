import http from 'http'
import app from './app.js'
import envConfig from './config/envConfig.js'

const PORT = envConfig.PORT || 3001
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('server is running');
  console.log("Usage: node populatedb --import / --delete collectionName dataFile")
})
