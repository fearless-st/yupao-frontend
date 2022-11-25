<template>
  <div id="teamPage">
    <van-button type="primary" @click="doJoinTeam">加入队伍</van-button>
    <team-card-list :teamList="teamList"/>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import TeamCardList from "../components/TeamCardList.vue";

const router = useRouter();

//跳转到加入队伍页
const doJoinTeam = () => {
  router.push({
    path: "/team/add"
  })
}

const teamList = ref([]);

onMounted(async () => {
  const res = await myAxios.get("/team/list");
  if (res?.code === 0) {
    teamList.value = res.data;
  } else {
    Toast.fail("队伍加载失败，请刷新重试");
  }
})
</script>

<style scoped>

</style>