<template>
  <div id="app" class="bg-dark text-light">
    <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h2>Omtentamen 2 i Webbsystem - mars 2021</h2>
      </div>
    </div>
    <div class="row">
      
      <div class="col-md-2">
        <div id="nav" class="m-2 p-2 ">
          <div class="btn-group-justified">
          <router-link to="/MoviesGrades" class="btn btn-block btn-info m-2">Betyg</router-link>
          <router-link to="/Statistics" class="btn btn-block btn-info m-2">Statistik</router-link>
          </div>
        </div>
        <div class="col-md-10"></div>
      </div>
    </div>
    <div class="row">
     <div class="col-md-12">
       <router-view  class="my-4 p-2"/>
     </div>
   </div>
   <div class="row">
      <div class="col-md-12">      
          <div class="text-left m-2">
            Susanne Österholm
          </div>  
      </div>
   </div>
   </div> 
  </div>
  
</template>


