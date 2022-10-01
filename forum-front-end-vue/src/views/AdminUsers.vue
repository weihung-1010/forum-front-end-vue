<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'Admin' : 'User' }}</td>
          <td>
            <button @click.stop.prevent="toggleUserRole(user.id)" type="button" class="btn btn-link">
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "@/components/AdminNav";

const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$yxZosXHDLO06AVWzuAe2O.YjS0BysH3OO7RQ5sFq65yP/2qinkvPK",
    isAdmin: true,
    image: null,
    createdAt: "2022-09-13T11:09:44.000Z",
    updatedAt: "2022-09-13T11:09:44.000Z",
    Comments: [
      {
        id: 1,
        text: "Et minus omnis.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
          viewCounts: 1,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-15T04:42:30.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 5,
        text: "A sit consequatur qui.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
        id: 8,
        text: "Amet distinctio id tempore neque incidunt pariatur.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
        id: 16,
        text: "Id accusamus doloribus ut.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 16,
          name: "Wilhelmine Price",
          tel: "305-095-2397",
          address: "7241 Elroy Court",
          opening_hours: "08:00",
          description:
            "Minima eos ullam. Corporis voluptatem fuga laborum exercitationem consequatur similique voluptates. Voluptatem est est non molestias accusantium et sed.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.97013794255891",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 17,
        text: "Iusto aut ipsum in voluptatum.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 17,
          name: "Brendan Walter",
          tel: "(022) 927-3661",
          address: "282 Stiedemann Vista",
          opening_hours: "08:00",
          description:
            "Architecto omnis similique animi aut animi accusamus iusto saepe.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=27.734092761544925",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 19,
        text: "Repellat assumenda rem pariatur adipisci.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 19,
          name: "Ayla O'Reilly",
          tel: "(964) 053-7204 x270",
          address: "9172 Towne Tunnel",
          opening_hours: "08:00",
          description:
            "Totam dolores voluptate dolorem. Dolor cumque in. Fuga odio et voluptatum libero quasi rem cumque vel voluptatem. Quae sunt id commodi ea autem. Natus sit earum veritatis unde consectetur enim placeat.\n \rVoluptatum enim incidunt facilis quis. Aut quam quisquam et aut omnis sed. Voluptatibus accusamus temporibus placeat eum eum quas in itaque vero. Ut quis voluptatem rerum.\n \rIpsam totam exercitationem dolores ut aperiam accusamus ratione aut. Ut ipsum neque natus saepe soluta est recusandae aliquid earum. Quisquam ut voluptatibus et et omnis. Vitae minus eaque ut. Voluptas sunt tenetur ut dolore quia beatae asperiores vitae.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.264960206298548",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 22,
        text: "Ipsam quia voluptas eos autem accusantium debitis fuga.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 22,
          name: "Matteo Schiller MD",
          tel: "110-775-4922 x137",
          address: "3181 Donnie Course",
          opening_hours: "08:00",
          description:
            "Consequatur eos dolores rerum. Consectetur animi repellat sequi qui. Impedit quidem similique earum unde natus perferendis ipsam nihil. Quae laborum ipsam harum provident eligendi adipisci doloribus eligendi earum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.41468371402254",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 26,
        text: "Laborum porro provident in ut nulla qui numquam aperiam.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 26,
          name: "Lelia Leffler",
          tel: "1-949-457-3133",
          address: "9976 Wellington Squares",
          opening_hours: "08:00",
          description:
            "Distinctio a omnis facere exercitationem corporis maxime. Consequatur eos autem dolor eos ad. Quam minima et aut excepturi. Earum tempora numquam et reprehenderit unde consequatur officia. Ut sed maxime voluptatibus distinctio.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.00726683106557",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 31,
        text: "Dolor quod error.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 31,
          name: "Hildegard Franecki",
          tel: "1-973-619-4686 x538",
          address: "10726 Rosanna Passage",
          opening_hours: "08:00",
          description: "voluptatibus ut error",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=83.01512579710322",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 34,
        text: "Perspiciatis perferendis voluptatem commodi magnam.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 34,
          name: "Jovani Dietrich V",
          tel: "1-234-528-4554",
          address: "1800 Cartwright Run",
          opening_hours: "08:00",
          description:
            "Molestiae quis aut provident nemo autem sapiente reprehenderit eaque aspernatur. Quia ab sit molestias nulla placeat ut. Consequatur ab mollitia et. Laboriosam et quo. Sit dicta corporis sequi vel voluptas corrupti incidunt numquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=86.9820765382683",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 44,
        text: "Sed ut deleniti sapiente.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 44,
          name: "Mabel Stanton",
          tel: "371.548.7549",
          address: "6124 Karina Lights",
          opening_hours: "08:00",
          description:
            "Magnam optio minima reiciendis id unde. Id ea iusto nostrum quos voluptatem aspernatur. Dolorem sunt dolores iure a iste dolore fugiat officiis omnis. Repellat quis rerum quo. Suscipit rerum rerum neque exercitationem maiores nemo qui. Eaque dolorem quis molestiae consequatur sapiente repudiandae voluptas maxime corrupti.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=49.50091473674054",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 45,
        text: "Nobis et reprehenderit et aut iure distinctio qui natus.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 50,
        text: "Ipsa pariatur facere ea.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 50,
          name: "Karen Powlowski",
          tel: "(442) 219-6550",
          address: "02495 Bashirian Port",
          opening_hours: "08:00",
          description:
            "Asperiores ipsa in et eveniet. Labore quas ducimus vitae. Eos rem et dolorem accusamus unde quidem eum suscipit. Eos dolorem adipisci. Pariatur eos sunt unde aperiam laudantium voluptas et. Alias quis dolorum dicta similique ut sint assumenda dolorem et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=10.992395764126229",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 55,
        text: "Officiis voluptatem et corporis perspiciatis porro sed qui mollitia expedita.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
        id: 56,
        text: "Fugit quis blanditiis eos.",
        UserId: 1,
        RestaurantId: 6,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
        id: 58,
        text: "Culpa adipisci odit sint.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
        id: 62,
        text: "Voluptatem omnis quae voluptas consectetur eos.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 12,
          name: "Rudy Johns",
          tel: "1-045-563-0193",
          address: "06371 Runte Crescent",
          opening_hours: "08:00",
          description:
            "Aliquid expedita perferendis numquam quo et autem officia. Et rem veniam hic repellendus exercitationem sit ut et. Voluptates odit delectus. Similique reprehenderit ut ipsam qui quo ad.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.96268397714684",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 66,
        text: "Neque praesentium eligendi qui qui facilis.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 16,
          name: "Wilhelmine Price",
          tel: "305-095-2397",
          address: "7241 Elroy Court",
          opening_hours: "08:00",
          description:
            "Minima eos ullam. Corporis voluptatem fuga laborum exercitationem consequatur similique voluptates. Voluptatem est est non molestias accusantium et sed.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.97013794255891",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 69,
        text: "Voluptas voluptas sit quis ratione provident velit eum.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 19,
          name: "Ayla O'Reilly",
          tel: "(964) 053-7204 x270",
          address: "9172 Towne Tunnel",
          opening_hours: "08:00",
          description:
            "Totam dolores voluptate dolorem. Dolor cumque in. Fuga odio et voluptatum libero quasi rem cumque vel voluptatem. Quae sunt id commodi ea autem. Natus sit earum veritatis unde consectetur enim placeat.\n \rVoluptatum enim incidunt facilis quis. Aut quam quisquam et aut omnis sed. Voluptatibus accusamus temporibus placeat eum eum quas in itaque vero. Ut quis voluptatem rerum.\n \rIpsam totam exercitationem dolores ut aperiam accusamus ratione aut. Ut ipsum neque natus saepe soluta est recusandae aliquid earum. Quisquam ut voluptatibus et et omnis. Vitae minus eaque ut. Voluptas sunt tenetur ut dolore quia beatae asperiores vitae.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.264960206298548",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 70,
        text: "Delectus repellendus dignissimos.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 20,
          name: "Myah Walter",
          tel: "129-237-6808",
          address: "5587 Cruz Walks",
          opening_hours: "08:00",
          description:
            "Cumque sunt beatae provident architecto et. Excepturi soluta sed qui. Dignissimos consectetur aliquam occaecati et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=49.53931786093699",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 71,
        text: "Mollitia aut eum omnis officiis.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 21,
          name: "Cornelius Mohr",
          tel: "1-684-062-6809 x2289",
          address: "162 Heidenreich Lodge",
          opening_hours: "08:00",
          description:
            "Quam exercitationem adipisci quibusdam. Non et et corrupti voluptates consequuntur sint voluptatum minima velit. Occaecati culpa nesciunt. Dignissimos quod pariatur asperiores qui doloribus et. Perspiciatis adipisci et porro magnam aut sint fugiat rerum.\n \rQuae ab dolorem commodi vel perspiciatis. Dolores repellendus autem est soluta. Rerum odit dolore asperiores impedit.\n \rAut sit deserunt temporibus dignissimos amet sunt tenetur. Similique quia eaque officia architecto amet. Est ea error facere aut voluptatem sapiente laboriosam earum ad. Ipsum enim et aperiam libero ea facere quia. Rerum ut placeat ut at quis ut reiciendis et consequatur. Suscipit qui deleniti.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=91.97332614251184",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 72,
        text: "Fugiat eligendi quas non.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 22,
          name: "Matteo Schiller MD",
          tel: "110-775-4922 x137",
          address: "3181 Donnie Course",
          opening_hours: "08:00",
          description:
            "Consequatur eos dolores rerum. Consectetur animi repellat sequi qui. Impedit quidem similique earum unde natus perferendis ipsam nihil. Quae laborum ipsam harum provident eligendi adipisci doloribus eligendi earum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.41468371402254",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 75,
        text: "Repellat omnis saepe quia atque cumque consequatur dolores impedit.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 25,
          name: "Marisol Wiza",
          tel: "215-593-5999 x944",
          address: "66057 Rippin Ranch",
          opening_hours: "08:00",
          description: "Perferendis molestiae dolorem quis sed aut earum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=34.81272639383395",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 79,
        text: "Facere deserunt illum commodi.",
        UserId: 1,
        RestaurantId: 29,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 29,
          name: "Elyssa Yost",
          tel: "1-423-307-5792",
          address: "15327 Hardy Rapids",
          opening_hours: "08:00",
          description:
            "Non dolore sapiente. Officiis repellat quibusdam nihil maxime similique omnis non. Tempore tempore natus maxime dolores sed dolorum ut quo soluta. Impedit nemo rerum accusamus fuga aut et aut ex. Sit eveniet fugiat numquam alias voluptate quia maiores dolor. Quas perspiciatis aut quia neque omnis et esse.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.88826592826442",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 80,
        text: "Fuga qui praesentium repellat.",
        UserId: 1,
        RestaurantId: 30,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 30,
          name: "Kasey Kohler",
          tel: "1-418-667-0017 x167",
          address: "311 Schoen Tunnel",
          opening_hours: "08:00",
          description:
            "Illum enim nemo repellendus ullam reiciendis voluptatem quis. Amet cumque expedita voluptas debitis fugiat ea quis assumenda.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=25.97440240098412",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 83,
        text: "Alias dolor ea a dolore voluptates corporis eum.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 33,
          name: "Marvin Upton",
          tel: "818.418.7365 x816",
          address: "54217 Arnaldo Harbors",
          opening_hours: "08:00",
          description:
            "Quis sed magni sint asperiores et sed dignissimos.\nAccusamus a illo sed eveniet.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=8.452311259413392",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 86,
        text: "Omnis inventore modi repudiandae consequatur pariatur.",
        UserId: 1,
        RestaurantId: 36,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 36,
          name: "Muhammad Yundt",
          tel: "428.149.6862",
          address: "206 Wiza Bridge",
          opening_hours: "08:00",
          description:
            "Cum et et aut veniam sunt amet eveniet omnis. Repudiandae et est eaque aperiam repellat labore a. Ut iste earum aliquam optio quo aut cumque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.112824522930588",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 90,
        text: "Aut necessitatibus dolore asperiores occaecati quia velit sapiente itaque.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 40,
          name: "Miss Verner Hyatt",
          tel: "144.476.0754 x6065",
          address: "9991 Fisher Port",
          opening_hours: "08:00",
          description: "id beatae nulla",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.917393948871072",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 91,
        text: "At voluptate eius non dolorem nihil.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 96,
        text: "Non sit id repellendus vitae omnis ratione ut vel.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 101,
        text: "Quis facilis nihil excepturi.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
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
          viewCounts: 1,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-15T04:42:30.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 116,
        text: "Eaque aut repudiandae ducimus suscipit unde.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 16,
          name: "Wilhelmine Price",
          tel: "305-095-2397",
          address: "7241 Elroy Court",
          opening_hours: "08:00",
          description:
            "Minima eos ullam. Corporis voluptatem fuga laborum exercitationem consequatur similique voluptates. Voluptatem est est non molestias accusantium et sed.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.97013794255891",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 120,
        text: "Consectetur est accusantium perferendis ad quis earum ea repellendus.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 20,
          name: "Myah Walter",
          tel: "129-237-6808",
          address: "5587 Cruz Walks",
          opening_hours: "08:00",
          description:
            "Cumque sunt beatae provident architecto et. Excepturi soluta sed qui. Dignissimos consectetur aliquam occaecati et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=49.53931786093699",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 121,
        text: "Soluta nihil rerum id et illum.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 21,
          name: "Cornelius Mohr",
          tel: "1-684-062-6809 x2289",
          address: "162 Heidenreich Lodge",
          opening_hours: "08:00",
          description:
            "Quam exercitationem adipisci quibusdam. Non et et corrupti voluptates consequuntur sint voluptatum minima velit. Occaecati culpa nesciunt. Dignissimos quod pariatur asperiores qui doloribus et. Perspiciatis adipisci et porro magnam aut sint fugiat rerum.\n \rQuae ab dolorem commodi vel perspiciatis. Dolores repellendus autem est soluta. Rerum odit dolore asperiores impedit.\n \rAut sit deserunt temporibus dignissimos amet sunt tenetur. Similique quia eaque officia architecto amet. Est ea error facere aut voluptatem sapiente laboriosam earum ad. Ipsum enim et aperiam libero ea facere quia. Rerum ut placeat ut at quis ut reiciendis et consequatur. Suscipit qui deleniti.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=91.97332614251184",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 122,
        text: "Ducimus consequatur expedita praesentium.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 22,
          name: "Matteo Schiller MD",
          tel: "110-775-4922 x137",
          address: "3181 Donnie Course",
          opening_hours: "08:00",
          description:
            "Consequatur eos dolores rerum. Consectetur animi repellat sequi qui. Impedit quidem similique earum unde natus perferendis ipsam nihil. Quae laborum ipsam harum provident eligendi adipisci doloribus eligendi earum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.41468371402254",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 123,
        text: "Ipsum placeat in veritatis et alias.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 23,
          name: "Orlando Bergstrom",
          tel: "1-629-443-7396 x8458",
          address: "2754 Kuhn Plain",
          opening_hours: "08:00",
          description:
            "Et veniam distinctio dolorem illo nihil atque qui error. Eos odit eaque maxime ut sed et. Odit eos aut animi ea nesciunt sunt sed mollitia. Veritatis non consequatur consequatur. Facere quod voluptates fuga quo ut ipsam numquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.28669666392281",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 126,
        text: "Consequatur dolore quasi pariatur.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 26,
          name: "Lelia Leffler",
          tel: "1-949-457-3133",
          address: "9976 Wellington Squares",
          opening_hours: "08:00",
          description:
            "Distinctio a omnis facere exercitationem corporis maxime. Consequatur eos autem dolor eos ad. Quam minima et aut excepturi. Earum tempora numquam et reprehenderit unde consequatur officia. Ut sed maxime voluptatibus distinctio.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.00726683106557",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 127,
        text: "Delectus voluptas nobis.",
        UserId: 1,
        RestaurantId: 27,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 27,
          name: "Myah Hodkiewicz",
          tel: "(010) 193-7562",
          address: "112 Schulist Centers",
          opening_hours: "08:00",
          description:
            "Consequuntur at qui saepe eius omnis consectetur debitis tempore facere. Totam et facilis modi praesentium tempora dolorum et consequuntur optio. Sit nihil beatae perferendis occaecati. Corrupti magnam quo nisi maiores atque soluta sit ut sapiente. Consectetur et reprehenderit facere sed saepe dignissimos. Voluptates labore velit facilis ipsum aut voluptatem molestias eveniet.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=1.5498052525477757",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 129,
        text: "In quia id blanditiis autem eos eum voluptas sapiente.",
        UserId: 1,
        RestaurantId: 29,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 29,
          name: "Elyssa Yost",
          tel: "1-423-307-5792",
          address: "15327 Hardy Rapids",
          opening_hours: "08:00",
          description:
            "Non dolore sapiente. Officiis repellat quibusdam nihil maxime similique omnis non. Tempore tempore natus maxime dolores sed dolorum ut quo soluta. Impedit nemo rerum accusamus fuga aut et aut ex. Sit eveniet fugiat numquam alias voluptate quia maiores dolor. Quas perspiciatis aut quia neque omnis et esse.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.88826592826442",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 133,
        text: "Error officiis voluptas rerum voluptas qui voluptas est dolor hic.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 33,
          name: "Marvin Upton",
          tel: "818.418.7365 x816",
          address: "54217 Arnaldo Harbors",
          opening_hours: "08:00",
          description:
            "Quis sed magni sint asperiores et sed dignissimos.\nAccusamus a illo sed eveniet.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=8.452311259413392",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 136,
        text: "Ratione rerum voluptas.",
        UserId: 1,
        RestaurantId: 36,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 36,
          name: "Muhammad Yundt",
          tel: "428.149.6862",
          address: "206 Wiza Bridge",
          opening_hours: "08:00",
          description:
            "Cum et et aut veniam sunt amet eveniet omnis. Repudiandae et est eaque aperiam repellat labore a. Ut iste earum aliquam optio quo aut cumque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=13.112824522930588",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 141,
        text: "Aperiam eaque quia error nihil modi.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 142,
        text: "Reiciendis officia unde laboriosam nesciunt voluptas dolor.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 145,
        text: "Debitis ea ut voluptatum et aliquam sint.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 146,
        text: "Ipsum rerum quasi possimus illum ipsam harum.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 147,
        text: "Non quia quis officiis facilis itaque quidem quo.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 47,
          name: "Linda Green",
          tel: "1-054-509-6033",
          address: "0716 Francisca Street",
          opening_hours: "08:00",
          description:
            "Molestiae inventore sint debitis voluptatibus sed nulla. Cumque laboriosam sint ut ab ratione. Hic expedita vel blanditiis laborum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=62.33419186166185",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 150,
        text: "Quisquam velit cum ex commodi nihil explicabo similique molestiae ea.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2022-09-13T11:09:44.000Z",
        updatedAt: "2022-09-13T11:09:44.000Z",
        Restaurant: {
          id: 50,
          name: "Karen Powlowski",
          tel: "(442) 219-6550",
          address: "02495 Bashirian Port",
          opening_hours: "08:00",
          description:
            "Asperiores ipsa in et eveniet. Labore quas ducimus vitae. Eos rem et dolorem accusamus unde quidem eum suscipit. Eos dolorem adipisci. Pariatur eos sunt unde aperiam laudantium voluptas et. Alias quis dolorum dicta similique ut sint assumenda dolorem et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=10.992395764126229",
          viewCounts: 0,
          createdAt: "2022-09-13T11:09:44.000Z",
          updatedAt: "2022-09-13T11:09:44.000Z",
          CategoryId: 5,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

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
    },
  ],
};

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {}
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
      this.currentUser = dummyUser.profile
    },
    toggleUserRole(UserId){
      this.users = this.users.map((user) => {
        if(user.id === UserId){
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  },
};
</script>