const fileControoler = require("./fileControoler");

class Save2Db{
    index(req, res){
        try {
            
        } catch (error) {
            return res.status(400).json({message:"Save2Db"});
        }
    }
}
module.exports = new Save2Db()