import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content'
// import Main from '../components/Main'
import Login from '../components/Login'

import UserList from '../view/user/List'
import UserProfile from '../view/user/Profile'
import Main from "../view/Main"


//安装路由
Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      //路由路径
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: '/user/list/:id',
          name: 'list',
          component: UserList,
          props:true
        }, {
          path: '/user/profile/:id',
          name: 'profile',
          component: UserProfile
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
