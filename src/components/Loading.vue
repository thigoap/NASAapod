<template>
  <div id="loading">
    <i class="fas fa-rocket"></i>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
#loading {
  font-size: 40px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  -webkit-animation: rocket 700ms linear infinite both;
  animation: rocket 700ms linear infinite both;
}

.theme--dark #loading {
  color: white;
}

@keyframes rocket {
  0% {
    transform: translate(0);
    transform: rotate(0);
  }
  10% {
    transform: translate(-1px,-1px);
  }
  20% {
    transform: translate(1px,-1px);
  }
  30% {
    transform: translate(-1px,1px);
  }
  40% {
    transform: translate(1px,1px);
  }
  50% {
    transform: translate(-1px,-1px);
  }
  60% {
    transform: translate(1px,-1px);
  }
  70% {
    transform: translate(-1px,1px);
  }
  80% {
    transform: translate(-2px,-2px);
  }
  90% {
    transform: translate(2px,-2px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
