<template>
    <MainContainer>
      <div class="main_wrapper">
            <div class="page_info">
                <h1 class="page_name">Characters</h1>
                <div class="search_input">
                    <button class="search_btn"><img src="../assets/images/Search.svg" /></button>
                    <input type="text" class="search" placeholder="Search character...">
                </div>
            </div>
            <div class="main_content">
                <CardPreview v-for="character in characters" :key="createKey(character)" :character="character" @open-overlay="openOverlay(character)" />
            </div>
          </div>
          <Card v-if="overlayVisible" @close="closeOverlay" :selectedCharacter="selectedCharacter" @BgClick = 'closeOverlay'/>
        </MainContainer>
</template>

<script>

import MainContainer from '../components/MainContainer.vue';
import CardPreview from '../components/CardPreview.vue'
import Card from '../components/Card.vue';

export default { 
  components: {
    MainContainer,
    CardPreview,
    Card
},
  data() {
    return {
      overlayVisible: false,
      characters: [],
      selectedCharacter: null,
    };
  },

  created() {
    this.fetchCharacters()
  },

  methods: {
    async fetchCharacters(){
      try {
        const res = await fetch('https://swapi.dev/api/people/')
        const data = await res.json()
        this.characters = data.results;
      } catch (err) {
        console.error(err)
      }
    },

    openOverlay(character) {
      this.overlayVisible = true;
      this.selectedCharacter = character;
    },
    closeOverlay() {
      this.overlayVisible = false;
    },
    createKey(character) {
      return character.name
    }

  },
}
</script>
<style lang="scss">
  @import url('../assets/styles/home.scss');
</style>
