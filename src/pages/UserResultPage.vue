<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList||userList.length<1" description="搜索结果为空" />
</template>
<script setup>
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import qs from "qs";
import UserCardList from "../components/TeamCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);//存放用户列表

onMounted ( async ()=>{     //异步调用
  const userListData = await myAxios.get('/user/search/tags',{
    params: {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize: function(params){
        // return qs.stringify(params,{arrayFormat:'repeat'})
        return qs.stringify(params,{indices: false})
      }
    }
  })
      .then(function (response){
        console.log('/user/search/tags succeed',response);
        Toast.success('请求成功!');
        return response?.data;  //返回数据  ?.可选链操作符，避免数据为null或undefined时报错
      })
      .catch(function (error){
        console.error('/user/search/tags error',error);
        Toast.fail('请求失败!');
      })
  // console.log(userListData)
  if(userListData){
    userListData.forEach(user => {
      if(user.tags){
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData;
  }
})

// const mockUser = ref({
//   id: 1,
//   userName: 'tianber',
//   userAccount: 'tianber',
//   profile: 'tianber的个人简介，全栈工程师，加油加油加油！！！！！',
//   gender: '男',
//   phone: '234234',
//   email: '324242342@qq.com',
//   planetCode: '981',
//   avatar: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/logo.png',
//   createTime: new Date().toDateString()
// })



</script>

<style scoped>

</style>