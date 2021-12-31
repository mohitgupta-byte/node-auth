const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: { type: String, default:0  , enum: ["admin", "seeonlyadmin" , "orderplacer", "inventorymanagement", "third party"] },
		
	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model
