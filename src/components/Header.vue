<template>
  <div class="header-container">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          { paulo
          <span class="sobrenome">frare</span> }
        </div>
      </router-link>
      <div class="menu">
        <q-fab
          class="menu-icon"
          v-model="fab2"
          square
          vertical-actions-align="right"
          flat
          icon="menu"
          direction="down"
        >
          <q-fab-action
            flat
            square
            color="white"
            @click="redirect('/')"
            label="home"
            label-position="left"
          />
          <q-fab-action
            flat
            square
            color="white"
            @click="redirect('/sobre')"
            label="sobre"
            label-position="left"
          />
          <q-fab-action
            flat
            square
            color="white"
            @click="redirect('/skills')"
            label="skills"
            label-position="left"
          />
          <q-fab-action
            flat
            square
            color="white"
            @click="redirect('/contato')"
            label="contato"
            label-position="left"
          />
        </q-fab>
      </div>
      <div class="nav">
        <router-link to="/">
          <div>home</div>
        </router-link>
        <div>
          <q-icon class="separator-nav" name="stop_circle" />
        </div>
        <router-link to="/sobre">
          <div>sobre</div>
        </router-link>
        <div>
          <q-icon class="separator-nav" name="stop_circle" />
        </div>
        <router-link to="/skills">
          <div>skills</div>
        </router-link>
        <div>
          <q-icon class="separator-nav" name="stop_circle" />
        </div>
        <router-link to="/contato">
          <div>contato</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  data() {
    return {
      fab2: false,
    };
  },
  methods: {
    redirect(url) {
      router.push(url);
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: rgb(209, 209, 209);
}

a:hover {
  color: #3aadf5;
}

.router-link-exact-active {
  color: #3aadf5;
}

.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #252525;
  padding: 20px;
}

.header {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logo {
  color: white;
  font-size: 1.5rem;
  color: rgb(209, 209, 209);
}

.sobrenome {
  margin-left: -7px;
  color: #3aadf5;
}
.sobrenome:hover {
  margin-left: -7px;
  color: rgb(209, 209, 209);
}

.nav {
  display: flex;
  font-size: 1.5rem;
  font-weight: 300;
  flex-wrap: wrap;
  animation: slideInferior 1s;
  color: rgb(209, 209, 209);
}

.separator-nav {
  font-size: 5px !important;
  margin-right: 15px;
  margin-left: 15px;
}

.menu-icon {
  color: #3aadf5;
}

.menu {
  display: none;
  z-index: 100000;
  background-color: #252525;
}

.q-fab__actions {
  background-color: #252525;
  width: 120px !important;
  border-radius: 20px;
}

@media only screen and (max-width: 600px) {
  .menu {
    display: block;
  }
  .nav {
    display: none;
  }
}
</style>