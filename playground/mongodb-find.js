const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()
console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err) {
      return console.log('Unable to connect to Mongo DB server')
    }
    console.log('Connected to Mongo db server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find(
    //   {_id: new ObjectID('5c2270c1a211f414398a7ff8')}
    // ).toArray().then((docs) => {
    //   console.log('Todos')
    //   console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //   console.log('Unable to fatch todos', err)
    // })

    db.collection('Todos').find().count().then((count) => {
      console.log('Todos')
      console.log(`Todos count: ${count}`)
    }, (err) => {
      console.log('Unable to fatch todos', err)
    })


    // client.close()
})
