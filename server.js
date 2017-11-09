const Koa = require("koa");
const static = require("koa-static");
const bodyParser = require("koa-bodyparser");
const ejs = require("koa-ejs");
const path = require("path");

const app = new Koa();

const logger = require("./middlewares/logger");
const handler = require("./middlewares/handler");
const router = require("./middlewares/router");

const commander = require("./lib/commander");
const error = require("./lib/error");

// commandline
commander();

// middlewares
// official
app.use(static(__dirname + "/public"));
app.use(bodyParser());
ejs(app, {
  root: path.join(__dirname, "view"),
  layout: "template",
  viewExt: "html",
  cache: false,
  debug: false
});
// logger
app.use(logger());
// handler
app.use(handler());
// router
app.use(router());

// error
app.on("error", error());

// start server
app.listen(3000);
console.log("> server start");
