import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Demo",
    seconds: new Date().getSeconds(),
    items: ["Apple", "Banana", "Orange", "Mango"],
    somehtml: "<em>Some text goes here</em>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`The server is listening to the port ${port}`);
});
