const {
   MongoClient,
   ObjectID
} = require('mongodb');
// import {MongoClient, ObjectID} from 'mongodb'

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err)
      return console.log(`unable to connect to db`);
   console.log(`connected to db`);

   db.collection('Todos').
   find().
   count().
   then((count) => {
      console.log(`Todos ${count}`);
   }).catch((err) => {
      console.log(`${err}`);
   })
   // db.close();
})