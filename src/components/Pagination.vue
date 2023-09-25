<template >
    <nav class="pagination">
      <ul>
        <li class="btn_container">
            <a 
                href="#" 
                class="btn"
                @click.prevent="changePage(currentPage - 1)"
                :class="{ disabled: currentPage === 1 }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_43_1916)">
                        <path d="M15.4102 7.41L10.8302 12L15.4102 16.59L14.0002 18L8.00016 12L14.0002 6L15.4102 7.41Z" fill="#ECE9E9"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_43_1916">
                            <rect width="24" height="24" fill="white" transform="matrix(0 1 -1 0 24 0)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </li>
        <li v-for="pageNumber in pagesToShow" :key="pageNumber">
          <a
            class="number"
            href="#"
            @click.prevent="changePage(pageNumber)"
            :class="{ active: currentPage === pageNumber }"
          >
            {{ pageNumber }}
          </a>
        </li>
        <li class="btn_container">
            <a 
                class="btn" 
                href="#" 
                @click.prevent="changePage(currentPage + 1)"
                :class="{ disabled: currentPage === totalPages }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_43_1911)">
                        <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#ECE9E9"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_43_1911">
                            <rect width="24" height="24" fill="white" transform="matrix(0 -1 1 0 0 24)"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </li>
      </ul>
    </nav>
</template>
<script>
export default {
    props: {
        currentPage: Number,
        totalPages: Number,
        maxPagesToShow: {
            type: Number,
            default: 7,
        }
    },

    computed: {
        pagesToShow() {
            const startPage = Math.max(1, this.currentPage - Math.floor(this.maxPagesToShow / 2));
            const endPage = Math.min(this.totalPages, startPage + this.maxPagesToShow - 1);

            const pages = [];
            if(startPage > 1) {
                pages.push(1);
                if(startPage > 2) {
                    pages.push('...')
                }
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < this.totalPages) {
                if (endPage < this.totalPages - 1) {
                    pages.push('...');
                }
                pages.push(this.totalPages);
            }
            return pages;
        }
    },
    methods: {
        changePage(newPage) {
            if (typeof newPage === 'number') {
            this.$emit('page-changed', newPage);
            }
        },
    },
}
</script>
<style lang="scss">
    @import url('../assets/styles/pagination.scss');
</style>