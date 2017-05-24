<template lang='pug'>
#app
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
            msg: 'Hello world!2'
        }
    }
}
</script>

<style>
.example {
  color: red;
}
</style>
