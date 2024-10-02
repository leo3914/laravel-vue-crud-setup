import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../pages/About.page.vue";
import HomePage from "../pages/Home.page.vue";


const routes = [
    {
        path : "/",
        name : "Homepage",
        component: HomePage
    },
    {
        path : '/about',
        name : "AboutPage",
        component : AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
