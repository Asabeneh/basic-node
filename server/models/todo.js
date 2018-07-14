const mongoose = require('mongoose');

const Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        maxlength:100,
        trim:true


    },
    completed:{
        type:Boolean,
        default:false

    },
    completedAt:{
        type:Number,
        default:null
    }
});

const newTodo = new Todo({
    text:'Something todo',
    completed:true,
    completedAt:Date.now()

});

// newTodo.save().then((doc) => {
//     console.log('Saved todo',doc);
    
// },(e) => {
//     console.log('Unable to save')
// })

// const otherTodo = new Todo({
//     text:'Teach a course  ',
//     // completed:false,
//     // completedAt:123
// });

// otherTodo.save().then((doc) =>{
//     console.log('Doc saved',doc)
// },(e) => {
//     console.log(e);
// })

// module.exports = {
//     Todo
// }

module.exports = {
    Todo,
}