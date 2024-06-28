<template>
    <h1>Bienvenue sur notre plateforme de vente de meuble</h1>
    <img class="photo" src="/photo1.jpg" alt="Photo 1">
    <img class="photo" src="/photo2.jpg" alt="Photo 2">
    <img class="photo" src="/photo3.jpg" alt="Photo 3">
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      // Logique pour ouvrir/fermer le menu
      console.log('Menu toggle');
    }
  }
}
</script>

<style>
.burger-menu {
    cursor: pointer;
    height: 30px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  
  .burger-menu span {
    display: block;
    height: 4px;
    width: 100%;
    background-color: black;
  }
h1 {
    font-family: 'Leckerli One', cursive;
    font-size: 65px
}

.photo {
    width: 575px; 
    margin: 10px;
}

navbar-list {
    display: flex;
}
.navbar-list li {
    margin: 0 15px;
    list-style: none;
}
.navbar-list li a {
    font-size: 20px;
    text-decoration: none;
    color: rgb(45, 47, 47);
    position: relative;
}
.navbar-list li a::before {
    position: absolute ;
    top: -5px;
    left: 0;
    content: "";
    width: 0;
    height: 2px;
    border-radius: 6px;
    background-color: rgb(20, 20, 127);
    transition: 0.5s;
    z-index: -1
}
.navbar-list li a:hover::before {
    width: 100%;
}
</style>