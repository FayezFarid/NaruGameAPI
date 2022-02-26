const { request } = require("express");
const express = require("express");
const app = express();
const port = 13756;

var session = require("express-session");
//setting up Db
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://frigider:FRIGIDER100@narugame.wn1pv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(x) => {
		console.log(x);
		app.listen(port, () => {
			console.log("listening on " + port);
		});

	}
);
//middleware
app.use(express.json());
app.use(
	session({
		secret: "thisisasecret",
		saveUninitialized: false,
		resave: false
	}));

app.use(session({secret:";wlek;lrkw;ler,wme.,m.,wer",resave:false,saveUninitialized:true}));
//setup database models
require("./model/Account");
require("./Model/userstats");
require("./routes/playerStatsRoutes")(app);
require("./routes/authenticationRoutes")(app);
//listdatabase(mongoose);
/* async function listdatabase(client){
	const databaseList= await client.db.admin.listdatabase();
	console.log("data bases: ");
	databaseList.database.forEach(db => {
	console.log("-${db.name}"); 	
	});
} */

//app.listen(port, () => {
//	console.log("listening on " + port);
//});
