<template>
    <div class="container">
        <div class="row"
             v-if="isAuth">
            <div class="col-md-12">
                <h3>Campeonato brasileiro série A - 2016</h3>
                <h6>Olá {{ user.name }}</h6>
                <router-link class="btn btn-primary"
                             :to="{name: 'time.list'}">Ver tabela
                </router-link>
                <router-link class="btn btn-success"
                             :to="{name: 'time.jogo'}">Ver jogo
                </router-link>
                <router-link class="btn btn-primary"
                             :to="{name: 'time.zona'}">Ver zona
                </router-link>
                <router-link class="btn btn-primary"
                             :to="{name: 'auth.logout'}">Logout
                </router-link>
                <br><br>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    import store from '../store';

    export default {
        created() {
            if (this.isAuth) {
                store.dispatch('load-times');
            }
        },
        computed: {
            isAuth() {
                return store.state.auth.check;
            },
            user() {
                return store.state.auth.user ? store.state.auth.user : {'name': ''};
            }
        },
        watch: {
            isAuth(value) {
                if (value) {
                    store.dispatch('load-times');
                }
            }
        }
    };
</script>