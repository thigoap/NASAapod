<template>
  <div id="app" :class="theme">
    <div class="app-container">
      <Header :darkTheme="darkTheme" @changeTheme="toggleTheme" />
      <router-view :darkTheme="darkTheme" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      darkTheme: false
    }
  },
  mounted () {
    if (localStorage.getItem('darkTheme') === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.darkTheme = true
      }
    } else {
      this.darkTheme = JSON.parse(localStorage.getItem('darkTheme'))
    }
  },
  computed: {
    theme () {
      return this.darkTheme ? 'theme--dark' : ''
    }
  },
  watch: {
    darkTheme (theme) {
      localStorage.setItem('darkTheme', JSON.stringify(theme))
    }
  },
  methods: {
    toggleTheme () {
      this.darkTheme = !this.darkTheme
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;300;500;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'MuseoModerno', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: all 0.5s;
}

.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  color: #0b3d91;
}

.theme--dark {
  background: #1c2731;
}
.theme--dark h1 {
  color: red;
}
.theme--dark h3 {
  color: #dddddd;
}
.theme--dark p {
  color: #dddddd;
}
.theme--dark a {
  color: #dddddd;
}
</style>
