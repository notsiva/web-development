import express from "express";

const app = express();
const port = 3000;

function whatTypeOfDay() {
  var day = new Date();
  var today = day.getDate();
  var whatDay = "";
  var toDo = "";

  if (today < 5) {
    whatDay = "Weekday";
    toDo = "Its time to work lads";
  } else {
    whatDay = "Weekend";
    toDo = "Get some beer and get laid lads!";
  }
  return whatDay;
}

const whatType = whatTypeOfDay();

app.get("/", (req, res) => {
  res.render("index.ejs", {
    daytype: whatType,
    advice: "Its time for work lads!",
  });
});

app.listen(port, () => {
  console.log(`The server is listening to the port ${port}`);
});
