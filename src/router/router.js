import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/login.vue'
import mainRoutes from './main-routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: 'common' */ '../views/layout'),
      children: mainRoutes
    }
  ]
})
