<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <!-- 最新評論 NewestComments-->
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments"

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Kelvin Gutmann",
      tel: "245-131-8886",
      address: "6654 Glover Oval",
      opening_hours: "08:00",
      description:
        "Sint qui odit voluptas et quod facere. Dolor mollitia voluptas laborum est sint consequatur alias. Molestiae voluptatibus fugit. Tenetur labore quia.\n \rAutem et ad maiores. Qui explicabo perferendis nulla atque. Debitis consectetur vel cumque ut qui et fuga magni.\n \rPraesentium dolores dolor facilis. Sed et veritatis perspiciatis nesciunt nisi. Ipsa earum quia fugiat explicabo illo. Laborum inventore laborum sunt est ut. Velit consequatur delectus maiores ut officiis ut repellendus necessitatibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.3156917148878",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 2,
      name: "Lavonne Brakus",
      tel: "1-749-457-6258",
      address: "188 Gloria Dale",
      opening_hours: "08:00",
      description:
        "Voluptatem velit aut atque sit eius aut. Illo est qui similique. Laboriosam nisi sit in nostrum et. Velit quia quo asperiores non sint vel at voluptas. Consequuntur laborum numquam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.7337386899409",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 3,
      name: "Chance Daugherty",
      tel: "296-054-4539",
      address: "5927 Dannie Crest",
      opening_hours: "08:00",
      description:
        "Doloribus ipsam et voluptatem itaque. Alias quibusdam illo beatae soluta. Saepe et rerum reprehenderit doloribus asperiores rem veniam quas et. Vitae aut non hic eum voluptate. Illum consequatur debitis nesciunt magni debitis eum voluptas blanditiis qui.\n \rEos ut distinctio qui. Ut voluptatum voluptatem placeat. Assumenda dolore eius velit.\n \rIusto facilis perferendis quaerat nisi non dolores. Qui adipisci aliquid. Illo officiis ut consequuntur minus. Quos adipisci facere autem ut et velit rem ut cupiditate. Est est labore error magnam veritatis sit dolorum non. Animi sit eos ea eveniet rerum voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.728418539596676",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 4,
      name: "Keon Moen",
      tel: "043-253-8431 x706",
      address: "38629 Trantow Plaza",
      opening_hours: "08:00",
      description:
        "Voluptate adipisci sed aut cupiditate similique delectus voluptatibus ducimus. Veritatis est dolor ipsam et perspiciatis et possimus ut mollitia. Neque rem molestias doloremque quis nihil.\n \rAmet et rerum sapiente cupiditate doloribus ad. Numquam labore ipsum. Vel dolorem nostrum dignissimos asperiores quidem sunt explicabo. Omnis esse consectetur officiis porro impedit dolore qui minus minima. Natus eligendi accusamus et aut quas earum.\n \rConsequatur iure minima voluptatem natus omnis occaecati ut unde. Sint rerum voluptas ad fugit qui unde. Reiciendis facere odit excepturi sequi adipisci quia. Quasi dolorem voluptatem et sint temporibus a ipsam aperiam. Ducimus quia explicabo. Et a eius sint ducimus non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.45933870605619",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 5,
      name: "Layla Mante",
      tel: "379.432.7992 x1642",
      address: "30232 Tomas Route",
      opening_hours: "08:00",
      description:
        "Fugiat quas maiores neque cum sint. Enim nostrum reiciendis et harum inventore expedita sunt. Ipsa itaque et sunt debitis. Maxime deleniti quo rerum dolorum enim reiciendis quia et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.072978885728205",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 6,
      name: "Billy Littel",
      tel: "358-511-7694 x701",
      address: "2767 Schuppe Port",
      opening_hours: "08:00",
      description: "Est fugit dolores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=37.94128353556263",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 7,
      name: "Miss Dangelo Legros",
      tel: "1-513-053-8705 x0569",
      address: "05445 Mayer Flat",
      opening_hours: "08:00",
      description: "saepe",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.955034357168739",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 8,
      name: "Ryley Keeling",
      tel: "121-596-6421",
      address: "7048 Elian Manor",
      opening_hours: "08:00",
      description:
        "Quo mollitia non cupiditate sint. Totam repellat aut id similique deserunt. Aut facilis nihil ut vel unde distinctio. Numquam dolorum quis veniam recusandae aut voluptas repellat dolorem. Tenetur tempora deleniti voluptatem est. Eum sequi in possimus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.71666564571548",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 9,
      name: "Bailey Casper",
      tel: "897.460.8894",
      address: "2338 Kali Ramp",
      opening_hours: "08:00",
      description:
        "Est in illum cumque ea aut earum ipsum. Doloribus optio ullam suscipit consectetur quo inventore ut quisquam. Aspernatur alias neque qui quidem vitae dolorem quasi corrupti. Rem veritatis quos non asperiores.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.36126587400833",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
    {
      id: 10,
      name: "Marcelina Franecki",
      tel: "(572) 470-4274 x870",
      address: "634 Harris Lodge",
      opening_hours: "08:00",
      description: "iste non eos",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.1293060854593",
      viewCounts: 0,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
    },
  ],
  comments: [
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
      Restaurant: {
        id: 1,
        name: "Kelvin Gutmann",
        tel: "245-131-8886",
        address: "6654 Glover Oval",
        opening_hours: "08:00",
        description:
          "Sint qui odit voluptas et quod facere. Dolor mollitia voluptas laborum est sint consequatur alias. Molestiae voluptatibus fugit. Tenetur labore quia.\n \rAutem et ad maiores. Qui explicabo perferendis nulla atque. Debitis consectetur vel cumque ut qui et fuga magni.\n \rPraesentium dolores dolor facilis. Sed et veritatis perspiciatis nesciunt nisi. Ipsa earum quia fugiat explicabo illo. Laborum inventore laborum sunt est ut. Velit consequatur delectus maiores ut officiis ut repellendus necessitatibus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=62.3156917148878",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 2,
      text: "Sed numquam possimus repellat ratione.",
      UserId: 2,
      RestaurantId: 2,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$21aqLpeCONTrdTb8QIKpX.gg/JnUnQ8kTXMWZrM8eo/6.dKBpwnOe",
        isAdmin: false,
        image: null,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
      Restaurant: {
        id: 2,
        name: "Lavonne Brakus",
        tel: "1-749-457-6258",
        address: "188 Gloria Dale",
        opening_hours: "08:00",
        description:
          "Voluptatem velit aut atque sit eius aut. Illo est qui similique. Laboriosam nisi sit in nostrum et. Velit quia quo asperiores non sint vel at voluptas. Consequuntur laborum numquam.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=38.7337386899409",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 3,
      text: "Minima amet a esse consequatur qui repellendus in.",
      UserId: 3,
      RestaurantId: 3,
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
      Restaurant: {
        id: 3,
        name: "Chance Daugherty",
        tel: "296-054-4539",
        address: "5927 Dannie Crest",
        opening_hours: "08:00",
        description:
          "Doloribus ipsam et voluptatem itaque. Alias quibusdam illo beatae soluta. Saepe et rerum reprehenderit doloribus asperiores rem veniam quas et. Vitae aut non hic eum voluptate. Illum consequatur debitis nesciunt magni debitis eum voluptas blanditiis qui.\n \rEos ut distinctio qui. Ut voluptatum voluptatem placeat. Assumenda dolore eius velit.\n \rIusto facilis perferendis quaerat nisi non dolores. Qui adipisci aliquid. Illo officiis ut consequuntur minus. Quos adipisci facere autem ut et velit rem ut cupiditate. Est est labore error magnam veritatis sit dolorum non. Animi sit eos ea eveniet rerum voluptatem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=13.728418539596676",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 4,
      text: "Magni possimus cupiditate exercitationem et.",
      UserId: 2,
      RestaurantId: 4,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$21aqLpeCONTrdTb8QIKpX.gg/JnUnQ8kTXMWZrM8eo/6.dKBpwnOe",
        isAdmin: false,
        image: null,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
      Restaurant: {
        id: 4,
        name: "Keon Moen",
        tel: "043-253-8431 x706",
        address: "38629 Trantow Plaza",
        opening_hours: "08:00",
        description:
          "Voluptate adipisci sed aut cupiditate similique delectus voluptatibus ducimus. Veritatis est dolor ipsam et perspiciatis et possimus ut mollitia. Neque rem molestias doloremque quis nihil.\n \rAmet et rerum sapiente cupiditate doloribus ad. Numquam labore ipsum. Vel dolorem nostrum dignissimos asperiores quidem sunt explicabo. Omnis esse consectetur officiis porro impedit dolore qui minus minima. Natus eligendi accusamus et aut quas earum.\n \rConsequatur iure minima voluptatem natus omnis occaecati ut unde. Sint rerum voluptas ad fugit qui unde. Reiciendis facere odit excepturi sequi adipisci quia. Quasi dolorem voluptatem et sint temporibus a ipsam aperiam. Ducimus quia explicabo. Et a eius sint ducimus non.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=68.45933870605619",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 5,
      text: "A sit consequatur qui.",
      UserId: 1,
      RestaurantId: 5,
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
      Restaurant: {
        id: 5,
        name: "Layla Mante",
        tel: "379.432.7992 x1642",
        address: "30232 Tomas Route",
        opening_hours: "08:00",
        description:
          "Fugiat quas maiores neque cum sint. Enim nostrum reiciendis et harum inventore expedita sunt. Ipsa itaque et sunt debitis. Maxime deleniti quo rerum dolorum enim reiciendis quia et.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=35.072978885728205",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 6,
      text: "Eligendi autem quaerat quo illo hic.",
      UserId: 1,
      RestaurantId: 6,
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
      Restaurant: {
        id: 6,
        name: "Billy Littel",
        tel: "358-511-7694 x701",
        address: "2767 Schuppe Port",
        opening_hours: "08:00",
        description: "Est fugit dolores.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=37.94128353556263",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 7,
      text: "Qui rerum dolorem aut culpa omnis impedit non veritatis.",
      UserId: 3,
      RestaurantId: 7,
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
      Restaurant: {
        id: 7,
        name: "Miss Dangelo Legros",
        tel: "1-513-053-8705 x0569",
        address: "05445 Mayer Flat",
        opening_hours: "08:00",
        description: "saepe",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=14.955034357168739",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 8,
      text: "Amet distinctio id tempore neque incidunt pariatur.",
      UserId: 1,
      RestaurantId: 8,
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
      Restaurant: {
        id: 8,
        name: "Ryley Keeling",
        tel: "121-596-6421",
        address: "7048 Elian Manor",
        opening_hours: "08:00",
        description:
          "Quo mollitia non cupiditate sint. Totam repellat aut id similique deserunt. Aut facilis nihil ut vel unde distinctio. Numquam dolorum quis veniam recusandae aut voluptas repellat dolorem. Tenetur tempora deleniti voluptatem est. Eum sequi in possimus.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=92.71666564571548",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 9,
      text: "Et quia at aut commodi.",
      UserId: 1,
      RestaurantId: 9,
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
      Restaurant: {
        id: 9,
        name: "Bailey Casper",
        tel: "897.460.8894",
        address: "2338 Kali Ramp",
        opening_hours: "08:00",
        description:
          "Est in illum cumque ea aut earum ipsum. Doloribus optio ullam suscipit consectetur quo inventore ut quisquam. Aspernatur alias neque qui quidem vitae dolorem quasi corrupti. Rem veritatis quos non asperiores.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=52.36126587400833",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 10,
      text: "Et impedit optio.",
      UserId: 2,
      RestaurantId: 10,
      createdAt: "2022-09-13T11:09:44.000Z",
      updatedAt: "2022-09-13T11:09:44.000Z",
      User: {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$21aqLpeCONTrdTb8QIKpX.gg/JnUnQ8kTXMWZrM8eo/6.dKBpwnOe",
        isAdmin: false,
        image: null,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
      },
      Restaurant: {
        id: 10,
        name: "Marcelina Franecki",
        tel: "(572) 470-4274 x870",
        address: "634 Harris Lodge",
        opening_hours: "08:00",
        description: "iste non eos",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=89.1293060854593",
        viewCounts: 0,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        CategoryId: 5,
      },
    },
  ],
};
export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data () {
    return {
      restaurants: [],
      comments: []
    }
  },
   created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
    }
  }
};
</script>