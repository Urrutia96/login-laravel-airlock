
require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex';

Vue.use(Vuex);
import Layout from './components/Layout'
import routes from './Routes';
import StoreData from './store'
import { iniciar } from './helper';

const store = new Vuex.Store(StoreData);

iniciar(store, routes);

const app = new Vue({
    el: '#app',
    router: routes,
    store: store,
    components: {
        Layout
    }
});
