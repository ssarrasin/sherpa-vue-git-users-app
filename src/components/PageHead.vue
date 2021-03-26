<template>
  <div class="row mt-5 mb-5">
    <div class="col">
      <a class="navbar-brand" href="#">Github users</a>
    </div>
    <div class="col-md-auto"></div>
    <div class="col col-lg-3">
      <div class="form-group">
        <select
          class="form-control"
          name="showNumResults"
          v-on:change="setShowNumResults"
        >
          <option value="9" selected>Show 9 per page</option>
          <option value="12">Show 12 per page</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTION_APP_SET_NUM_RESULTS_PER_PAGE } from "../store/app.store";
export default {
  name: "PageHead",
  methods: {
    setShowNumResults: function (evt) {
      this.$store.dispatch(
        ACTION_APP_SET_NUM_RESULTS_PER_PAGE,
        evt.currentTarget.value
      );
      this.$router.replace({ name: "Home", params: { page: 1 } });
    },
  },
};
</script>