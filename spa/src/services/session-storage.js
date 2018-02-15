export default {
    set(key, value) {
        window.sessionStorage.setItem(key, value);
        return this.get(key);
    },
    get(key, defaultValue) {
        return window.sessionStorage.getItem(key) || defaultValue;
    },
    setObject(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
        return this.getObject(key);
    },
    getObject(key) {
        return JSON.parse(window.sessionStorage.getItem(key) || null);
    },
    remove(key) {
        window.sessionStorage.removeItem(key);
    }
}