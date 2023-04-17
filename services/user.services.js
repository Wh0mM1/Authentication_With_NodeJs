const UserModel=require('../models/user.model')

class UserService{
    static async registerUser(email,password){
        try{
            const creatUser=new UserModel({email,password});
            return await creatUser.save();
        }
        catch(error){
            throw error;
        }
    }
}
module.exports=UserService;