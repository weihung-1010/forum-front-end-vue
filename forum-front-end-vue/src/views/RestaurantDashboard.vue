<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Kelvin Gutmann",
    tel: "245-131-8886",
    address: "6654 Glover Oval",
    opening_hours: "08:00",
    description:
      "Sint qui odit voluptas et quod facere. Dolor mollitia voluptas laborum est sint consequatur alias. Molestiae voluptatibus fugit. Tenetur labore quia.\n \rAutem et ad maiores. Qui explicabo perferendis nulla atque. Debitis consectetur vel cumque ut qui et fuga magni.\n \rPraesentium dolores dolor facilis. Sed et veritatis perspiciatis nesciunt nisi. Ipsa earum quia fugiat explicabo illo. Laborum inventore laborum sunt est ut. Velit consequatur delectus maiores ut officiis ut repellendus necessitatibus.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=62.3156917148878",
    viewCounts: 1,
    createdAt: "2022-09-13T11:09:44.000Z",
    updatedAt: "2022-09-15T04:42:30.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
    },
    Comments: [
      {
        id: 1,
        text: "Et minus omnis.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$yxZosXHDLO06AVWzuAe2O.YjS0BysH3OO7RQ5sFq65yP/2qinkvPK",
          isAdmin: true,
          image: null,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
        },
      },
      {
        id: 51,
        text: "Culpa ullam molestiae voluptatem et et nisi eius.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$y3BLrfv3X8LDUPuaHB7JKOVRPJEnN1bLegyav7UuxNUXVh5cHq6j.",
          isAdmin: false,
          image: null,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
        },
      },
      {
        id: 101,
        text: "Quis facilis nihil excepturi.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$yxZosXHDLO06AVWzuAe2O.YjS0BysH3OO7RQ5sFq65yP/2qinkvPK",
          isAdmin: true,
          image: null,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
        },
      },
    ],
  },
};
export default {
  data() {
    return {
      restaurant: {
        name: "",
        viewCounts: 0,
        categoryName: "",
        commentsLength: 0,
      },
    };
  },
  methods: {
    fetchRestaurant() {
      // 解構賦值
      const { name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant.name = name;
      this.restaurant.categoryName = Category.name;
      this.restaurant.commentsLength = Comments.length;
      this.restaurant.viewCounts = viewCounts;
    },
  },
  created() {
    this.fetchRestaurant();
  },
};
</script>