const express = require('express');
const mongooose = require('mongoose');
const adminRouter = require('./Routes/admin');
const authRouter = require('./Routes/auth');
const productRouter = require('./Routes/products');
const userRouter = require('./Routes/user');
mongooose.set('strictQuery',true);
const PORT = 4000 || process.env.PORT;
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
const DB = "mongodb+srv://shivam:shivam@cluster0.uvhwpvr.mongodb.net/?retryWrites=true&w=majority";

mongooose.connect(DB).then(()=>{
    console.log("Connection was successful");
    
}
).catch((e)=>{
    console.log(e);
})

app.listen(PORT,'0.0.0.0', ()=>{
   console.log(`Server started at port ${PORT}`);
});
