//require files should go on the very top

const Joi = require("joi");
const express = require("express");
const app = express();

//adding middleware
app.use(express.json());

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

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  const result = Joi.validate(req.body, schema);
  //validation
  if (result.error) {
    //400 bad request
    res.status(400).send(result.error);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
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
