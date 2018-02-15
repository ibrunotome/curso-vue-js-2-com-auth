import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import {Time} from './time';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
    times: []
};

const mutations = {
    'set-times'(state, times) {
        state.times = times;
    },
    update(state, time) {
        let index = state.times.findIndex(element => time.id === element.id);
        if (index !== -1) {
            state.times[index] = time;
        }
    },
};

const actions = {
    'load-times'(context) {
        Vue.http.get('http://localhost:8000/api/times').then(response => {
            let times = response.data.map(element => new Time(element.id, element.nome, element.escudo));
            context.commit('set-times', times);
        });
    },
    'login'(context, {email, password}) {
        Vue.http.post('http://localhost:8000/api/login', {email, password}).then((response) => {
           console.log(response.data.token);

        });
    }
};

export default new Vuex.Store({
    state,
    getters: {
        timesLibertadores: state => state.times.slice(0, 6),
        timesRebaixados: state => state.times.slice(16, 20),
    },
    mutations,
    actions
});