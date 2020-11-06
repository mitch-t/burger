const express = require("express");
const PORT = process.env.PORT || 3001;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('views/images'));
// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//app.get("/", function(req, res) {
//  res.json(path.join(__dirname, "public/index.html"));
//});
// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

