import { createRouter, createWebHistory } from 'vue-router'
import Main from './views/Main.vue';
import Home from './views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    }
  ],
});

export default router;