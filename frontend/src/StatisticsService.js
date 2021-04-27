import axios from 'axios';
const url = 'http://localhost:3000/statistics'; //hårdkodat!!!
//const url = '/grades';


class Stat
{
    constructor(title, totgrades, avggrade)
    {
        this.title = title;
        this.totgrades = totgrades;
        this.avggrade = avggrade;
    }
}

class StatisticsService {

    static async getStats() {
        try {
            let movies = await axios.get(`${url}`);
            let stats = [];
            let stat;
            let title;
            let totgrades = 0;
            let avggrade = 0;
        
            for (let i = 0; i < movies.data.length; i++) {
                //const element = movies[i];
                console.log("filmer nära frontend: ", movies.data[i]);

                // stats[]{title, totgrades, avggrade}
                
                let gradetot = 0;
                totgrades = 0;

                // get all grades of one movie
                let grades = await axios.get(`${url}/${i+1}`);    
                console.log("grades: ", grades.data);
                grades.data.forEach(row => {
                    gradetot += row.grade;
                    totgrades++;
                });

                title = movies.data[i].title;
                avggrade = (gradetot/totgrades);                

                stat = new Stat(title, totgrades, avggrade);
                stats.push(stat);
            }

            // det som returneras till .vue filen
            return stats;
        }
        catch(err) {
            return err;
        }
    }

    static async getGrades(movienbr) {
        try {
            let res = await axios.get(`${url}/${movienbr}`);
            return res.data;
        }
        catch(err) {
            return err;
        }
    }
}

export default StatisticsService;



