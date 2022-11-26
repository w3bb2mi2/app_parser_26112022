const express = require('express');
const fileUpload = require("express-fileupload")


const app = express();
app.use(express.static(__dirname + "/public"));
app.use(fileUpload({}));
const fileController = require("./controllers/fileControoler");
const mainController = require('./controllers/mainController');

app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.get("/", (req, res) => {
    // res.sendFile("./pages/index.html")
})
app.post("/test", fileController.uploadFile)
app.post("/test2", mainController.index)

app.listen(3000, () => {
    console.log("Service has been started")
})

