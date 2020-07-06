var express = require("express");
const bodyParser = require("body-parser");

const loginRoute = require("./routes/login");
var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.set("view engine", "pug");
app.set("views", "./views");

app.get('/',(req,res)=>res.render("index"));
app.use("/login", loginRoute);

const port = 3000;
app.listen(port, () => {
  console.log("Server listening on port " + port );
});


