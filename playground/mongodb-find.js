const { MongoClient, ObjectID } = require('mongodb');

console.log(JSON.stringify(this, undefined, 2));
var queryName = 'Sanna';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server.');        
    }

    console.log('Connected to mongodb');

    db.collection('Users').find({
        name: queryName
    }).toArray().then(docs => {
        console.log('Todos!');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
        console.log('Unable to fetch undos.', err)
    });

    // db.collection('Todos').find().count().then(count => {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     console.log('Unable to fetch undos.', err)
    // });

    db.close();
});