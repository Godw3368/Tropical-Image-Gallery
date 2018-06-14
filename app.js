var express                 = require("express"),
    app                     = express(),
    bodyParser              = require("body-parser"),
    mongoose                = require("mongoose");
   



mongoose.connect(process.env.DATABASEURL);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/", function(req, res){
    res.render("images/index");
});



app.get("/about", function(req, res){
    res.render("images/about");
});





app.listen(process.env.PORT, process.env.IP);