 <template>
 <div class="container bg-light">
        <div class="row">
            <div class="col-md-12">
                <form action="" method="get" class="bg-secondary p-3">
                    <div>
                        Film nummer:
                        <input type="text" class="form-control w-25" v-model="id">
                        <input type="button" class="btn btn-info text-light font-weight-bold mt-2" value="Sök" @click="find">
                        
                    </div>
                </form>
                <div v-if="movie.title">
                    <p class="bg-secondary p-2 mt-3">
                        Film: {{movie.title}}
                    </p>
                    <p class="bg-secondary p-2">
                        Publicerad: {{movie.published}}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p class="text-dark font-weight-bold mt-2">Betyg:</p>
                <table class="table text-dark">
                    <thead>
                        <tr>
                            <th>betygsättare</th>
                            <th>vitsord</th>
                            <th>kommentar</th>
                        </tr>
                    </thead>
                    <tr v-for="(g,index) in grades" :key="index">
                        <td>{{g.grader}}</td>
                        <td>{{g.grade}}</td>
                        <td>{{g.comment}}</td>
                    </tr>
                </table>
            </div>
        </div>  
        <div class="row">
            <div class="col-md-12">
                <form action="" method="get" class="bg-secondary p-3">
                    <div>
                        Betygsättare:
                        <input type="text" class="form-control" v-model="grade.grader">  
                    </div>
                    <div>
                        Vitsord (0-5):
                        <input type="number" min="0" max="5" class="form-control" v-model="grade.grade">  
                    </div>
                   <div>
                        Kommentar:
                        <textarea cols="40" rows="3" class="form-control" v-model="grade.comment"></textarea> 
                    </div>
                    <div class="text-right">
                        <input type="button" class="btn btn-info text-light font-weight-bold mt-2" value="Spara" @click="save">
                    </div>
                </form>
            </div>
        </div> 
        
    </div>
</template>

<script>

import MoviesService from '../MoviesService.js';
import GradesService from '../GradesService.js';


export default {
    name: 'MoviesGradesView',
    data: function() 
        {
        return {
            id:null,
            movie: {
                id: null,
                title:'',
                published:null
            },
            grade:{
                movie_nbr:null,
                grader:'',
                grade:null,
                comment:''
            },
            grades: [],
        }
    },
    methods: {
        async save() {
            this.grade.movie_nbr=this.id;
            let msg = await GradesService.insertGrade(this.grade);
            alert(msg.data);
            this.grade={
                movie_nbr:null,
                grader:'',
                grade:null,
                comment:''
            }
            this.grades = await GradesService.getGrades(this.id); 
        },
       async find() {
           this.grade={
                movie_nbr:null,
                grader:'',
                grade:null,
                comment:''
            }
            this.movie = await MoviesService.getMovie(this.id);
            this.grades = await GradesService.getGrades(this.id);    
       }
    } 
}
</script>