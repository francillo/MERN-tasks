const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose}=require('./database');

const app = express();

// Settings
app.set('port',process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks',require('./routes/task.routes'));

// Statics files
// console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')))

// Starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})

/* …or push an existing repository from the command line
git remote add origin https://github.com/francillo/MERN-tasks.git
git branch -M main
git push -u origin main */