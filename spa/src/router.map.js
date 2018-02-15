import TimeListComponent from './components/TimeList.vue';
import TimeJogoComponent from './components/TimeJogo.vue';
import TimeZonaComponent from './components/TimeZona.vue';
import LoginComponent from './components/Login.vue';

export default [
    {
        name: 'auth.login',
        path: '/login',
        component: LoginComponent
    },
    {
        name: 'time.list',
        path: '/times',
        component: TimeListComponent
    },
    {
        name: 'time.jogo',
        path: '/times/jogo',
        component: TimeJogoComponent
    },
    {
        name: 'time.zona',
        path: '/times/zona',
        component: TimeZonaComponent
    },
]