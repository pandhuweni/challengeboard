<template>
	  <md-layout md-flex="40">
		    <md-card md-with-hover>

  			<md-card-area>
				  <md-card-header>
				    <md-avatar>
				      <img src="/static/propic.JPG" alt="People">
				    </md-avatar>

				    <div class="md-title">{{title}}</div>
				    <div class="md-subhead">{{subtitle}}</div>
				  </md-card-header>

				  <md-card-media md-ratio="16:9">
				    <img src="/static/lomba.png" alt="People">
				  </md-card-media>

					<md-card-header>

			    <md-card-header-text>
			      <div class="md-title">{{title}}</div>

							<md-layout md-align="left" md-gutter="24">
								<md-layout md-flex="70">
									<div class="md-subhead">{{deadlineDate}}</div>
								</md-layout>
								<md-layout md-flex="30">
						      <div class="md-subhead" >
										<md-icon class="small-icon">check_circle</md-icon>
										{{enrolledCount}} Enroll
									</div>
								</md-layout>
							</md-layout>
							<br>
							<h3 class="md-subheading">Rp {{prize}}</h3>
			    </md-card-header-text>

			  </md-card-header>


				  <md-card-content>
				    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
				  </md-card-content>
				</md-card-area>

				<md-card-content>
					<md-layout md-align="left" md-gutter="24">
						<md-layout md-flex="70">
							<md-content>
						  	<div class="md-subheading">Batas Enroll</div>
								<div class="md-subhead">{{deadlineDate}}</div>
							</md-content>
						</md-layout>
						<md-layout md-flex="30">
							<md-button class="md-raised md-primary btn-small" disabled>
								Open
							</md-button>
						</md-layout>
					</md-layout>
			  </md-card-content>
				  <md-card-actions>
				    <md-button class="btn-enroll">Enroll</md-button>
				    <md-button>Learn More</md-button>

						<span style="flex: 1"></span>
				  </md-card-actions>
				</md-card>
		  </md-layout>
</template>
<script>
	export default {
	  name: 'board',
	  props: ['title', 'subtitle', 'deadlineDate', 'enrolledCount', 'prize', 'textPreview'],
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
