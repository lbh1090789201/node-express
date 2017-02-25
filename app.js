var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
// var sass = require('node-sass');
var sassMiddleware = require('node-sass-middleware');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'jade'); // 支持jade模板
// app.set('view engine', 'ejs'); // 支持ejs模板
//用ejs模版引擎时，使其支持.html后缀
app.engine('.html', ejs.__express);　//让ejs能够识别后缀为'.html'的文件
app.set('view engine', 'html'); // 使在调用render函数时能自动为我们加上'.html'后缀

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// adding the sass middleware(中间件)
app.use(
   sassMiddleware({
       src: __dirname + '/public',
       dest: __dirname + '/public',
       debug: true
   })
);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
