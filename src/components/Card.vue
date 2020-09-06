<template>
  <div class="card" :id="media.date"
    @click="showModal"
  >
    <Loading v-if="isLoading" />
    <div v-if="media.media_type === 'image'">
      <img class="card-media" v-bind:src="media.url" :alt="media.title"/>
    </div>
    <div v-if="media.media_type === 'video'">
      <div class="iframe-container">
        <iframe class="card-media" v-bind:src="media.url" />
      </div>
    </div>
    <div class="card-info">
      <p>{{ media.date }}</p>
      <p>{{ media.title }}</p>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
  name: 'Card',
  components: {
    Loading
  },
  props: {
    dateToCard: String
  },
  data () {
    return {
      isLoading: true,
      media: {}
    }
  },
  mounted () {
    fetch(`https://nasaapod.thigoap.vercel.app/api/${this.dateToCard}`)
      .then(res => res.json())
      .then(data => {
        this.media = data
        this.isLoading = false
      })
  },
  methods: {
    showModal () {
      this.$emit('showModal', this.dateToCard)
    }
  }
}
</script>

<style scoped>
  .card {
    display: grid;
    width: 240px;
    height: 240px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .card-media {
    width: 240px;
    height: 240px;
    object-fit: cover;
  }
  .card-info {
    position: absolute;
    width: 240px;
    bottom: 0;
    padding-left: 8px;
    padding-right: 8px;
    text-align: left;
    z-index: 10;
    background-color: rgba(0,0,0,0.5);
  }

  .card-info p {
    width: 230px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p,
  .theme--dark p {
    color:white;
}
</style>
