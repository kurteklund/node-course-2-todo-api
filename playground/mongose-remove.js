const {ObjectID} = require('mongodb');

const {mongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '587f590786121876631b357f';
var uid = '58354f91268e99a123cc3204';

// Todo.remove({}).then(result => {
//     console.log(result);
// });

ToDo.findOneAndRemove({_id: ''}, )
Todo.findByIdAndRemove('5891cce12aff59d569d1d8dc').then(todo => {
    console.log(todo);
});