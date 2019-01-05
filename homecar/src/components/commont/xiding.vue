<template>
	<div>
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

<style>
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
</style>