<template>
<div id="app">
    <div class="example">{{ msg }}</div>
</div>
</template>

<script>
export default {
  name: 'index',
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
