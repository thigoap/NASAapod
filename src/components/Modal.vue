<template>
  <div class="modal">
    <button
      id="closeBtn"
      class="closeBtn"
      @click="closeModal"
    >&times;</button>
    <Media
      v-if="media"
      v-bind:media="media" />
  </div>
</template>

<script>
import Media from '../components/Media'

export default {
  name: 'Modal',
  props: {
    dateToModal: String
  },
  components: {
    Media
  },
  data () {
    return {
      media: ''
    }
  },
  mounted () {
    console.log(`https://nasaapod.thigoap.vercel.app/api/${this.dateToModal}`)
    fetch(`https://nasaapod.thigoap.vercel.app/api/${this.dateToModal}`)
      .then(res => res.json())
      .then(data => { this.media = data })
  },
  methods: {
    closeModal () {
      this.$emit('closeModal', this.media.date)
    }
  }
}
</script>

<style scoped>
  .modal {
    background: white;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    overflow-y: auto;
    z-index: 20;
  }
  .theme--dark .modal {
    background: #1c2731;
  }
  .closeBtn {
    position: absolute;
    right: 8px;
    top: 8px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
  .theme--dark .closeBtn {
    color: white;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #374f5c;
  }
</style>
