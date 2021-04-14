require('dotenv').config()
const express=require('express');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const port=process.env.PORT || 8080;
const route=require('./server/routes/router');
const services=require('./server/services/render');
const connectDB=require('./server/database/Connection')
const app=express();
app.use(morgan('tiny'));
connectDB();
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use('/css', express.static(path.resolve(__dirname,'assets/css')));
app.use('/img', express.static(path.resolve(__dirname,'assets/img')));
app.use('/js', express.static(path.resolve(__dirname,'assets/js')));
app.use(route);



app.listen(port,()=>{console.log(`Server is running on http://localhost:${port}`)});