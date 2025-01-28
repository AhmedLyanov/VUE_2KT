//main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Home from '../src/pages/home.vue'
import Users from '../src/pages/users.vue'
import Profile from '../src/pages/profile.vue'
import Login from '../src/pages/login.vue'

const routes = createRouter({
    routes: [
        { path: '/', name: "home", component: Home },
        { path: '/users', name: "users", component: Users },
        { path: '/login', name: "login", component: Login },
        { path: '/profile', name: "profile", component: Profile }
    ],
    history: createWebHistory()
})

const app = createApp(App);
   app.use(routes);
   app.mount('#app');
