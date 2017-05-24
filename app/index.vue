<template lang='pug'>
#app
    .test
    .example {{ msg }}
    Page(:page=3, :pages=13)
</template>

<script>
import Page from '../components/Page'
export default {
    name: 'index',
    components: {Page},
    data () {
        return {
            msg: 'Hello world!'
        }
    }
}
</script>

<style>
.example {
    color: red;
}
</style>
