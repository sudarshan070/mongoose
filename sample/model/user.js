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
