// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import Board from './components/Board'
var VueRouter = require('vue-router')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Board, name: 'home'}
]

const router = new VueRouter({
  hashbang: false,
  mode: 'history',
  linkActiveClass: 'active',
  routes // short for routes: routes
})

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: 'white',
    accent: 'red',
  },
  red: {
    primary: 'red',
    accent: 'white'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
