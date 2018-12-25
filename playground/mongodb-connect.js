// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err) {
      return console.log('Unable to connect to Mongo DB server')
    }
    console.log('Connected to Mongo db server')
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
      text:'somthig working',
      completed: false

    }, (err, result) => {
      if(err) {
        return console.log('Unable to insert todo', err)
      }

      console.log(JSON.stringify(result.ops, undefined, 2))

    })

    client.close()
})
