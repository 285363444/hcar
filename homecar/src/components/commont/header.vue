<template>
	<div class="header">
		<div class="first-line">
			<div class="con1">
				<router-link to="#" class="car">汽车之家</router-link>
			</div>
			<div class="con2">
				<i class="fa fa-search one"></i>
				<input type="text" placeholder="蒙迪欧  |  锐界" /><i class="fa fa-camera "></i>
			</div>
			<div class="con3">
				<router-link to="#">
					<i class="fa fa-mobile fa-2x two"></i>
				</router-link>
			</div>
			<div class="con3">
				<router-link to="#">
					<img src="https://s.autoimg.cn/mass/avatar.png" />
				</router-link>
			</div>
		</div>
		<div class="second_line">
			<ul>
				<li v-for="(item,index) in list" >
					<span>
						<router-link :to="item.name" :class="{'active':curIndex===index}"   @click.native="find(index)">
							{{item.title}}
						</router-link>
					</span>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
	export default {
		data(){			
			return {
				curIndex:0,
				name:"",
				list:[
					{
						name:"/commont/main",
						title:"首页"				
					},
					{
						name:"/commont/findcar",
						title:"找车"
					},
					{
						name:"/commont/talk",
						title:"论坛"
					},
					{
						name:"/commont/oldcar",
						title:"二手车"
					},
					{
						name:"/commont/server",
						title:"服务"
					}
				]
			}
			
		},		
		methods:{
			find(n){
				this.curIndex=n;
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	$c:25;
	.header{
		width: 100%;
		height: 88/$c+rem;
		background: #2873FF;
		padding: 10/$c+rem 15/$c+rem;
		.first-line{
			display: flex;
			
			.car{
				line-height: 30/$c+rem;
				color: white;
				font-size: 18/$c+rem;
				font-weight: 1000;
			}
			
			.con2{
				background: white;
				width: 175/$c+rem;
				height: 30/$c+rem;
				border-radius: 5/$c+rem;
				margin-left: 15/$c+rem;
					input{
						border: 0;
						width: 120/$c+rem;
						margin-left: 7/$c+rem;
					}
					.one{
						margin: 7/$c+rem 0 0 5/$c+rem;
						color: skyblue;
					}
					
					
			}
			.con3{
				margin-left: 15/$c+rem;
					img{
						width: 32/$c+rem;
						height: 32/$c+rem;
					}
					.two{
						color: white;
					}
			}
			
			
		}
		.second_line{
			margin-top: 15/$c+rem;
			overflow: hidden;
			
			ul{
				width: 100%;
				height: 32/$c+rem;
				display: flex;
				li{
					width: 20%;
					height: 32/$c+rem;
					a{
						color: #CCCCCC;	
						font-size: 16/$c+rem;	
						font-weight: 800;				
					}
					.active{
						color: #FFFFFF;	
						font-weight: 800;	
					}
				}
			}			
		} 
	}
</style>