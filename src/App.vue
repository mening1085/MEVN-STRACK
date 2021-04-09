<template>
  <div>
    <!-- Navbar Menu -->
    <Navbar />

    <!-- Content -->
    <div class="container" style="height: calc(100vh - 135px)">
      <router-view />
    </div>

    <!-- Footer -->
    <div class="p-3 text-center" style="background-color: #333B3F;color: #fff">
      <footer>
        create by MeN
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style>
#nav {
  width: 100%;
  background-color: antiquewhite;
}
</style>
