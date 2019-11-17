const express = require("express");
const app = express();

// app.get()
// app.post()
// app.put()
// app.delete()

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.get("/api/courses", (req, res) => {
  res.send([0, 1, 2]);
});

app.listen(3010, () => {
  console.log("listening on port 3010");
});
