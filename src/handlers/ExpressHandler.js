const express = require('express')
const app = express()
const port = 3000
const Get = require('../services/Get');
const MongooseConnection = require('../configuration/MongooseConnection')

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/categories', async (req, res) => {
    let get = new Get();
    console.log('printing categories ');
    res.send(await get.getCategories());
    return res;
})  
  
app.listen(port, () => {
    let mongooseConnection = new MongooseConnection();
    mongooseConnection.initializeConnection()
      console.log(`Example app listening at http://localhost:${port}`)
})