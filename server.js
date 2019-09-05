require('dotenv').config();
var cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const app = express();

//ROUTES
const marvelRoutes = require('./routes/api/marvel');

//MiddleWare
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello world')
});


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('dist'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    })
}


//USE ROUTES
app.use('/api/marvel', marvelRoutes);


const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log( `Server running on port ${port}` );
});