<template>
  <div id="gallery">
    <div class="gallery">
      <div
        class="wrapper"
        v-for="day in 6"
        :key="day">
        <Card
          :dateToCard="setDate(day)"
          @showModal="showModal"
        />
      </div>
    </div>
    <Modal
      v-if="show"
      :dateToModal="dateToModal"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import moment from 'moment'
import Card from '../components/Card'
import Modal from '../components/Modal'

export default {
  name: 'Gallery',
  components: {
    Card,
    Modal
  },
  data () {
    return {
      show: false,
      dateToModal: ''
    }
  },
  methods: {
    setDate (day) {
      this.formattedDate = moment().subtract(day, 'days').format('YYYY-MM-DD')
      return this.formattedDate
    },
    showModal (date) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.show = true
      this.dateToModal = date
    },
    closeModal (id) {
      this.show = false
      const card = document.getElementById(`${id}`)
      card.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
#gallery {
  display: flex;
  justify-content: center;
  flex: 1;
  position: relative;
}
.gallery {
  margin-top: 16px;
  display: grid;
  grid-gap: 16px;
}
.wrapper {
  display: flex;
  justify-content: center;
}
@media (min-width: 540px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 800px) {
  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
