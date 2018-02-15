import Vue from 'vue';
import './filters';
import AppComponent from './components/App.vue';
import TimeListComponent from './components/TimeList.vue';
import store from './store';
import VueRouter from 'vue-router';

require('popper.js/dist/umd/popper');
require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

Vue.use(VueRouter);

const routesMap = [
    {
        path: '/times',
        component: TimeListComponent
    }
];

const router = new VueRouter({
    routes: routesMap
});

let meuVue = new Vue({
    router,
    el: '#app',
    components: {
        'app': AppComponent
    },
    store
});