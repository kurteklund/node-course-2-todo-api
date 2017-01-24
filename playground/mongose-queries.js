const {ObjectID} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '587f590786121876631b357f';
var uid = '58354f91268e99a123cc3204';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By ID: ', todo);
// }).catch(e => {
//     console.log(e);
// });

User.findById(uid).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By ID: ', user);
}).catch(e => {
    console.log(e);
});