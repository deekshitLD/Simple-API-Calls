import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Index from '@/components/Index'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: Edit
    },
  ]
})
