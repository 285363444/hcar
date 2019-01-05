<template>
		<div  class="main">
			<header>
				<Header v-show="flag"></Header>
				<Xiding v-show="!flag"></Xiding>
			</header>
			<content>
				<router-view />
			</content>
		</div>
</template>

<script>
	import Header from "./header";
	import Xiding from "./xiding";
	
	export default {
		data(){
			return{
				flag:true
			}
		},
		components:{
			Header,
			Xiding
		},
		mounted(){
			
			let el =  document.querySelector(".main");
			
			window.addEventListener('DOMMouseScroll', this.handleScroll)
		},
		methods:{
			handleScroll(){
				 var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  console.log(scrollTop)
//console.log(window.innerHeight);	
			}
		}
		
	}
</script>

<style lang="scss" scoped>
$c:25;
	.main{
		position:fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y: scroll;
	}
	header{
		width: 100%;
		height: 88/$c+rem;
	}
	content{		
		top: 88/$c+rem;
		bottom: 0;
		left: 0;
		right: 0;				
	}
</style>