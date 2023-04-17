const userServices=require('../services/user.services');

exports.register = async(req,res,next)=>{
    try{
        //we fill get data from frontend in here
        const {email,password}=req.body;

        return successRes=await userServices.registerUser(email,password);

        res.json({status:true,success:"User Registered Successfully"});
    }catch(error)
    {
        throw error;
    }
}