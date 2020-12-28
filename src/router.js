import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component:()=>import("@/components/Login.vue")
  },
  {
    path:'/home',
    name:'home',
    component:()=>import("@/components/Home.vue")
  },
  {
    path:'/bksy',
    name:'bksy',
    component:()=>import("@/components/bksy.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
