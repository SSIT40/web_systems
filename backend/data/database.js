//modul för att läsa och skriva databasen 
class Movie
{
    constructor(title, published)
    {
        this.title=title;
        this.published=published;
    }
}
class Grade
{
    constructor(grader, grade, comment)
    {
        this.grader = grader;
        this.grade = grade;
        this.comment = comment;
    }
}



let path = require('path');
let sqlite3 = require('sqlite3').verbose();
let db_name = path.join(__dirname, 'MoviesDb.db');


//läsa en film
exports.GetMovie = (movienbr, callback) => {
    console.log(movienbr);
    let movie;

    let db = new sqlite3.Database(db_name);

    let sql = 'select title, published from Movies where id = ?';

    console.log("movie?");

    db.get(sql, [movienbr], (err, row) =>{

        if(err || !row)
        {
            console.log("ERROR!", err);
            callback(err, null);
        }
        else
        {
            movie = new Movie(row.title, row.published);
            console.log(movienbr, movie);
            callback(null, movie);
        }
    });
    db.close();
}

//läsa alla grades för en film
exports.GetGrades = (movienbr, callback) => { 
    console.log(movienbr);
    let grades = [];
    let gradeOut;

    let db = new sqlite3.Database(db_name);

    let sql = 'select grader, grade, comment from Grades where movie_nbr = ?';

    console.log("grades?");

    db.all(sql, [movienbr], (err, rows) =>{

        if(err || !rows)
        {
            console.log("ERROR!", err);
            callback(err, null);
        }
        else
        {
            rows.forEach(row => {
                gradeOut = new Grade(row.grader, row.grade, row.comment);
                grades.push(gradeOut);
            });

            //console.log(movienbr, grades);
            callback(null, grades);
        }
    });
    db.close();
}



exports.AddGrade = (gradeIn, callback) => {
    let db = new sqlite3.Database(db_name);

    //i gradeIn finns objektet grade var de finns sparat data
    console.log("test om info kommer hit: ", gradeIn);
    //plockar ut och delar på innehållet från objektet som skickas hit
    let movie_nbr = gradeIn.grade.movie_nbr;
    let grader = gradeIn.grade.grader;
    let grade = gradeIn.grade.grade;
    let comment = gradeIn.grade.comment;

    let sql = 'insert into Grades values(?, ?, ?, ?)';
    
    db.run(sql, [movie_nbr, grader, grade, comment], (err) => {
        if(err)
        {
            //console.log("ERROR i sparande ");
            callback("ERROR: " + err.message);
        }
        else
        {
            //console.log("nu sparas ", gradeIn.grade);
            
            callback("ADDED");
        }
    });
}

// LÄSA ALLA FILMER
exports.GetMovies = (callback) => { 

    let movies = [];
    let movie;

    let db = new sqlite3.Database(db_name);

    let sql = 'select * from Movies';

    db.all(sql, (err, rows) => {

        if(err || !rows)
        {
            console.log("ERROR!", err);
            callback(err, null);
        }
        else
        {
            rows.forEach(row => {
                movie = new Movie(row.title, row.published);
                //console.log("Filmen som sätts in: ", movie);
                movies.push(movie);
            });
            //console.log("alla filmer: ", movies);

            callback(null, movies);
        }
    });
    db.close();
}