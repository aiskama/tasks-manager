import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import Tasks from '@/views/TasksView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/tasks', component: Tasks },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
