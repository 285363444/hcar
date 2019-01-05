import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Commont from "@/components/commont"
import Findcar from "@/components/findcar"
import Oldcar from "@/components/oldcar"
import Server from "@/components/server"
import Talk from "@/components/talk"
import Main from "@/components/main"
import Newtype from "@/components/newtype"
import Newtypea from "@/components/newtype/newtypea"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name:'main'}     
    },
    {
    	path:"/newtype",
    	component:Newtype,
    	name:"newtype",
    	children:[
    		{
		    	path:"/newtype/newtypea/:id",
		    	name:"newtypea",
		    	component:Newtypea
		    }
    	]
    },
    
    {
    	path:"/commont",
    	name:"commont",
    	component:Commont,
    	
    	children:[
    		{
    			path:"/commont/main",
    			name:"main",
    			component:Main   			   					   			
    		},
    		
    		{
    			path:"/commont/findcar",
    			name:"findcar",
    			component:Findcar
    		},
    		{
    			path:"/commont/talk",
    			name:"talk",
    			component:Talk
    		},
    		{
    			path:"/commont/oldcar",
    			name:"oldcar",
    			component:Oldcar
    		},
    		{
    			path:"/commont/server",
    			name:"server",
    			component:Server
    		}
    	]
    }
  ]
})
