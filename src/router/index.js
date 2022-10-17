import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import Contact from '../views/Contact/Contact.vue'
import Introduction from '../views/Intro/Introduction.vue'
import Cart from '../views/Cart/Cart.vue'
import Login from '../views/Login/Login.vue'
import News from '../views/News/News.vue'
import Other from  '../views/Other/Other.vue'
import Children from '../views/Children/Children.vue'
import ProductDetail from '../views/ProductDetail/ProductDetail.vue'
import Admin from '../views/admin/Admin.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Contact
  },
  {
     path:'/product/:id',
     name:'product',
     component: ProductDetail
  },
  {
    path :'/intro',
    name : 'Introduction',
    component: Introduction
  },
  {
    path :'/cart',
    name : 'Cart',
    component: Cart
  },
  {
      path :'/login',
      name : 'Login',
      component: Login
    
  },
  {
    path: '/news',
    name :'news',
    component: News
  },
{
  path : '/other',
  name :'Other',
  component: Other
},
{
    path : '/children',
    name :'Children',
    component: Children
},
{
  path : '/admin',
  name :'Admin',
  component: Admin
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
