import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NewBook from '@/components/NewBook'
import Catalog from '@/components/Catalog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/NewBook',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
