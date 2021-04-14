const express=require('express');
const services=require('../services/render');
const route=express.Router();
const controller=require('../controller/controller');

route.get('/' ,services.homeRoute);
route.get('/user',services.addUser);
route.get('/update-user',services.updateUser);


// API 
route.post('/api_user',controller.createUser);
route.get('/api_user',controller.findUser);
route.put('/api_user/:id',controller.updateUser);
route.delete('/api_user/:id',controller.deleteUser);



module.exports=route;