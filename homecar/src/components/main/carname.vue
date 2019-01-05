<template>
	<div class="box">
		<div v-for="(item,index) in list" class="w" @click="find(item.id)">
			
				<div class="im">
					<img :src="item.logo" alt="" />
				</div>
				<p>{{item.name}}</p>				
			
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				id:"",
				list:[]
			}
		},
		mounted(){
			this.$jsonp("https://m.autohome.com.cn/getbrandhot?v=1&cityId=440100").then((res)=>{
				this.list = res.filter((item,index)=>{
					
					this.id = item.id
					//console.log(this.id)
					return index<9
				})
				
			
			})
		},
		methods:{
			find(n){
				//console.log(11)				
				this.$router.push("/newtype/newtypea/"+n)				
			}
		}
	}
</script>

<style lang="scss" scoped>
$sc:25;
	.box{
		display: flex;
		width: 100%;
		height: 155/$sc+rem;
		flex-flow:row wrap;
		.w{
			width:20%;
			img{
				width: 50px;
				height: 50px;
			}
		}
	}
</style>