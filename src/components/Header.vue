<template>
  <div class="header-container">
    <router-link to="/">
      <div class="logo">
        { paulo
        <span class="sobrenome">frare</span> }
      </div>
    </router-link>
    <ul class="nav">
      <router-link to="/">
        <li>home</li>
      </router-link>
      <li>
        <q-icon class="separator-nav" name="stop_circle" />
      </li>
      <router-link to="/sobre">
        <li>sobre</li>
      </router-link>
      <li>
        <q-icon class="separator-nav" name="stop_circle" />
      </li>
      <router-link to="/skills">
        <li>skills</li>
      </router-link>
      <li>
        <q-icon class="separator-nav" name="stop_circle" />
      </li>
      <router-link to="/contato">
        <li>contato</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
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
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
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
  padding: 0px;
  margin-top: 10px;
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
</style>