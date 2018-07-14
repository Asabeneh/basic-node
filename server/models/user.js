const mongoose = require('mongoose');

const User = mongoose.model('User', {
    email:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    password:{
        type:String
    }
});

// const newUser = new User({
//     // email:'asabeneh@gmail.com',
//     // password:'Asab2169598'
// });

// newUser.save().then((doc)=>{
// console.log(JSON.stringify(doc,undefined,4))
// },(e) => {
//     console.log(e);
    
// })

module.exports = {
    User
}