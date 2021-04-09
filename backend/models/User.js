const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// model userSchema
let userSchema = new Schema(
  {
    // files
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("User", userSchema);
