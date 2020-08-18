<template>
  <div>
    <br>
    <div><h3>{{ media.title }}</h3><br></div>
    <div>
      <div v-if="media.media_type === 'image'">
        <img v-bind:src="media.url"/>
      </div>
      <div v-if="media.media_type === 'video'">
        <div class="iframe-container">
          <iframe v-bind:src="media.url" />
        </div>
      </div>
    </div>
    <div v-if="media.copyright">
      <p>Copyright: {{ media.copyright }}</p>
    </div>
    <br>
    <div v-if="media.explanation">
      <p>Explanation:<br>{{ media.explanation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Media',
  props: {
    media: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 100%;
  height: auto;
}
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
}
.iframe-container iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
