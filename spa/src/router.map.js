import TimeListComponent from './components/TimeList.vue';
import TimeJogoComponent from './components/TimeJogo.vue';
import TimeZonaComponent from './components/TimeZona.vue';

export default [
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