<template>
  <div id="app">
    <div>
      <router-view></router-view>
    </div>
    <EntrarComponent></EntrarComponent>
  </div>
</template>

<script >
import EntrarComponent from './components/EntrarComponent.vue'

export default {
  name: 'App',
  components: {
    EntrarComponent,
  }
}
</script>

<style>
#app{
  
}
@import './assets/css/style.css';
</style>
