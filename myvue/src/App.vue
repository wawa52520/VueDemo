<template>
  <div id="app">
<!--    <Login/>-->
<!--    <router-link to="/content">content页面</router-link>-->
<!--    <router-link to="/main">main页面</router-link>-->
<!--    <router-link to="/login">login页面</router-link>-->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from "./components/Login";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
