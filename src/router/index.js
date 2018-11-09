import Vue from 'vue'
import Router from 'vue-router'
import SearchModal from '../app/question/search-modal/search-modal.component.vue'
Vue.use(Router)

const Login = resolve => require(['../app/Login.vue'], resolve)
const Home = resolve => require(['../app/home/Home.vue'], resolve)
const Questions = resolve => require(['../app/question/list/list.component.vue'], resolve)
//const SearchModal = resolve => require(['../app/question/search-modal/search-modal.component.vue'], resolve)
const QuestionCreate = resolve => require(['../app/question/create/create.component.vue'], resolve)
const QuestionDetail = resolve => require(['../app/question/detail/detail.component.vue'], resolve)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions,
      children: [
        { path: ':search', component: SearchModal, name: 'search' }
      ]
    },
    {
      path: '/question-create',
      name: 'question-create',
      component: QuestionCreate
    },
    {
      path: '/question-detail',
      name: 'question-detail',
      component: QuestionDetail
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (window.isLogin || to.name === 'login') {
    next()
  } else {
    next('/login')
  }
})

export default router
