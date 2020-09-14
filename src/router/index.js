import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Sobre from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Contato from '../components/Contato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
