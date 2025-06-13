//module imports
import express from "express";
import bodyParser from "body-parser";

//global const
const app = express();
const port = 3000;
const blog = [
  {
    title: "Something is happening here",
    shortDescription:
      "There is something is going on here that is the short description here",
    mainDescription:
      "there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places,there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other placesthere is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places",
  },
  {
    title: "Something is happening here",
    shortDescription:
      "There is something is going on here that is the short description here",
    mainDescription:
      "there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places,there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other placesthere is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places",
  },
  {
    title: "Something is happening here",
    shortDescription:
      "There is something is going on here that is the short description here",
    mainDescription:
      "there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places,there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other placesthere is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places",
  },
  {
    title: "Something is happening here",
    shortDescription:
      "There is something is going on here that is the short description here",
    mainDescription:
      "there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places,there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other placesthere is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places",
  },
  {
    title: "Something is happening here",
    shortDescription:
      "There is something is going on here that is the short description here",
    mainDescription:
      "there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places,there is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other placesthere is so much thing is happening here, i am lost in words to explain this. so here is the longer version of what i am going to tell, brace yourselves. so this thing is happened before two months when i went to chennai there are som many building which can touch the sky . maybe i was just kidding but that the true in there. the entire gdp of tamilnadu is only used for the improvement of the chennai not any other places",
  },
];

//body parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { blog: blog, blogLength: blog.length });
});
app.get("/posting", (req, res) => {
  res.render("partials/posting.ejs");
});

app.post("/submit", (req, res) => {
  const { title, shortDescription, mainDescription } = req.body;
  blog.push({
    title: title,
    shortDescription: shortDescription,
    mainDescription: mainDescription,
  });

  res.render("index.ejs", { blog: blog, blogLength: blog.length });
});

app.get("/blog_post", (req, res) => {
  res.render("partials/blog.ejs");
});

app.listen(port, () => {
  console.log(`The server is listening to the port: ${port}`);
});
