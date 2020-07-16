<template>
  <div class="home">
    <Calendar
      @gotcha="setMedia"
      :darkTheme="darkTheme"
    />
    <Media
      v-if="media"
      v-bind:media="media" />
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
import Media from '../components/Media'

export default {
  name: 'Home',
  components: {
    Calendar,
    Media
  },

  data () {
    return {
      media: ''
    }
  },
  props: {
    darkTheme: Boolean
  },
  methods: {
    setMedia (resJson) {
      this.media = resJson
    },
    toggleTheme () {
      this.darkTheme = !this.darkTheme
    }
  }
}
</script>

<style scoped>
</style>
