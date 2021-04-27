import axios from 'axios';
const url = 'http://localhost:3000/movies'; //hårdkodat!!!
//const url = '/movies';

class MoviesService {
    
    static async getMovie(movienbr) {
        try {
            let res = await axios.get(`${url}/${movienbr}`);
            console.log("service got: ", res.data);
            let movie = res.data;
            return movie;
        }
        catch(err) {
            return err;
        }
    }
}

export default MoviesService;



