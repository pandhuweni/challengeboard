<template>
	<md-layout md-align="center" md-gutter="24">
		<Board title="Title Goes Here" subtitle="Subtitle goes here" deadlineDate="10 Jan 2018" prize="2,000,000" enrolledCount="23"></Board>
		<Board title="Title Goes Here" subtitle="Subtitle goes here" deadlineDate="10 Jan 2018" prize="2,000,000" enrolledCount="23"></Board>
	</md-layout>
</template>
<script>
	import Board from './Board'
	export default {
	  name: 'board-layout',
	  components: {Board}
	}
</script>
<style scoped>
	span{
		background-color: yellow !important;
	}
	.small-icon{
		font-size: 16px;
	}
	.md-button{
		color: rgba(0,0,0,.5);
	}
	.btn-enroll{
		color: #df6055;
	}
	.btn-small{
		background-color: #4caf50 !important;
		color: #fff;
		padding: 0px 16px !important;
		font-size: 12px;
		min-height: 0px !important;
		min-width: 0px !important;
	}
</style>
