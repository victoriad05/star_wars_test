<template>
    <div class="bg_wrapper" @click="BgClick">
        <div class="card_container">
            <div class="card_wrapper">
                <button class="close_btn" @click="closeOverlay"><img src="../assets/images/exit.svg"/></button>
                <div class="img_item">
                    <img src="../assets/images/D_W.png" alt="" />
                </div>
                <div class="text_item">
                    <h1>{{ selectedCharacter.name }}</h1>
                    <div class="descr">
                        <div class="descr_param">
                            <p>Birth year:</p>
                            <p>Height:</p>
                            <p>Mass:</p>
                            <p>Hair color:</p>
                            <p>Skin color:</p>
                            <p>Eyes color:</p>
                            <p>Films:</p>
                        </div>
                        <div class="descr_data">
                            <p>{{selectedCharacter.birth_year}}</p>
                            <p>{{ selectedCharacter.height }}cm</p>
                            <p>{{selectedCharacter.mass}}kg</p>
                            <p>{{ selectedCharacter.hair_color }}</p>
                            <p>{{ selectedCharacter.skin_color }}</p>
                            <p>{{ selectedCharacter.eye_color }}</p>
                            <p>Retitled Star Wars: Episode IV —A New Hope), 
            Star Wars: Episode V—The Empire Strikes Back,
            Star Wars: Episode VI—Return of the Jedi.</p>
                        </div>
                    </div>
                    <button>Add favorite <img src="../assets/images/Favourite.svg"/></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        selectedCharacter: Object
    },
    methods: {
    closeOverlay() {
      this.$emit('close');
      console.log('close')
    },
    BgClick(e) {
      const cardContainer = this.$el.querySelector('.card_container');
      if (!cardContainer.contains(e.target)) {
        this.closeOverlay();
      }
    }
  },
}
</script>
<style lang="scss">
    @import url('../assets/styles/card.scss');
</style>