// create web server
// 1. import express
const express = require("express");
// 2. create a router object
const router = express.Router();
// 3. import model
const Comment = require("../models/comment");
// 4. import controller
const commentController = require("../controllers/commentController");
// 5. import middleware
const auth = require("../middleware/auth");

// 6. create routes
// 6.1. get all comments
router.get("/", commentController.getAllComments);
// 6.2. get comment by id
router.get("/:id", commentController.getCommentById);
// 6.3. create comment
router.post("/", auth, commentController.createComment);
// 6.4. update comment
router.put("/:id", auth, commentController.updateComment);
// 6.5. delete comment
router.delete("/:id", auth, commentController.deleteComment);

// 7. export router
module.exports = router;