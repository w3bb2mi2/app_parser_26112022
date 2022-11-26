const fileControoler = require("./fileControoler");

class Save2Db{
    index(){
        const data = fileControoler.uploadFile()
        console.log(data)
    }
}
module.exports = new Save2Db()