let express=require('express');
const router =express.Router();

let bodyParser = require('body-parser');
router.use(bodyParser.json()); 


let db = require('../data/database');


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



router.post('/', async(req,res) => {
    db.AddGrade( req.body, (err, gradeIn) => {
        gradeIn = req.body.grade;
        if(err || req.body == null)
        {
            res.send(null);
            console.log("error", err);
        }
        else
        {
            //console.log("sent", req.body);
            //console.log("eller", gradeIn);
            res.json(req.body.grade);
        }
    });
});

module.exports = router;