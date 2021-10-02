require('babel-register')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')('dev')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000


// MIDDLEWARE

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(morgan)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// CONNEXION A LA BASE DE DONNEES

mongoose.connect('mongodb+srv://joblack:Jolove141@cluster0-rmm0h.mongodb.net/technicaltestdb?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const usersRoutes = require('./routes/users')

app.use('/api/v1/users', usersRoutes)


app.listen(port, console.log('listen on port ' + port))
