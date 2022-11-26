//定义一些路由
import Index from "../pages/Index.vue";
import Team from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
import UserResultPage from "../pages/UserResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";
import TeamUpdatePage from "../pages/TeamUpdatePage.vue";
import UserTeamJoinPage from "../pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "../pages/UserTeamCreatePage.vue";
import UserUpdatePage from "../pages/UserUpdatePage.vue";

const routes = [
    { path: '/', component: Index },
    { path: '/team', component: Team },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage },
    { path: '/user/list', component: UserResultPage },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/login', component: UserLoginPage },
    { path: '/user/update', title: '更新信息', component: UserUpdatePage },
    { path: '/team/add', component: TeamAddPage },
    { path: '/team/update', component: TeamUpdatePage },
    { path: '/user/team/join', title: '加入队伍', component: UserTeamJoinPage },
    { path: '/user/team/create', title: '创建队伍', component: UserTeamCreatePage },

]

export default routes;