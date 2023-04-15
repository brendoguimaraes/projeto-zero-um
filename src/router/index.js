import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/about',
    name: 'about', //nome resumido da rota
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
