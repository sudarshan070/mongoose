// Require
var express = require("express");
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;

// User model
var User = require("./model/user");

// connect database
mongoose.connect(
  "mongodb://localhost:27017/dayFive",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log("Conected", err ? err : true);
  }
);

// Instent express app
var app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routs

app.post("/", (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) return next(err);
    res.json({ data });
  });
});

app.get("/", (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) return next(err);
    res.json(data);
  });
});

app.get("/users/:id", (req, res, next) => {
  req.body.id = req.params.id;
  User.findOne((err, data) => {
    if (err) return next(err);
    res.json({ data });
  });
});

app.put("/users/:id", (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => {
      if (err) return next(err);
      res.json({ data });
    }
  );
});

app.delete("/users/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) return next(err);
    res.send(data.name + " Deleted" );
  });
});


// app.delete("/:id", (req, res, next) => {
//   var userId = req.params.id;
//   User.findByIdAndDelete(userId, (err, deleteUser) => {
//     if (err) return next(err);
//     res.send(deleteUser.name + "Deleted");
//   });
// });

// 404
app.use((req, res, next) => {
  res.statusCode = 404;
  res.send("Page not  found");
});

// Listener
app.listen(PORT, console.log("Server Started on Port " + PORT));
