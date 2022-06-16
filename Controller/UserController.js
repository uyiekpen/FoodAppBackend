const UserSchema = require("../Database/UserDatabase")
const bcrypt = require("bcrypt")
const cloudinary = require("../utils/Cloudinary")
const jsonwebtoken = require("jsonwebtoken")

const getUser = async (req, res ) =>{
    try {
        const userdata = await UserSchema.find()
        res.status(200).json({
            message : "data found successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const getSingleUser = async (req, res ) =>{
    try {
        const userdata = await UserSchema.findById(req.params.id)
        res.status(200).json({
            message : "data found successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const CreateUser = async (req, res ) =>{
    try {
        const {username , email , password } = req.body
        const image = await cloudinary.uploader.upload(req.file.path)

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const userdata = await UserSchema.create({
            username , 
            email , 
            password: hash ,
            avatar: image.secure_url,
            avatarID : image.public_id,
        })

        res.status(200).json({
            message : "data created successfully...",
            data : userdata
        })

        
    } catch (err) {
        res.status(404).json(err.message)
    }
}

const SignInUser = async (req, res) =>{
    try{
        const {email, password} = req.body
        const userdata = await UserSchema.findOne({email})
        if(userdata){
            const checkpassword = await bcrypt.compare(password , userdata.password)

            if(checkpassword){
                const token = jsonwebtoken.sign({
                    _id : userdata._id},
                    process.env.SECRET_KEY,
                    {expiresIn: process.env.EXPIRES}
                    )

                    const {password, ...info} = userdata._doc
                    const data1 = userdata._doc

                    res.status(200).json({
                        message: "data updated successfully..",
                        data : {token, ...info}
                    })

            }else{
                res.status(404).json({message: "user not found"})
            }

           
    


        }else{
            res.status(404).json({message: "user not found"})
        }

      
    }catch(err){
        res.status(404).json(err.message)
    }
}
module.exports = {
    getUser,
    getSingleUser,
    CreateUser,
    SignInUser

}