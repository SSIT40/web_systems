import axios from 'axios';
const url = 'http://localhost:3000/grades'; //hårdkodat!!!
//const url = '/grades';

class GradesService {
    
    static async getGrades(movienbr) {
        try {
            let res = await axios.get(`${url}/${movienbr}`);
            return res.data;
        }
        catch(err) {
            return err;
        }
    }

    static async insertGrade(gradeobject) {
        return (await axios.post(url, {grade: gradeobject}));
    }

}

export default GradesService;