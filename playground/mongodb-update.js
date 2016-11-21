const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server.');        
    }

    console.log('Connected to mongodb');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('582caa4a50b3b1d28dc8ce3c')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log('Result:', result);
    // })


     db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('582b67b2728bcc27559b6529')
    }, {
        $set: { name: 'Kurt' }, 
        $inc: { age: 1 }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log('Result:', result);
    })

    //db.close();
});