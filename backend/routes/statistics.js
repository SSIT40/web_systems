let express=require('express');
const router =express.Router();

let db = require('../data/database');

router.get('/', async(req, res) => {
    //get all movies
    db.GetMovies((err, movies) => {
        if (err || movies == null) 
        {
            res.send(null);
            console.log("ERROR", err);   
        }
        else
        {
            //console.log("got movies: ", movies);
            res.json(movies);
        }
    });
});

//get grades för en film
router.get('/:movienbr', async(req, res) => {
    db.GetGrades(req.params.movienbr, (err, grades) => {
        if(err || grades == null)
        {
            res.send(null);
            console.log("error", err);
        }
        else
        {
            //console.log("sent to frontend", grades);
            res.json(grades);
        }
    });
});

module.exports = router;