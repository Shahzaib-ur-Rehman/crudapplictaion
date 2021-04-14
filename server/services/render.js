const axios=require('axios');

exports.homeRoute= async (req,res)=>{
    try {
        
        const myUsers=await axios.get('http://localhost:3000/api_user');
        res.render('index',{
            users:myUsers.data
        })
    } catch (error) {
        res.status(500).send(error);
    }
    
}

exports.addUser=(req,res)=>{
    res.render('user');
}

exports.updateUser= async (req,res)=>{
    try {
        const userData=await axios.get('http://localhost:3000/api_user',{params:{_id:req.query._id}});
        console.log(userData);
        res.render('update_user',{
            user:userData.data
        });
    } catch (error) {
        res.send(error);
    }
    
}