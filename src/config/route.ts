//定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/Team', component: Team },
    { path: '/User', component: User },
]

export default routes;