<template>
  <nav>
    <router-link to="/" class="nav-link">Accueil</router-link>
    <router-link to="/about" class="nav-link">Réservation</router-link>
    <router-link to="/i" class="nav-link">Maison</router-link>
    <router-link to="/d" class="nav-link">Terrain</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {
    refreshPage() {
      location.reload();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.refresh-text {
  cursor: pointer;
}

body {
  background: white;
}

nav #img {
  position: left;
  width: 50px;
  height: 50px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 30px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.5);
}

.nav-link:hover {
  text-decoration: underline;
  text-decoration-color: black;
  text-underline-offset: 5px;
  text-decoration-thickness: 3px;
  border-radius: 20px;
}

.nav-link.router-link-active {
  text-decoration: underline;
  text-decoration-color: black;
  text-underline-offset: 5px;
  text-decoration-thickness: 3px;
  border-radius: 20px;
}
</style>
