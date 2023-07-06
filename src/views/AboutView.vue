<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Compteur/>
  </div>
</template>

<script>
  console.log("the page about is loaded")
  import Compteur from '@/components/Compteur'

  export default {
    name: 'AboutView',
    components: {
      Compteur
    }
  }
</script>
