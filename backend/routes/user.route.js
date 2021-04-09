const express = require("express");
const userRoute = express.Router();

let UserModel = require("../models/User");

// route get user data all
userRoute.route("/").get((req, res, next) => {
  UserModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// route create user
userRoute.route("/create-user").post((req, res, next) => {
  UserModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Edit User data
userRoute.route("/edit-user/:id").get((req, res, next) => {
  UserModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update User data
userRoute.route("/update-user/:id").put((req, res, next) => {
  UserModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body, // set new data to database
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("User successfully updated ");
      }
    }
  );
  
});

// Delete User
userRoute.route("/delete-user/:id").delete((req, res, next) => {
  UserModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = userRoute;
