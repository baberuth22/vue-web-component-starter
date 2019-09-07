<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <VueWebComponent msg="Welcome to Your Vue.js App with Web Components!" />
  </div>
</template>

<script>
import VueWebComponent from './components/VueWebComponent'

export default {
  name: "app",
  components: {
    VueWebComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
