<template>
    <div >
            <v-text-field
                hide-details
                append-icon="search"
                single-line
                placeholder="I'm looking for.."
                @keyup="searchOnKeyUp($event)"
                v-model="searchInput"
                ref="searchInput"
                light
                solo
                color="red"
                background-color="orange lighten-5"
                elevation="0"
                class="hidden-xs-only"
            ></v-text-field>

            <v-text-field
                hide-details
                single-line
                placeholder="I'm looking for.."
                @keyup="searchOnKeyUp($event)"
                v-model="searchInput"
                ref="searchInput"
                light
                elevation="0"
                class="hidden-sm-and-up"
            ></v-text-field>
    </div>
</template>


<script>

    export default {
        mounted() {
            if(this.$router.currentRoute.path=='/productlist' && this.$route.query.searchInput){
                this.searchInput = this.$route.query.searchInput
                this.$refs.searchInput.focus();
            }
            this.searchOnMount()

        },
        data() {
            return {
                searchInput:''
            }
        },
        methods: {
            searchOnKeyUp(event){
                console.log(event.code)
                var codes = ['ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'OSLeft', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Escape', 'ShiftLeft', 'ShiftRight', 'ContextMenu', 'CapsLock' ];
                if (codes.includes(event.code)) {
                    event.preventDefault();
                }
                else{
                    this.search()
                }
            },
            searchOnMount(event){
                this.searchInput=this.$route.query.searchInput
                this.search()
            },
            search(){
                if ((this.searchInput || []).length<3) {
                    // this.$store.dispatch('setSearchLoadingFalse')
                    // this.$store.commit('SET_SEARCH_PRODUCTS', []);
                }
                else{
                    this.gotorouterview('/productlist?searchInput='+this.searchInput)

                    this.$store.commit('SET_SEARCH_INPUT', this.searchInput)
                    this.$store.dispatch('setSearchLoading')
                    this.$store.dispatch('setSearchProducts')
                }
            },


        }
    }
</script>
