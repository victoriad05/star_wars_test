<template>
  <Header />
  <!-- <Card /> -->
  <router-view/>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Card from './components/Card.vue';

export default {
    components: {
    Header,
    Footer,
    Card
}
}
</script>

<style lang="scss">
  @import './assets/styles/index.scss';
</style>
