<template>
    <v-app>
        <subheading_f></subheading_f>
        <advertisement_slider_f></advertisement_slider_f>
        <!-- <featuredproducts_f></featuredproducts_f> -->
        <!-- <homerandomproducts_f></homerandomproducts_f> -->
        <!-- <homelastnnumberproducts_f></homelastnnumberproducts_f> -->
        <browsebybrands_f></browsebybrands_f>
        <!-- <ourservices_f/> -->
        <!-- <contactus_f/> -->
        <v-spacer></v-spacer>
        <!-- <latestviewsproducts_f></latestviewsproducts_f> -->
        <latestbestsellingtopratedproducts_f ></latestbestsellingtopratedproducts_f >
        <footer_f></footer_f>




    </v-app>
</template>


<script>
    import subheading_f from '@/components/subheading.vue'
    // import products_f from './products.vue'
    import browsebybrands_f from '@/components/browsebybrands.vue'
    // import featuredproducts_f from './featuredproducts.vue'
    // import ourservices_f from './ourservices.vue'
    // import contactus_f from './contactus.vue'
    import advertisement_slider_f from '@/components/advertisement_slider.vue'
    // import homerandomproducts_f from './homerandomproducts.vue'
    // import homelastnnumberproducts_f from './homelastnnumberproducts.vue'
    // import latestviewsproducts_f from './latestviewsproducts.vue'
    import latestbestsellingtopratedproducts_f from '@/components/latestbestsellingtopratedproducts.vue'
    import footer_f from '@/components/footer.vue'

    // import seoMixins from './../../mixins/seo.vue'

    export default {
        components:{
            // subheading_f, advertisement_slider_f, homelastnnumberproducts_f, latestviewsproducts_f, featuredproducts_f,
             subheading_f, advertisement_slider_f, browsebybrands_f,  footer_f, latestbestsellingtopratedproducts_f
            // ourservices_f, advertisement_slider_f, contactus_f, products_f,
        },
        mixins: [],
        mounted() {
            this.topFunction()

        },
        asyncData({ store }) {

          console.log("=======================called=========================")
          // let {data} = await this.$axios.$post('/api/auth/me?token='+localStorage.getItem('token'))

          // this.$axios.$post('/api/auth/me?token='+localStorage.getItem('token'))
          // store.dispatch('checkIsLoggedIn')

        },
        computed: {
          // userInfo(){
          //   return this.$store.state.userInfo
          // },

          // isLoggedIn(){
          //   return this.$store.getters.getIsLoggedIn

          // }
        },
        metaInfo: {
            titleTemplate: '%s Home'
        }



    }
</script>
