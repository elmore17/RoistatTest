import Vue from 'vue'
import Router from 'vue-router'
import MainWeb from '@/components/MainWeb'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainWeb',
      component: MainWeb,
    }
  ]
})
