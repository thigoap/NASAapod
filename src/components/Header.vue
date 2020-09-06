<template>
  <header>
    <a target="blank" href="http://www.nasa.gov">
      <img class="icon" src="../assets/NASAlogo.png" alt="">
    </a>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/about">About</router-link> |
      <i class="fas fa-sun" v-if="darkTheme" @click="toggleTheme"></i>
      <i class="fas fa-moon" v-else @click="toggleTheme"></i>
    </nav>
    <h1 class="title">NASA APOD</h1>
    <hr>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    darkTheme: Boolean
  },
  methods: {
    toggleTheme () {
      this.$emit('changeTheme')
    }
  }
}
</script>

<style scoped>
.icon {
  padding-top: 8px;
  width: 56px;
  height: auto;
}

nav {
  margin-bottom: 4px;
}

i {
  cursor: pointer;
  font-size: 0.8rem;
}

.fa-sun {
  color: #dddddd;
}

@font-face {
  font-family: 'NASA';
  font-style: normal;
  font-weight: normal;
  src: local('NASA'), url('../assets/Nasa.ttf') format('truetype');
  }

.title {
  font-family: 'NASA';
  padding-bottom: 4px;
}
</style>
