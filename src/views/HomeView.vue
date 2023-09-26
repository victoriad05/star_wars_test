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
      <div v-if="isLoading" class="loader">
        <Loader />
        Loading...
      </div>
      <div class="main_content" v-if="shouldShowMainContent">
        <CardPreview
          v-for="(character, index) in displayedCharacters" 
          :key="createKey(character)" 
          :character="character" 
          @open-overlay="openOverlay(character,calculateImageIndex(index))" 
          :imageIndex="calculateImageIndex(index)"
        />
      </div>
      <Pagination
        v-if="!isMobile"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="changePage"
      />
    </div>
    <Card 
      v-if="overlayVisible" 
      @close="closeOverlay" 
      :selectedCharacter="selectedCharacter" 
      @BgClick = 'closeOverlay'
      :imageIndex= 'selectedCharacterImageIndex'
    />  
  </MainContainer>
</template>

<script>

import MainContainer from '../components/MainContainer.vue';
import CardPreview from '../components/CardPreview.vue'
import Card from '../components/Card.vue';
import Pagination from '@/components/Pagination.vue';
import Loader from '@/components/Loader.vue';


const mobileBreakpoint = 767;

export default { 
  components: {
    MainContainer,
    CardPreview,
    Card,
    Pagination,
    Loader
  },
  data() {
    return {
      overlayVisible: false,
      characters: [],
      selectedCharacter: null,
      itemsPerPage: 4,
      currentPage: 1,
      isMobile: false,
      isLoading: true,
      loadedPages: 0,
    };
  },

  mounted() {
    // this.fetchCharacters()
    this.fetchCharacters().then(() => {
      this.isLoading = false;
    });
    window.addEventListener('resize', this.updateIsMobile);
    this.updateIsMobile();
  },

  computed: {
    totalPages() {
      return Math.ceil(this.characters.length / this.itemsPerPage);
    },
    displayedCharacters() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.isMobile ? this.characters : this.characters.slice(startIndex, endIndex);
    },

    shouldShowMainContent() {
      return this.characters.length >= 11 && !this.isLoading;
    },
  },

  
  methods: {
    async fetchCharacters() {
      let nextUrl = 'https://swapi.dev/api/people/';
  
      while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();
        this.characters.push(...data.results);
        nextUrl = data.next;
        this.loadedPages++;
      }
    },

    changePage(newPage) {
      if (newPage >= 1 && newPage <= this.totalPages) {
        this.currentPage = newPage;
      }
    },

    updateIsMobile() {
      const isMobileNow = window.innerWidth < mobileBreakpoint;
      if (isMobileNow !== this.isMobile) {
        this.currentPage = 1;
        this.isMobile = isMobileNow;
      }
    },
     
    openOverlay(character, imageIndex) {
      this.overlayVisible = true;
      this.selectedCharacter = character;
      this.selectedCharacterImageIndex = imageIndex;
    },

    closeOverlay() {
      this.overlayVisible = false;
    },

    createKey(character) {
      return character.name
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.updateIsMobile);
    },

    calculateImageIndex(index) {
      return (this.itemsPerPage * (this.currentPage - 1)) + index + 1;
    }

  },
}
</script>
<style lang="scss">
  @import url('../assets/styles/home.scss');
</style>

