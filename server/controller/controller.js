const UserDB=require('../modal/model');


exports.createUser= async (req,res)=>{
    try {
        const newUser= new UserDB({
            name:req.body.Name,
            Email:req.body.email,
            Gender:req.body.gender,
            status:req.body.status
        })
       const user= await newUser.save();
       res.redirect('user'); 
    } catch (error) {
        res.status(400).send({message:'Form Not be Empty'})
    }
}


exports.findUser= async (req,res)=>{
    try {
        if (req.query._id) {
            const _id=req.query._id;
            const findUser= await UserDB.findById(_id);
            res.status(200).send(findUser);
        } else {
            const findUsers=await UserDB.find();
            res.status(200).send(findUsers);
        }
        
        
    } catch (error) {
        res.status(500).send({message:error.message || 'Error Accured While Retriving The Data From DB'});
    }
}


exports.updateUser= async (req,res)=>{
    try {
        const id=req.params.id;
        console.log(id)
        const userUpdate=await UserDB.findByIdAndUpdate(id,req.body,{useFindAndModify:false});
        res.status(200).send(userUpdate);
    } catch (error) {
        res.status(500).send({message:'Error Accured in Update User'})
    }
}



exports.deleteUser= async (req,res)=>{
    try {
        const id=req.params.id;
        const deleteUser=await UserDB.findByIdAndDelete(id);
        res.status(200).send('User Deleted');
    } catch (error) {
        res.status(500).send({message:"User Not Deleted May be User not Found in DB"});
    }
}
