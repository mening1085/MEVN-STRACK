<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Create -->
      <h2 class="text-center">Create Data</h2>
      <form @submit.prevent="update">
        <!-- Email -->
        <div class="form-group">
          <label for="email">Name</label>
          <input
            type="text"
            class="form-control"
            id="email"
            name="email"
            v-model="form.name"
          />
        </div>

        <!-- Name -->
        <div class="form-group">
          <label for="name">Email address</label>
          <input
            type="email"
            class="form-control"
            id="name"
            name="name"
            v-model="form.email"
          />
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" class="btn btn-secondary btn-block">
          Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.getUserById();
  },
  methods: {
    getUserById() {
      let api_url = `http://localhost:4000/api/edit-user/${this.$route.params.id}`;
      axios
        .get(api_url, this.form)
        .then((res) => {
          this.form = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update() {
      //   sending form
      let api_url = `http://localhost:4000/api/update-user/${this.$route.params.id}`;
      axios
        .put(api_url, this.form)
        .then(() => {
          this.form = {
            name: "",
            email: "",
            password: "",
          };
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
