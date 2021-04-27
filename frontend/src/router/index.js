import Vue from 'vue'
import VueRouter from 'vue-router'
import MoviesGrades from '../views/MoviesGrades.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MoviesGrades
  },{
    path: '/MoviesGrades',
    name: 'MoviesGrades',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MoviesGrades
  },
  {
    path:'/Statistics',
    name: 'Statistics',
    component: () => import(/* webpackChunkName: "measures" */ '../views/Statistics.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
