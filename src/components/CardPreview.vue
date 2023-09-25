<template>
    <div class="card_preview_container">
        <div class="card_preview_wrapper">
            <div class="img_item">
                <img :src="require(`@/assets/images/people/${imageIndex}.jpg`)" alt="{{ character.name }}">
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
        character: Object,
        imageIndex: Number,
    },
    methods: {
    openOverlay() {
      this.$emit('open-overlay', this.character, this.imageIndex); 
      console.log('open')
    },
  },
}
</script>
<style lang="scss">
    @import url('../assets/styles/card_preview.scss');
    
</style>