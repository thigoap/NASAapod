<template>
  <div class="home">
    <Calendar
      @gotMedia="setMedia"
      @startLoad="startLoadAnim"
      :darkTheme="darkTheme"
    />
    <Loading
      v-if="isLoading"/>
    <Media
      v-if="media && !isLoading"
      v-bind:media="media" />
  </div>
</template>

<script>
import Calendar from '../components/Calendar'
import Media from '../components/Media'
import Loading from '../components/Loading'

export default {
  name: 'Home',
  components: {
    Calendar,
    Media,
    Loading
  },

  data () {
    return {
      media: '',
      isLoading: false
    }
  },
  props: {
    darkTheme: Boolean
  },
  methods: {
    startLoadAnim (loading) {
      this.isLoading = loading
    },
    setMedia (resJson) {
      this.media = resJson
      this.isLoading = false
    },
    toggleTheme () {
      this.darkTheme = !this.darkTheme
    }
  }
}
</script>

<style scoped>
</style>
