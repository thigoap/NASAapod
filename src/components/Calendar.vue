<template>
  <div>
    <br><p>Select a date from June 16, 1995 to today</p>
    <date-picker
      v-if="darkTheme"
      class="date-picker"
      v-model="date"
      :min-date='new Date(1995, 5, 16)'
      :max-date='new Date()'
      is-dark
    />
    <date-picker
      v-else
      class="date-picker"
      v-model="date"
      :min-date='new Date(1995, 5, 16)'
      :max-date='new Date()'
    />
    <button
      v-bind:disabled="date===''"
      @click='fetchData()'>Show Media
    </button>
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import moment from 'moment'

export default {
  name: 'Calendar',
  props: {
    darkTheme: Boolean
  },
  components: {
    DatePicker
  },
  data () {
    return {
      date: ''
    }
  },
  methods: {
    formatDate (date) {
      return moment(date).format('YYYY-MM-DD')
    },
    fetchData (date) {
      const formattedDate = this.formatDate(this.date)
      fetch(`https://nasaapod.thigoap.vercel.app/api/${formattedDate}`)
        .then(res => res.json())
        .then(result => { this.$emit('gotcha', result) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date-picker {
  display: inline-block;
  max-width: 110px;
}
button:disabled,
.theme--dark button:disabled {
  background: gray;
  color: #bebebe;
  cursor: default;
}
button {
  margin-top: 8px;
  margin-left: 8px;
  padding: 4px;
  border-radius: 4px;
  font-family: 'MuseoModerno', cursive;
  color:white;
  background:#0b3d91;
  text-decoration: none;
  cursor: pointer;
}

.theme--dark button {
  color:white;
  background:red;
}
</style>
