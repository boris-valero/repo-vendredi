<template>
  <div>
    <div id="app">
      <AppMenu /> <!-- Utilisez le nouveau nom du composant ici -->
    </div>
    <nav style="display:flex; justify-content: right; align-items: center;">
      <div @click="toggleMenu" class="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul :class="{'navbar-list': true, 'is-active': menuActive}" style="display:flex;">
        <li class="navbar-item"><router-link to="/">Home</router-link></li>
        <li class="navbar-item"><router-link to="/RegistrationForm">Registration Form</router-link></li>
        <li class="navbar-item"><router-link to="/services">Services</router-link></li>
        <li class="navbar-item"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      // Vos données ici
    }
  }
}
</script>

<style>
.burger-menu {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30px;
  width: 40px;
}

.burger-menu span {
  display: block;
  height: 4px;
  width: 100%;
  background-color: black;
}

.navbar-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navbar-list.is-active {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.navbar-item {
  padding: 8px;
  text-align: center;
}

@media (max-width: 768px) {
  .navbar-list {
    display: none;
  }
  .navbar-list.is-active {
    display: flex;
  }
}
</style>