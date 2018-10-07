import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import Send from '@/components/Send'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
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
    }
  ]
})
