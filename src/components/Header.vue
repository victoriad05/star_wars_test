<template>
    <header>
        <div class="navbar">
            <a href="/" class="logo"><img src="../assets/images/Logo1280.svg"/></a>
            <nav>
                <div class="mobile_menu">
                    <img src="../assets/images/Menu.svg" alt="">
                    <p class="menu">Menu</p>
                </div>
                <ul class="nav_menu">
                    <li><router-link :to="{name: 'Home'}" class="nav_item">Home</router-link></li>
                    <li><router-link :to="{name: 'News'}" class="nav_item">News</router-link></li>
                    <li><router-link :to="{name: 'Gallery'}" class="nav_item">Gallery</router-link></li>
                    <li><router-link :to="{name: 'Forum'}" class="nav_item">Forum</router-link></li>
                </ul>
                <a class="favorites"><img src="../assets/images/Favourite.svg"/></a>
            </nav>
        </div>
        <div class="bread_crumbs">
            <p><span class="page">{{ currentPage }}</span> / <span class="content">Characters</span></p>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return{


        }
    },
    computed: {
        currentPage() {
            return this.$route.name;
        }
    }
}
</script>
<style lang="scss">
    @import url('../assets/styles/header.scss');
</style>