import TimeListComponent from './components/TimeList.vue';
import TimeJogoComponent from './components/TimeJogo.vue';
import TimeZonaComponent from './components/TimeZona.vue';
import LoginComponent from './components/Login.vue';

export default [
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/times',
        component: TimeListComponent
    },
    {
        path: '/times/jogo',
        component: TimeJogoComponent
    },
    {
        path: '/times/zona',
        component: TimeZonaComponent
    },
]