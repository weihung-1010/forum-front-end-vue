<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{name:'user', params: {id:user.id} }">
          <img
            src="https://images.chinatimes.com/newsphoto/2020-12-01/1024/20201201006541.jpg"
            width="140px"
            height="140px"
          />
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button v-if="user.isFollowed" @click.stop.prevent="removeFollowed(user)" type="button" class="btn btn-danger">取消追蹤</button>
          <button v-else @click.stop.prevent="addFollowed(user)" type="button" class="btn btn-primary">追蹤</button>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$yxZosXHDLO06AVWzuAe2O.YjS0BysH3OO7RQ5sFq65yP/2qinkvPK",
      isAdmin: true,
      image: null,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$21aqLpeCONTrdTb8QIKpX.gg/JnUnQ8kTXMWZrM8eo/6.dKBpwnOe",
      isAdmin: false,
      image: null,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$y3BLrfv3X8LDUPuaHB7JKOVRPJEnN1bLegyav7UuxNUXVh5cHq6j.",
      isAdmin: false,
      image: null,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data(){
    return {
      users:[]
    }
  },
  methods:{
    fetchUser(){
      this.users = dummyData.users
    },
    removeFollowed(user){
      user.isFollowed = false
    },
    addFollowed(user){
      user.isFollowed = true
    },
  },
  created(){
    this.fetchUser()
  }
};
</script>