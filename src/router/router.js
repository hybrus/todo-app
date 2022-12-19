import { createRouter, createWebHistory } from 'vue-router';
import todo from '../components/todo';

const routes = [
    { path: '/', component: todo }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;