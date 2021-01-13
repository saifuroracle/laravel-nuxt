<template>
  <v-footer class="orange lighten-5" padless >
    <!-- <v-card
      class="flex grey lighten-3 black--text"
      flat
      tile
    >
      <v-card-title >
        <v-btn class="mx-1" icon :href="companyinfo.facebookLink" target="_blank" color="indigo" >
          <v-icon size="24px">{{ companyinfo.facebookIconClass }}</v-icon>
        </v-btn>
        <v-btn class="mx-1" icon :href="companyinfo.twitterLink" target="_blank" color="blue" >
          <v-icon size="24px">{{ companyinfo.twitterIconClass }}</v-icon>
        </v-btn>
        <v-btn class="mx-1" icon :href="companyinfo.instagramLink" target="_blank" color="pink accent-4" >
          <v-icon size="24px">{{ companyinfo.instagramIconClass }}</v-icon>
        </v-btn>
        <v-btn class="mx-1" icon :href="companyinfo.googlePlusLink" target="_blank" color="red darken-3" >
          <v-icon size="24px">{{ companyinfo.googlePlusIconClass }}</v-icon>
        </v-btn>
        <v-btn class="mx-1" icon :href="companyinfo.linkedinLink" target="_blank" color="blue darken-1" >
          <v-icon size="24px">{{ companyinfo.linkedinIconClass }}</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <h6>Copyright &copy; {{ new Date().getFullYear() }} EasySheba . All rights reserved.</h6>
      </v-card-title>
    </v-card>-->

    <v-container class="flex black--text" >
      <!-- <v-row class="topHover" @click="topFunction">
        <v-btn class="mx-auto" color="primary" text>Back to top</v-btn>
      </v-row> -->

      <!-- <v-btn
            fab
            dark
            fixed
            bottom
            right
            color="orange"
            @click="gotorouterview('/chat')"
            :style="isSMALT?'margin-right:38px;':'margin-right:66px;'"
            v-bind="btnSize"
            v-if="userInfo.id"
          >
            <v-icon>chat</v-icon>
      </v-btn> -->
      <v-btn
            fab
            dark
            fixed
            bottom
            right

            @click="topFunction"
            v-bind="btnSize"
            color="white"
            style="background: orange;"
          >
            <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>

      <v-container>
        <v-row>

            <v-col :class="isSMALT?'py-0':''" xs="12" sm="6" md="3"  cols="auto"  >
                <div >
                    <div class="d-flex mx-auto">
                        <v-img :src="backend_baseUrl+'/imageResize?url='+companyinfo.logoPath+'&sizeX=130&sizeY=100'" height="60" aspect-ratio contain  class="mx-auto"></v-img>
                    </div>
                    <div class="d-flex">
                        <v-card-title class="d-inline-block mx-auto">
                            <v-btn
                                class="mx-0"
                                icon
                                :href="companyinfo.facebookLink"
                                target="_blank"
                                color="indigo"
                            >
                                <v-icon size="24px">{{ companyinfo.facebookIconClass }}</v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-0"
                                icon
                                :href="companyinfo.twitterLink"
                                target="_blank"
                                color="blue"
                            >
                                <v-icon size="24px">{{ companyinfo.twitterIconClass }}</v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-0"
                                icon
                                :href="companyinfo.instagramLink"
                                target="_blank"
                                color="pink accent-4"
                            >
                                <v-icon size="24px">{{ companyinfo.instagramIconClass }}</v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-0"
                                icon
                                :href="companyinfo.googlePlusLink"
                                target="_blank"
                                color="red darken-3"
                            >
                                <v-icon size="24px">{{ companyinfo.googlePlusIconClass }}</v-icon>
                            </v-btn>
                            <v-btn
                                class="mx-0"
                                icon
                                :href="companyinfo.linkedinLink"
                                target="_blank"
                                color="blue darken-1"
                            >
                                <v-icon size="24px">{{ companyinfo.linkedinIconClass }}</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-title>
                    </div>
                    <div class="d-flex">
                        <h6 class="d-inline-block  mx-auto"
                        >Copyright &copy; {{ new Date().getFullYear() }} {{ companyinfo.name }} . All rights reserved.
                        </h6>
                    </div>
                </div>
            </v-col>




            <v-col :class="isSMALT?'py-0':''" xs="12" sm="6" md="3"  cols="auto"  light>
                <hr style="width:83vw;" v-if="isXS">
                <v-list style="background-color:transparent;" dense :class="isSMALT?'py-0':''">
                    <v-list-item @click="gotorouterview('/')" dense>Home</v-list-item>
                    <v-list-item @click="gotorouterview('/pages/'+aboutus.pageSlug); setPageData(aboutus.pageSlug)" dense>About Us</v-list-item>
                    <v-list-item @click="gotorouterview('/pages/'+branches.pageSlug); setPageData(branches.pageSlug)" dense>Branches</v-list-item>
                </v-list>
            </v-col>

            <v-col :class="isSMALT?'py-0':''" xs="12" sm="6" md="3"  cols="auto"  light >
                <hr style="width:83vw;" v-if="isXS">
                <v-list style="background-color:transparent;" dense :class="isSMALT?'py-0':''">
                    <v-list-item @click="gotorouterview('/pages/'+ourprocedures.pageSlug); setPageData(ourprocedures.pageSlug)" dense>Order Procedures</v-list-item>
                    <v-list-item @click="gotorouterview('/pages/'+paymentmethod.pageSlug); setPageData(paymentmethod.pageSlug)" dense>Payment Method</v-list-item>
                    <v-list-item @click="gotorouterview('/pages/'+termscondition.pageSlug); setPageData(termscondition.pageSlug)" dense>Terms & Conditions</v-list-item>
                    <v-list-item @click="gotorouterview('/pages/'+privacypolicy.pageSlug); setPageData(privacypolicy.pageSlug)" dense>Privacy Policy</v-list-item>
                </v-list>
            </v-col>

            <v-col :class="isSMALT?'py-0':''" xs="12" sm="6" md="3"  cols="auto" light>
                <hr style="width:83vw;" v-if="isXS">
                <v-list style="background-color:transparent;" dense :class="isSMALT?'py-0':''">
                    <v-list-item class="font-weight-bold" >Contact Us</v-list-item>
                    <v-list-item v-html="companyinfo.address" v-if="companyinfo.address"></v-list-item>
                    <v-list-item>
                        Email: {{companyinfo.email}} <br>
                        {{companyinfo.phone}}
                    </v-list-item>
                </v-list>
            </v-col>



        </v-row>

        <!-- <v-row>
          <v-col cols="6">
            <v-row class>
              <p class="p-3">Privacey Policy</p>
              <p class="p-3">Terms of Service</p>
            </v-row>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="6" class="d-flex">
            <h6
              class="d-inline-block ml-auto"
            >Copyright &copy; {{ new Date().getFullYear() }} EasySheba . All rights reserved.</h6>
          </v-col>
        </v-row> -->
      </v-container>
    </v-container>
  </v-footer>
</template>


<script>
import responsiveMixins from '@/plugins/mixins/responsiveMixins.js'

// import { mapState } from 'vuex'


export default {
  mounted() {
    this.getCompanyInfo();
    this.getPages();
  },
  data() {
    return {
      companyinfo: {},
      pages:[]
    };
  },
  mixins: [responsiveMixins],
  methods: {
    getCompanyInfo() {
      var _this = this;
      this.$axios.$get("api/getCompanyInfo")
        .then(function(response) {
          _this.companyinfo = response.data;
        })
        .catch(function(error) {});
    },
    topFunction() {
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    getPages(){
        var _this = this;
        this.$axios.$get('/api/getPages')
        .then(function (response) {
            _this.pages = response.data;
        })
        .catch(function (error) {
        })
    },
    setPageData(pageSlug){
        this.$store.dispatch('setDynamicPageInfo', {pageSlug:pageSlug})
    }

  },
  computed: {
        aboutus:function(){
            return this.pages.filter(function(page){
                return page.pageId==1
            })[0]
        },
        branches:function(){
            return this.pages.filter(function(page){
                return page.pageId==2
            })[0]
        },
        ourprocedures:function(){
            return this.pages.filter(function(page){
                return page.pageId==3
            })[0]
        },
        paymentmethod:function(){
            return this.pages.filter(function(page){
                return page.pageId==4
            })[0]
        },
        termscondition:function(){
            return this.pages.filter(function(page){
                return page.pageId==5
            })[0]
        },
        privacypolicy:function(){
            return this.pages.filter(function(page){
                return page.pageId==6
            })[0]
        },
        btnSize: function(){
            return this.isSMALT?{'x-small':true} : {};
        },

        // ...mapState([
        //     'userInfo',
        // ]),
  }
};
</script>

<style scoped>

 /* scoped = limits only to this componenet */
.toTop {
  background-color: wheat;
}
.color {
  background-color: beige;
  color: black;
  margin: 5px 0;
}
.topHover:hover {
  background-color: #bbdefb;
}
.footeraboutsection {
  color: black;
}
</style>
