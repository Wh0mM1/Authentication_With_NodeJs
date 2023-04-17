const mongoose=require('mongoose');

//to connect mongoDB (mention local ip address i.e 127.0.0.1)
const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newToDo').on('open',()=>{
    console.log('MongoDb Connected');
}).on('error',()=>{
    console.log("MongoDb connection error");
});

module.exports=connection;