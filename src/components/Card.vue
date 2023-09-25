<template>
    <div class="bg_wrapper" @click="BgClick">
        <div class="card_container">
            <div class="card_wrapper">
                <button class="close_btn" @click="closeOverlay"><img src="../assets/images/exit.svg"/></button>
                <div class="img_item">
                    <img :src="require(`@/assets/images/people/${imageIndex}.jpg`)" alt="{{ selectedCharacter.name }}" />
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
                            <p>{{ movies }}</p>
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
        selectedCharacter: Object,
        imageIndex: Number,
    },
    data() {
        return {
            filmTitles: [],
            loadingFilms: true,
        }
    },

    computed: {
        movies() {
            const films = this.selectedCharacter.films.map(filmUrl => {
                const filmId = filmUrl.match(/(\d+)\/$/);
                if (filmId) {
                    const index = parseInt(filmId[1]) - 1;
                    if (index >= 0 && index < this.filmTitles.length) {
                        return this.filmTitles[index];
                    }
                }
                return 'Loading'
            });
            if (films.every(film => film !== "Loading...")) {
                this.loadingFilms = false; 
            }
            return films.join(', ');
        },
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
        },
        async moviesTitle() {
            this.selectedCharacter.films.forEach(async filmUrl => {
                const response = await fetch(filmUrl);
                const filmData = await response.json();
                this.filmTitles.push(filmData.title);
            });
        },
    },

    async mounted() {
        await this.moviesTitle();
    },
}
</script>
<style lang="scss">
    @import url('../assets/styles/card.scss');
</style>