<template >
    <footer>
        <div class="footer_wrapper">
            <div class="footer_content">
                <a href="/" class="logo"><img src="../assets/images/Logo1280.svg" /></a>
                <div class="navigation">
                    <div class="navigation_item">
                        <h2 class="nav_title">Info</h2>
                        <a href="#" class="nav_link">About us</a>
                        <a href="#" class="nav_link">Terms & Conditions</a>
                        <a href="#" class="nav_link">Social Media</a>
                    </div>
                    <div class="navigation_item">
                        <h2 class="nav_title">Extra</h2>
                        <a href="#" class="nav_link">Games</a>
                        <a href="#" class="nav_link">Movies</a>
                        <a href="#" class="nav_link">Fandom</a>
                    </div>
                </div>
                <div class="navigation_mobile">
                    <div class="dropdown">
                        <button @click="toggleDropdown(1)" >
                            Info
                            <img src="../assets/images/Arrow_dropdown.svg" alt="arrow" :class="{ 'rotate-arrow': isDropdownOpen[1]}">
                        </button>
                        <ul v-if="isDropdownOpen[1]" class="dropdown_menu">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Social Media</a></li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button @click="toggleDropdown(2)" >
                            Extra
                            <img src="../assets/images/Arrow_dropdown.svg" alt="arrow" :class="{ 'rotate-arrow': isDropdownOpen[2] }">
                        </button>
                        <ul v-if="isDropdownOpen[2]" class="dropdown_menu">
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Fandom</a></li>
                        </ul>
                    </div>
                </div>
                <div class="subscribtion">
                    <h1 class="subscribtion_title">Subscribe for news</h1>
                    <p class="subscribtion_subtitle">Get the latest news from StarWars world.</p>
                    <form class="subscribtion_form">
                            <button><img src="../assets/images/Arrow.svg" /></button>
                            <input type="text" placeholder="Enter e-mail">
                    </form>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data(){ 
    return {
        isDropdownOpen: {1:false, 2: false},
    }
},
    methods: {
        toggleDropdown(id) {
            this.isDropdownOpen[id] = !this.isDropdownOpen[id];
        },
    },
}
</script>
<style lang="scss">
    @import url('../assets/styles/footer.scss');
</style>