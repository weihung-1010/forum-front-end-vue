<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="removeFavorited(restaurant)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorited(restaurant)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Karen Powlowski",
      tel: "(442) 219-6550",
      address: "02495 Bashirian Port",
      opening_hours: "08:00",
      description: "Asperiores ipsa in et eveniet. Labore quas ducimus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.992395764126229",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Santina Schumm",
      tel: "503-719-3451 x8643",
      address: "78087 Keeling Shoal",
      opening_hours: "08:00",
      description: "In quis voluptates ipsa qui est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.62530650417021",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Lou Crist",
      tel: "751.983.4725 x755",
      address: "346 Damian Shoals",
      opening_hours: "08:00",
      description: "Soluta repudiandae sapiente quisquam ex est quo. S",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.54893159127506",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Linda Green",
      tel: "1-054-509-6033",
      address: "0716 Francisca Street",
      opening_hours: "08:00",
      description: "Molestiae inventore sint debitis voluptatibus sed ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.33419186166185",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Miss Alf Hudson",
      tel: "226-861-1735",
      address: "7357 Batz Flats",
      opening_hours: "08:00",
      description: "quae laboriosam aliquam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.007681721132315",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Evert Schumm",
      tel: "827-117-2167 x21614",
      address: "9224 O'Connell Stream",
      opening_hours: "08:00",
      description: "ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.33285884549156",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Mabel Stanton",
      tel: "371.548.7549",
      address: "6124 Karina Lights",
      opening_hours: "08:00",
      description: "Magnam optio minima reiciendis id unde. Id ea iust",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.50091473674054",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Judson Collins PhD",
      tel: "367.078.9708 x8084",
      address: "219 Alexandra Spur",
      opening_hours: "08:00",
      description: "Fugiat tenetur facere voluptates sit quod consequa",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=73.57519325414347",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Rebecca Thompson",
      tel: "(769) 081-1891 x26309",
      address: "092 Wisozk Union",
      opening_hours: "08:00",
      description: "officiis voluptate voluptates",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.12982395205355",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Hunter Kulas",
      tel: "(777) 004-8164",
      address: "3391 Palma Crescent",
      opening_hours: "08:00",
      description: "Quia quod enim amet quis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.180637110830103",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    fetchRestaurant() {
      this.restaurants = dummyData.restaurants;
    },
    removeFavorited(restaurant) {
      restaurant.isFavorited = false;
    },
    addFavorited(restaurant) {
      restaurant.isFavorited = true;
    },
  },
  created() {
    this.fetchRestaurant();
  },
};
</script>