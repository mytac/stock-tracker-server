/***
 * @Description:
 * @Author: mytac
 * @Date: 2020-04-11 21:40:19
 */
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require('body-parser'); //用于req.body获取值的

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var payRouter = require("./routes/pay");

const db = require("./db/db");
const db_user = require("./db/db_user");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());



app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/pay", payRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

db.connect()
  .then((connect) => {
    global.connection = connect;
    console.info("connected!!");
  })
  .catch((err) => {
    console.error("error in database connection");
    console.log("err", err);
  });

module.exports = app;