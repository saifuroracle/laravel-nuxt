<template>
            <v-system-bar  app color="#ffa5009c"   v-if="!hidden" class="hidden-sm-and-down">

                <span class="ml-4">{{ companyinfo.topSystemQuote }}</span>
                <v-spacer></v-spacer>
                <span
                    @click="gotorouterview('/productlist')"
                    style="cursor: pointer;"
                >Shop</span>
                <v-icon class="ma-2">more_vert</v-icon>

                <span class="mr-4"
                    @click="gotorouterview('/wishlist')"
                    style="cursor: pointer;"
                >Wishlist</span>

                <!-- <span class="mr-2">Follow us on: </span> -->
                <v-btn
                    class="mx-0 mr-2"
                    icon
                    :href="companyinfo.facebookLink"
                    target="_blank"
                    color="indigo"
                    x-small
                >
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-icon v-on="on">{{ companyinfo.facebookIconClass }}</v-icon>
                        </template>
                        <span>Facebook</span>
                    </v-tooltip>
                </v-btn>

                <v-btn
                class="mx-0 mr-2"
                icon
                :href="companyinfo.twitterLink"
                target="_blank"
                color="blue"
                x-small
                >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" >{{ companyinfo.twitterIconClass }}</v-icon>
                    </template>
                    <span>Twitter</span>
                </v-tooltip>
                </v-btn>
                <v-btn
                class="mx-0 mr-2"
                icon
                :href="companyinfo.instagramLink"
                target="_blank"
                color="pink accent-4"
                x-small
                >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" >{{ companyinfo.instagramIconClass }}</v-icon>
                    </template>
                    <span>Instagram</span>
                </v-tooltip>
                </v-btn>
                <v-btn
                class="mx-0 mr-2"
                icon
                :href="companyinfo.googlePlusLink"
                target="_blank"
                color="red darken-3"
                x-small
                >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" >{{ companyinfo.googlePlusIconClass }}</v-icon>
                    </template>
                    <span>Google Plus</span>
                </v-tooltip>
                </v-btn>
                <v-btn
                class="mx-0 mr-2"
                icon
                :href="companyinfo.linkedinLink"
                target="_blank"
                color="blue darken-1"
                x-small
                >
                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" >{{ companyinfo.linkedinIconClass }}</v-icon>
                    </template>
                    <span>Linkedin</span>
                </v-tooltip>
                </v-btn>
            </v-system-bar>
</template>


<script>


export default {
    mounted() {
        this.getCompanyInfo();
        window.addEventListener("scroll", this.handleScroll);
    },
    data() {
        return {
            companyinfo: {},
            hidden:false
        };
    },
    computed: {

    },
  methods: {
    getCompanyInfo() {
      var _this = this;
      this.$axios.$get("/api/getCompanyInfo")
        .then(function(response) {
          _this.companyinfo = response.data;
        })
        .catch(function(error) {});
    },
    handleScroll() {
      if (window.scrollY >= 100) {
          this.hidden=true
      } else {
          this.hidden=false
      }
    },


  }
};
</script>


