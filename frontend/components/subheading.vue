<template>
    <div>
        <v-row>

            <topsystembar></topsystembar>


        </v-row>
    </div>
</template>


<script>


import topsystembar from '@/components/topsystembar.vue'



export default {
    mounted() {
        window.addEventListener("scroll", this.handleScroll);

    },
    components: {
      topsystembar
    },
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        handleScroll() {
            if (window.scrollY >= 100) {
                this.menumargintop = 'mt64px'
            } else {
                this.menumargintop = 'mt89px'
            }
        },

    },

}
</script>


<style scoped>
    .mt89px{
        margin-top:89px !important;
    }
    .mt64px{
        margin-top:64px !important;
    }

    /* toolbar */
    /deep/ .v-toolbar__content{
        padding: 0px;;
    }
    /* toolbar */
</style>

