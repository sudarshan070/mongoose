// Answer here for tasks.md

// Q1 Answer here...
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

// Q2 Answer here...
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
  },
  age: {
    type: String,
    default: 0,
  },
});

// Q3 Answer here...
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    minlength: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Q4 Answer here...
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var address = new Schema({
  village: String,
  cuty: String,
  state: String,
  pin: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Q5 Answer here...

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var address = new Schema(
  {
    village: String,
    cuty: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: Number,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", address);

// Q6 Answer here...

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      minlength: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    favourites: [String],
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);

// Q7 Answer here...

// user.js
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /@/,
    },
    age: {
      type: Number,
      required: true,
      min: 12,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

// app.js
// Require
//  var express = require("express");
// var mongoose = require("mongoose");
// var PORT = process.env.PORT || 3000;

// // User model
// var User = require("./model/user");

// // connect database
// mongoose.connect(
//   "mongodb://localhost:27017/dayFive",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     console.log("Conected", err ? err : true);
//   }
// );

// // Instent express app
// var app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // routs

// app.post("/", (req, res, next) => {
//   User.create(req.body, (err, data) => {
//     if (err) return next(err);
//     res.json({ data });
//   });
// });

// // 404
// app.use((req, res, next) => {
//   res.statusCode = 404;
//   res.send("Page not  found");
// });




// // Listener
// app.listen(PORT, console.log("Server Started on Port " + PORT));

// // Q10 Answer here...

// // app.get("/users/:id", (req, res, next) =>{
// //     req.body.id = req.params.id
// //     User.findOne( (err, user) =>{
// //         if (err)  return next(err)
// //         res.json({user})
// //     })
// // })

// app.get("/users/:id", (req, res, next) => {
//   req.body.id = req.params.id;
//   User.findById(req.body.id, (err, user) => {
//     if (err) return next(err);
//     res.json({ user });
//   });
// });

// app.get("/users/:id/edit", (req, res, next) => {
//   req.body.id = req.params.id;
//   User.find((err, user) => {
//     if (err) return next(err);
//     res.json({ user });
//   });
// });

// // Q11 Answer here...

// app.put("/users/:id", (req, res, next) => {
//   User.updateOne(req.body, (err, data) => {
//     if (err) return next(err);
//     res.json({ data });
//   });
// });

// app.put("/users/:id", (req, res, next) => {
//   User.update(req.body, (err, data) => {
//     if (err) return next(err);
//     res.json({ data });
//   });
// });

// app.put("/users/:id", (req, res, next) => {
//   User.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true },
//     (err, data) => {
//       if (err) return next(err);
//       res.json({ data });
//     }
//   );
// });


// // Q12 Answer here...
// app.delete("/users/:id", (req, res, next) => {
//   User.findByIdAndDelete(req.params.id, (err, data) => {
//     if (err) return next(err);
//     res.send(data.name + " Deleted");
//   });
// });
