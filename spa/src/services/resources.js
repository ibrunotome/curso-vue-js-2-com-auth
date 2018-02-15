import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export class Jwt {
    static accessToken(email, password) {
        return Vue.http.post('http://localhost:8000/api/login', {
            email,
            password
        })
    }
}