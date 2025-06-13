import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const totalLetters = (req.body["fName"] + req.body["lName"]).length + 1;
  console.log(totalLetters);
  res.render("index.ejs", { numberofLetters: totalLetters });
});

app.listen(port, () => {
  console.log(`The server is listening in the port: ${port}`);
});
