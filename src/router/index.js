import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ShopingCartView from '../views/ShopingCartView.vue'
import SuccessView from '../views/SuccessView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/cart',
    name: 'cartView',
    component: ShopingCartView
  },
  {
    path: '/success',
    name: 'successView',
    component: SuccessView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
