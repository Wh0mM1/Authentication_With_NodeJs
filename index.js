const app=require('./app');
const db=require('./config/db');
const port = 3000;
const userModel=require('./models/user.model')


app.get('/',(req,res)=>{
    res.send("hello nihil");
});

app.listen(port,()=>{
    console.log('Server Listening on port http://localhost:3000');
});