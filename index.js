const express = require("express");
const app = express();

// app.get()
// app.post()
// app.put()
// app.delete()

const courses = [
  { id: 1, name: "course 1" },
  { id: 2, name: "course 2" },
  { id: 3, name: "course 3" }
];

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//(req, res = route handler function)

//you can have mulitple posts in a route
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("this was not found");
  res.send(course);
  // send a 404 error
});

//////PORT//////
const port = process.env.PORT || 3010;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
