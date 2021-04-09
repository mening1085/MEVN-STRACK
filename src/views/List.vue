<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <!-- List -->
      <h2 class="text-center my-3">User List</h2>

      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th style="text-align: center">No.</th>
                  <th>Name</th>
                  <th>email</th>
                  <th style="text-align: center">Edit / Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in users" :key="i">
                  <th width="10%" style="text-align: center">{{ i + 1 }}</th>
                  <th width="35%">{{ item.name }}</th>
                  <th width="35%">{{ item.email }}</th>
                  <th width="20%" style="text-align: center">
                    <router-link :to="'/edit/' + item._id">
                      <button class="btn btn-secondary mr-3">Edit</button>
                    </router-link>
                    <button
                      class="btn btn-danger"
                      @click="deleteUser(item._id)"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getDataUser();
  },
  methods: {
    getDataUser() {
      let api_url = "http://localhost:4000/api/";
      axios
        .get(api_url, this.form)
        .then((res) => {
          console.log(res);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteUser(id) {
      let api_url = `http://localhost:4000/api/delete-user/${id}`;

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(api_url)
          .then(() => {
            this.users.splice(
              this.users.findIndex((e) => e._id === id),
              1
            );
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style></style>
