
let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(cors());

let movies = require('./routes/movies.js');
app.use('/movies', movies);
let grades = require('./routes/grades.js');
app.use('/grades', grades);
let statistics = require('./routes/statistics.js');
app.use('/statistics', statistics);

//app.use(express.static(__dirname + '/public/'));
//app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));

let port = process.env.port ||3000;
app.listen(port,() => console.log(`Server running on port ${port}`));
