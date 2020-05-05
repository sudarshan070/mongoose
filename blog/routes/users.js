var express = require("express");
var router = express.Router();

var Article = require("../model/user");

// create article
router.get("/", (req, res, next) => {
  Article.find({}, (err, articles) => {
    if (err) return next(err);
    res.render("listarticles", { articles });
  });
});

router.get("/new", (req, res, next) => {
  res.render("createArticle");
});

router.post("/new", (req, res, next) => {
  Article.create(req.body, (err, data) => {
    if (err) return next(err);
    res.redirect("/article");
  });
});

router.get("/:id", (req, res, next) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) return next(err);
    res.render("singleArticle", { article });
  });
});

router.get("/:id/edit", (req, res, next) => {
  console.log("update");
  Article.findById(req.params.id, (err, article) => {
    if (err) return next(err);
    console.log(article);
    res.render("updateArticle", { article });
  });
});

router.post("/:id/edit", (req, res, next) => {
  Article.findByIdAndUpdate(req.params.id, req.body, (err, article) => {
    res.redirect("/article");
  });
});

router.get("/:id/delete", (req, res, next) => {
  console.log("in delete");
  Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
    if (err) return next(err);
    res.redirect("/article");
  });
});

router.get("/:id/likes", (req, res, next) => {
  var id = req.params.id;
  Article.findByIdAndUpdate(
    id,
    { $inc: { like: 1 } },
    { new: true },
    (err, articleLikes) => {
      if (err) return next(err);
      res.redirect(`/article/${id}`);
    }
  );
});

module.exports = router;
