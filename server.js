var express = require("express");
var fs = require("fs");
var app = express();
const Brainfuck = require("brainfuck-node");
const brainfuck = new Brainfuck();

app.set("view engine", "ejs");

app.listen(8080, function () {
  console.log("Server running");
});

app.get("/", (req, res) => {
  const bf = fs.readFileSync(
    "./index.bf",
    { encoding: "utf-8" },
    (err, data) => {
      if (!err) {
        return data;
      }
    }
  );
  res.render("index", { mail: brainfuck.execute(bf, "mail").output, src: bf });
});
