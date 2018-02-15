import Vue from 'vue';
import Vuex from 'vuex';
import {TimeModel} from './time-model';
import JwtToken from './services/jwt-token';
import {Time} from './services/resources';

Vue.use(Vuex);

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
        Time.query().then(response => {
            let times = response.data.map(element => new TimeModel(element.id, element.nome, element.escudo));
            context.commit('set-times', times);
        });
    },
    'login'(context, {email, password}) {
        return JwtToken.accessToken(email, password);
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