<template>
  <div>
    <Header />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "../src/components/Header.vue";
export default {
  name: "LayoutDefault",

  components: {
    Header,
  },

  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
  font-family: "Roboto Slab", serif;
  background-color: #252525;
}
.container {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.container-claro {
  padding: 20px;

  /* margin-top: 1px; */
  /* margin: 0 auto; */
}

ul {
  list-style: none;
}

.pag-principal {
  min-height: 90vh;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-to {
  transition: opacity 0.3s;
}
</style>
