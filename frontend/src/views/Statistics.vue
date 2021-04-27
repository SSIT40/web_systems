<template>
 <div class="container bg-light">
        <div class="row">
            <div class="col-md-12">
                <p class="text-dark font-weight-bold mt-2">Betyg:</p>
                <table class="table text-dark">
                    <thead>
                        <tr>
                            <th>Film</th>
                            <th>antal vitsord</th>
                            <th>medelvitsord</th>
                        </tr>
                    </thead>
                    <tr v-for="(s,index) in Stats" :key="index">
                        <td>{{s.title}}</td>
                        <td>{{s.totgrades}}</td>
                        <td>{{s.avggrade}}</td>
                    </tr>
                </table>
            </div>
        </div>          
    </div>
</template>

<script>
import StatisticsService from '../StatisticsService.js';

export default {

    created(){
        window.addEventListener("load", this.onWnidowLoad);
    },

    name: 'MoviesGradesView',
    data: function() {
        return {
            Stat:{
                title:'',
                totgrades:null,
                avggrade:null
            },
            Stats: []
        }
    },

    methods: {
        async onWnidowLoad(){
            console.log("Window OnLoad event");
            this.Stats={
                title:'',
                totgrades:null,
                avggrade:null
            }
            this.Stats = await StatisticsService.getStats();
        },
    } 
}
</script> 