const express = require('express');
const app = express();
const port = 3000; 


app.use("/hello", (req, res) => {
  res.send("hello how are you!!");
});

app.use("/secret", (req, res) => {
  res.send("How do you find me ? Are you god ??");
}); 

app.use("/", (req, res) => {
  res.send("hello Welcome to the '/' end point!!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});