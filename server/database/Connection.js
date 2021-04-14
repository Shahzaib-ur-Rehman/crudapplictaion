const mongoose=require('mongoose');

const connectDB= async ()=>{
    try {
        const con=await mongoose.connect(process.env.MONGODB_URI,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log(`MongoDB Connected To Host ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB;