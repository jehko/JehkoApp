import { createRouter, createWebHistory } from 'vue-router'
import store from './store';
import Main from './views/Main.vue';
import Home from './views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/') {
    if (!store.getters.getToken || store.getters.getToken === '') {
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;