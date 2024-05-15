const AdminService = require('../service/admin.service')

exports.register = async(req, res, next)=>{
    try {
        const { name, phoneNumber, email, password } = req.body

        const successRes = await AdminService.registerAdmin(name, phoneNumber, email, password)

        res.json({status: 200, successMessage: "Successfully Registered"})

    } catch (error) {
        
    }
}