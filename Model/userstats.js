const mongoose = require("mongoose");
const { Schema } = mongoose;
const userInformations = new Schema({
    _playerID:Object,
    ad: Number,
    ap: Number,
    def_ad: Number,
    
});
mongoose.model("userstats",  userInformations);