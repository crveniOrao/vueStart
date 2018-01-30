<template>
 <div>
     <h1>About</h1>
     <h4>{{msg}}</h4>
 </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'This is your about page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
