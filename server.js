import express from "express";
// import { configDotenv } from "dotenv";
// require('dotenv').config();


const app = express();

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Math Joke",
      content: "Why was math book sad? Too many problems.",
    },
    {
      id: 2,
      title: "Coffee Joke",
      content: "How does coffee file police report? Gets mugged.",
    },
    {
      id: 3,
      title: "Plant Joke",
      content: "What did lettuce say to celery? Quit stalking!",
    },
    {
      id: 4,
      title: "Ghost Joke",
      content: "Why did ghost go to party? Heard it's 'boo-tiful'!",
    },
    {
      id: 5,
      title: "Computer Joke",
      content: "Why did computer go to therapy? Emotional baggage!",
    },
  ];
  res.send(jokes);
});

app.get("/api/priya",(req, res)=>{
  res.send("hello")
})

const port = process.env.PORT_URL || 3000;
//agr env file hai toh port vha se chlega otherwise 3000
//pr chlega

app.listen(port, () => {
  console.log(`server at ${port}`);
});
