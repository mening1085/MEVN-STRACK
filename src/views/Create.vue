<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <!-- Create -->
      <h2 class="text-center">Create Data</h2>
      <form @submit.prevent="save">
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
          Save
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

  methods: {
    save() {
      //   sending form
      let api_url = "http://localhost:4000/api/create-user";
      axios
        .post(api_url, this.form)
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
