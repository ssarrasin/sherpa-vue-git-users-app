<template>
  <nav aria-label="Page navigation example" class="mx-auto m-4">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: this.currentPage - 1 <= 0 }">
        <router-link
          :to="{
            name: 'Home',
            params: {
              page: getPrevPage(),
            },
          }"
          class="page-link"
        >
          <span aria-hidden="true">&laquo;</span>
        </router-link>
      </li>

      <div v-for="pageNum in numPages" :key="pageNum">
        <li class="page-item" :class="{ active: pageNum == currentPage }">
          <router-link
            :to="{
              name: 'Home',
              params: {
                page: pageNum,
              },
            }"
            class="page-link"
            >{{ pageNum }}</router-link
          >
        </li>
      </div>
      <li
        class="page-item"
        :class="{ disabled: this.currentPage >= this.numPages }"
      >
        <router-link
          :to="{
            name: 'Home',
            params: {
              page: getNextPage(),
            },
          }"
          class="page-link"
        >
          <span aria-hidden="true">&raquo;</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: this.$route.params.page || 1,
    };
  },
  methods: {
    getNextPage: function () {
      const potentialNextPage = this.currentPage + 1;
      return potentialNextPage >= this.numPages
        ? this.numPages
        : potentialNextPage;
    },
    getPrevPage: function () {
      const potentialPrevPage = this.currentPage - 1;
      return potentialPrevPage <= 0 ? 1 : potentialPrevPage;
    },
  },
  props: {
    numPages: Number,
  },
  watch: {
    "$route.params.page": {
      handler: function (page) {
        this.currentPage = page || 1;
      },
    },
  },
};
</script>
