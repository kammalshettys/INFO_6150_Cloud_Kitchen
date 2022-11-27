import Home from '../pages/Home/home'
import About from '../pages/About/about'
import Home2 from '../pages/Home/home'
import About2 from '../pages/About/about'

export const routeParam = [
    {
        role:"consumer",
        path:"/home",
        component:Home,
        isSignedIn:true,
        isConsumer:true,
        isCustomer:false
    },
    {
        role:"consumer",
        path:"/about",
        component:About,
        isSignedIn:true,
        isConsumer:true,
        isCustomer:false
    },
    {
        role:"customer",
        path:"/home",
        component:Home2,
        isSignedIn:true,
        isConsumer:true,
        isCustomer:false
    },
    {
        role:"consumer",
        path:"/about",
        component:About2,
        isSignedIn:true,
        isConsumer:true,
        isCustomer:false
    }

]