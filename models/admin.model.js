const mongoose = require('mongoose');
const db = require('../configuration/db') // importing the database created

const { Schema } = mongoose; // extracting schema object from mongoose

// ctreate an admin schema with name, phone no., email and password
const adminSchema = new Schema(
    {
        name:{
            type: String,
            require: [true, "Enter name"]
        },
        
        phoneNumber:{
            type: String,
            require: [true, "Enter phone number"]
        },

        email:{
            type: String,
            lowercase: true,
            unique: true,
            require: [true, "Enter Admin E-mail"]
        },

        password:{
            type: String,
            require: [true, "Enter password"]
        },


    },
)

/* Within the initial database created and imported as 'db'
   create a database model with collection of admin which uses the adminSchema above
*/
const AdminModel = db.model('admin', adminSchema);

module.exports = AdminModel; // export database model