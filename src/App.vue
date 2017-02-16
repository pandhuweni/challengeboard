<template>
  <div id="app">
    <Toolbar></Toolbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
	import Toolbar from './components/Toolbar'
	import Footer from './components/Footer'
	export default {
	  name: 'app',
	  components:{
	    Toolbar, Footer
	  }
	}
</script>

<style>
</style>
