const FileReader = require("filereader");
const xml2js = require("xml2js");


class FileController{
    async uploadFile(req, res){
        try {
            const file = req.files.file.data;
            //const type = file.name.split("."); 
            let parser = new xml2js.Parser();
            let obj = await parser.parseStringPromise(file).then(result=>result);


            return res.status(200).json(obj)  

        } catch (error) {
            console.log(error)
            return res.status(400).json({message:"Upload Error"});
        }
    }
}
module.exports = new FileController();