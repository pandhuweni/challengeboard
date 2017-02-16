<template>
	<div class="phone-viewport">
		<md-whiteframe md-elevation="3">
		  <md-toolbar>
		    <md-button class="md-icon-button" @click="toggleLeftSidenav">
		      <md-icon>menu</md-icon>
		    </md-button>

		    <h2 class="md-title">Challenge Board</h2>
		  </md-toolbar>
		 </md-whiteframe>

		  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
		    <md-toolbar class="md-account-header"  md-theme="red">
		      <md-list class="md-transparent" >
		        <md-list-item class="md-avatar-list" >
		        	<!--Login == True-->
		          <!-- <md-avatar class="md-large">
		            <img src="https://placeimg.com/64/64/people">
		          </md-avatar>
		          <div class="md-list-text-container">
		            <span>John Doe</span>
		            <span>johndoe@email.com</span>
		          </div> -->

		          <md-avatar class="md-large">
		            <img src="/static/account-circle.png">
		          </md-avatar>
		          <div class="md-list-text-container">
		            <span>Login
			            <br>
			            <small>For getting full access</small>
		            </span>
		          </div>
		        </md-list-item>
		      </md-list>
		    </md-toolbar>

	    <md-list>
	      <md-list-item @click="openBoard">
	        <md-icon>home</md-icon> <span>Board</span>
	      </md-list-item>

	      <md-list-item @click="openTrophyDeck">
	        <md-icon>starts</md-icon> <span>Trophy Deck</span>
	      </md-list-item>

	      <md-list-item @click="$refs.sidebar.toggle()">
	        <md-icon>power_settings_new</md-icon> <span>Logout</span>
	      </md-list-item>
	    </md-list>
	  </md-sidenav>
	</div>
</template>
<script>

export default {
  name: 'toolbar',
  components: {

  },
   methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
		openBoard(){
			this.$refs.leftSidenav.toggle();
			this.router.push({name: 'home'})
		},
		openTrophyDeck(){
			this.$refs.leftSidenav.toggle();
		},
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
}
</script>
<style scoped>
.md-avatar{
	background-color: #efefef;
}
.md-account-header{
	background-image: url('/static/material-red.png')
}
.md-toolbar{
	margin-bottom: 24px;
}
</style>
