<template>
  <div id="app">
    <AppToolbar></AppToolbar>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
	import AppToolbar from './components/Toolbar'
	import AppFooter from './components/Footer'
	export default {
	  name: 'app',
	  components:{
	    AppToolbar, AppFooter
	  }
	}
</script>

<style>
</style>
