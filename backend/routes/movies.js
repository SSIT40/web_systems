let express=require('express');
const router =express.Router();

let bodyParser = require('body-parser');
router.use(bodyParser.json()); 


let db = require('../data/database');


// läsa en film
router.get('/:movienbr', async(req, res) => {
    db.GetMovie(req.params.movienbr, (err, movie) => {
        if(err || movie == null)
        {
            res.send(null);
            console.log("error", err);
        }
        else
        {
            console.log("sent", movie.title);
            res.json(movie);
        }
        
    });
});


module.exports = router;