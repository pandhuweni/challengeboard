<template>
  <div id="app">
    <Toolbar></Toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
	import Toolbar from './components/Toolbar'
	export default {
	  name: 'app',
	  components:{
	    Toolbar
	  }
	}
</script>

<style>
</style>
