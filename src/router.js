import { createRouter, createWebHistory } from 'vue-router';

import RandomPage from './components/pages/RandomPage.vue';
import InitialPage from './components/pages/InitialPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: InitialPage },
    { path: '/random', component: RandomPage },
  ],
});

export default router;
