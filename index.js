let express = require("express");
let app = new express();                                                                     
app.set("view engine", "ejs")

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.chi48m68g7t4.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "DonutPassw",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
knex
.select()
.from("venues")
.then((result) => {
res.render("index", {aConcerts: result});
});
});
app.listen(3000);
