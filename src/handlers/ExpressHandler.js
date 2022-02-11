const express = require('express')
const app = express()
const port = 3000
const Get = require('../services/Get');
const MongooseConnection = require('../configuration/MongooseConnection')
const _ = require('lodash');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/categories', async (req, res) => {
    let get = new Get();
    console.log('printing categories ');
    res.send(await get.getCategories());
    return res;
})  
  
app.get('/recentlyAddedProducts', async (req, res)=>{
    let get = new Get();
    console.log('printing recenly added products');
    res.send("yes");
    return res;
});

app.post('/productDetailsByOrderId',jsonParser, async (req, res) =>{
  let get = new Get();
  let payload = _.isObject(req) ? req : JSON.parse(req);
  console.log('Printing productDetailsByOrderId', payload.body);
  res.send('NO');
  return res;
});

app.listen(port, async () => {
    let mongooseConnection = new MongooseConnection();
    await mongooseConnection.initializeConnection()
      console.log(`Example app listening at http://localhost:${port}`)
})