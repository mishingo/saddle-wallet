import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import Send from '@/components/Send'
import Currency from '@/components/Currency'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/send',
      name: 'send',
      component: Send
    },
    {
      path: '/currency',
      name: 'currency',
      component: Currency
    }
  ]
})
