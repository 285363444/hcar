<template>
	<div>
		<div class="sub" 
			 v-infinite-scroll="loadMore"
  			 infinite-scroll-disabled="loading"
  			 infinite-scroll-distance="10">			
			<div v-for="item in list" class="sub1">
				<h3>{{item.title}}</h3>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return {
				list:[],
				n:10,
				loading:true
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			loadMore(){
				this.getData()
				console.log(this.n)
			},
			getData(){
				if(this.n === 60){
					Toast({
					  message: '没有更多信息了',
					  position: 'bottom',
					  duration: 2000
					});
					return;
				}
				this.loading = true
				var t = Toast({
							  	iconClass: 'fa fa-spinner',
							  	position: 'middle',
							  	duration: -1
							});
				this.$jsonp("http://cre.mix.sina.com.cn/api/v3/get?_=1543803494741").then((res)=>{	
					console.log(res)
   	  		 	 this.list = res.data.filter((item,index)=>{
   	  		 	 		return index<this.n
   	  		 	 		console.log(item.title)
   	  		 	 })
   	  		 	 this.loading = false
   	  		 	 this.n+=10
   	  		 	 t.close()
   	  		})
			}
		}
	}
</script>

<style lang="scss" scoped>
	$c:25;
	.sub1{
		width: 65%;
		height: 135/$c+rem;				
	}
</style>