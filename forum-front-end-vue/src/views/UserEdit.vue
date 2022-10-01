<template>
  <div class="container py-5">
    <form @after-submit="handleAfterSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  user: {
    id: 1,
    name: "root",
    email: "root@example.com",
    isAdmin: true,
    image:"https://images.chinatimes.com/newsphoto/2020-12-01/1024/20201201006541.jpg",
    Followers: [],
    FollowerCount: 0,
    isFollowed: false,
  },
};
export default {
  data() {
    return {
      user: {
        id: -1,
        image: "",
        name: "",
        email: "",
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.featchUser(id);
  },
  methods: {
    featchUser(userId) {
      console.log(userId);
      const { user } = dummyData;
      const { id, image, name, email } = user;
      this.user = {
        ...this.user,
        id,
        image,
        name,
        email,
      };
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        this.user.image = ''
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    },
    handleAfterSubmit(e){
      const form = e.target
      const formData = new FormData(form)
      for (let [name, value] of formData.entries()) {
        console.log(name + ':' + value)
      }
    }
  },
};
</script>