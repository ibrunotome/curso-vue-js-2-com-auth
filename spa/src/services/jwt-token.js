import SessionStorage from './session-storage';
import { Jwt } from "./resources";

export default {
    get token() {
        return SessionStorage.get('token');
    },
    set token(value) {
        SessionStorage.set('token', value);
    },
    accessToken(email, password) {
        Jwt.accessToken(email, password).then((response) => {
            this.token = response.data.token;
        });
    }
}