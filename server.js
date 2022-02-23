const { request } = require("express");
const express = require("express");

const app = express();
const port = 13756;
//setting up Db
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://frigider:FRIGIDER100@narugame.wn1pv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(x) => {
		console.log(x);
		app.listen(port, () =>
		{
			console.log("listening on " + port);
		});

	}
);
app.use(express.json());

//setup database models
require("./model/Account");
require("./routes/authenticationRoutes")(app);

//app.listen(port, () => {
//	console.log("listening on " + port);
//});
 