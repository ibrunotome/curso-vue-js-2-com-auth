<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Campeonato brasileiro série A - 2016</h3>
                <router-link class="btn btn-primary" :to="{name: 'time.list'}">Ver tabela</router-link>
                <router-link class="btn btn-success" :to="{name: 'time.jogo'}">Ver jogo</router-link>
                <router-link class="btn btn-primary" :to="{name: 'time.zona'}">Ver zona</router-link>
                <br><br>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    export default {};
</script>