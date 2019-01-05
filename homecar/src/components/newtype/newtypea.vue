<template>
	<div>
		{{id}}	
	</div>
</template>

<script>
	export default {
		data(){
			return{
				news:[],
				id:""
			}
		},
		watch:{			
			$route:{
				handler(n){
					console.log(n);
					this.id = n.params.id;
					this.getData();
				},
				immediate:true
			}
		},
		methods:{
			getData(){
				this.$jsonp(`http://cre.mix.sina.com.cn/api/v3/get?cateid=1&cre=tianyi&mod=${this.id}&merge=3&statics=1&length=20&up=1&down=0&fields=media&_=1543809052894`).then((res)=>{
   	  			console.log(res)
           
   	  			this.news = res.data.filter((item,index)=>{  //1.	取数据
   	  			 	return index<15;
   	  			 })
   	  			})
			}
			
		}
	}
</script>

<style>
</style>