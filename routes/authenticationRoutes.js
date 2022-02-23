const mongoose = require("mongoose");
const Account = mongoose.model("accounts");
const argoni2i = require("argon2-ffi").argon2i;
const crypto = require("crypto");
module.exports = app => {

	// routes
	app.post('/auth/login', async (req, res) => {
		console.log("auth method");
		/*	const { REusername, REpassword } = req.body;*/
		REusername = req.body.REusername;
		REpassword = req.body.REpassword;
		if (REusername == null || REpassword == null) {
			res.send("Empty ");
			return;
		}
		var userAccount = await Account.findOne({ username: REusername });
		if (userAccount!= null) {
		argoni2i.verify(userAccount.password,REpassword).then(async (success)=>{
			if(success){
				userAccount.lastAuhentication=Date.now();
				await userAccount.save();
				res.send(userAccount);
				return
			}
			else
			{
				res.send("Invalid cerdiational ");
				return;
			}
		})
		}
		
	})


app.post('/auth/signup', async (req, res) => {
	console.log("auth method");
	/*	const { REusername, REpassword } = req.body;*/
	REusername = req.body.REusername;
	REpassword = req.body.REpassword;
	if (REusername == null || REpassword == null) {
		res.send("Empty");
		return;

	}
	var userAccount = await Account.findOne({ username: REusername });
	if (userAccount == null) {
		//create new account 
		console.log("attempting to create new account..")

		//generate a unique access token
		crypto.randomBytes(32, async function(err,salt){
			if(err){
				console.log(err);
				return;
			}
			accountSalt=salt;
			var hashedPassword = await argoni2i.hash(REpassword,salt)
			var newAccount = new Account({
				username: REusername,
				password: hashedPassword,
				salt:accountSalt,
				lastAuhentication: Date.now(),
			})
			await newAccount.save();
			res.send(newAccount);
			return;
		})


	}
	else
	res.send("Error  account prob exist");
})
}