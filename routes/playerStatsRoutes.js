const mongoose = require("mongoose");
const userstats = mongoose.model("userstats");
module.exports = app => {
    app.get('/stats', async(req, res) => {
        if (!req.session.userAccount) {
            res.send("actualy empty");
        }
        else {
            console.log(req.session.userAccount._id);
            var newstat = new userstats({
                _playerID:req.session.userAccount._id,
                ad: 55,
                ap: 66,
                def_ad: 11,
			})
            await userstats.db.collection("StatsCollections").insertOne(newstat);
            res.send(newstat);
 
        }
    })
    app.post("/statsUpdate",async(req,res)=>{
        if(!req.session.userAccount){
            res.send("fatal error no session");
        }else{
            var myquery = { username:req.session.userAccount};
            var newvalues = { $set:Userstats={ad: 55,
                ap: 66,
                def_ad: 11, }};
                var userAccount = await userstats.db.collection("StatsCollections")
                .updateOne(myquery,newvalues,function(err,res){
                    if(err){throw err;return;}
                    console.log("updated ");
                });
           /*      userAccount.userstats={ad: 55,
                    ap: 66,
                    def_ad: 11,} */
               // await userAccount.save();
                res.send(req.session.userAccount);
        }
    })

}