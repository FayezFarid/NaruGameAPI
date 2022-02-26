const mongoose = require("mongoose");
const { Schema } = mongoose;
const accountSchema = new Schema({
    username: String,
    password: String,
    salt: String,
    lastAuhentication: Date,
    Userstats:{
        ad: Number,
        ap: Number,
        def_ad: Number,
    }
});
mongoose.model("accounts", accountSchema);