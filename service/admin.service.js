/* The service folder contains the functions for CRUD operations
*/

const AdminModel = require('../models/admin.model'); // import database model as AdminModel

class AdminService{
    static async registerAdmin( name, phoneNumber, email, password){
        
        try {
            const createAdmin = new AdminModel(name, phoneNumber, email, password);
            return await createAdmin.save();
        } catch (error) {
            
        }
    }
}

module.exports = AdminService;