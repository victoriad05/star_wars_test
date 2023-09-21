<template>
    <div class="card_preview_container">
        <div class="card_preview_wrapper">
            <div class="img_item">
                <img src="../assets/images/D_W.png" alt="" />
            </div>
            <div class="text_item">
                <h1>{{ character.name }}</h1>
                <button @click="openOverlay">Learn more</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        character: Object
    },
    methods: {
    openOverlay() {
      this.$emit('open-overlay'); 
      console.log('open')
    },
  },
}
</script>
<style lang="scss">
    @import url('../assets/styles/card_preview.scss');
    
</style>