const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const createError = require('http-errors');

const app = express();

// MongoDB connection
mongoose.connect('mongodb+srv://danielokoro:Wack0-23@cluster0.ez5cc.mongodb.net/yourDatabaseName?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB:", err));

// Middleware to serve static files and parse JSON data
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
const partsRouter = require('../routes/parts');
const indexRouter = require('../routes/index');
app.use('/', indexRouter);
app.use('/parts', partsRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: err.message,
    error: err
  });
});

module.exports = app;
