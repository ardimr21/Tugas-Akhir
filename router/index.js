import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/DataLatih',
    name: 'DataLatih',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataLatih.vue')
  },
  {
    path: '/Bantuan',
    name: 'Bantuan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Bantuan.vue')
  },
  {
    path: '/Identifikasi',
    name: 'Identifiaksi',
    component: () => import(/* webpackChunkName: "about" */ '../views/Identifikasi.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
