<template>
  <div id="app" class="bg-main p-4 py-8">
    <div class="text-right">
      <logo></logo>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import logo from './components/svg/logo.vue'

export default {
  name: 'app',
  components: {
    logo
  }
}
</script>

<style>
  *{
    font-family: 'Fivo';
  }
  .bg-main{
    background-image: linear-gradient(180deg, #B367CF 0%, #D87CC7 26%, #F5919D 53%, #FF9267 72%, #FF9C48 84%, #FF9E00 100%);
    height: 100vh;
  }

  /* latin */
  @font-face {
    font-family: 'Fivo';
    font-style: normal;
    font-weight: 400;
    src: url(./assets/fonts/fivosans-regular-webfont.woff2) format('woff2');
  }
  /* latin */
  @font-face {
    font-family: 'Fivo';
    font-style: normal;
    font-weight: 700;
    src: url(./assets/fonts/fivosans-bold-webfont.woff2) format('woff2');
  }

</style>
