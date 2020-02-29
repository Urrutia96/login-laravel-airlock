import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Login from './components/Login';

Vue.use(VueRouter);

const routes = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home, 
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
    mode: 'history'
});

export default routes;