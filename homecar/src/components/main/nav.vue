<template>
	<div class="box">
		<!--<ul class="oul">
			<li v-for="(item,index) in lists" class="liner">
				<router-link :to="item.title" class="lin">
					{{item.name}}
				</router-link>
			</li>
		</ul>-->
		<div class="swiper-container">
    		<div class="swiper-wrapper w">
		        <div  v-for="(item,index) in lists"  class="swiper-slide a">
		        	<router-link :to="item.title">
						{{item.name}}
					</router-link>
		        </div>
		    </div>               
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper' 
	import "../../../node_modules/swiper/dist/css/swiper.css"
	export default {
		data(){
			return	{				
				lists:[
					{
						name:"起步买车",
						title:"/maiche"
					},
					{
						name:"原创",
						title:"/yuanchuang"
					},
					{
						name:"新能源",
						title:"/newneng"
					},
					{
						name:"车家号",
						title:"/carhome"
					},
					{
						name:"行业",
						title:"/hangye"
					},
					{
						name:"视频",
						title:"/video"
					},
					{
						name:"直播",
						title:"/zhibo"
					},
					{
						name:"小游戏",
						title:"/youxi"
					},
					{
						name:"旅行家",
						title:"/lvxingjia"
					}
				]
			}
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
			    slidesPerView : 'auto',
			    loop: false // 循环模式选项
			})        
		}
	}
</script>

<style lang="scss" scoped>
$c:25;
	.box{
		width: 100%;
		overflow: hidden;
		margin-top: 10px;
	} 	
		.a{
			width: auto;
			margin-left: 15px;
			a{
				font-size: 18px;
			}
		}
	
</style>