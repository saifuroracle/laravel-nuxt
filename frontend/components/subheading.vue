<template>
    <div>
        <v-row>

            <topsystembar></topsystembar>

            <v-card>


                <v-app-bar app elevation="1" class="px-5" color="rgba(255, 165, 0, 0.38)"  v-if="isMDAGT" clipped-left>


                    <v-app-bar-nav-icon class="ml-1">
                        <v-img height="60" aspect-ratio contain
                         :src="'/imageResize?url='+companyinfo.logoPath+'&sizeX=130&sizeY=100'"
                         @click="gotorouterview('/')">
                            <template v-slot:placeholder>
                                <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                                >
                                    <v-progress-circular indeterminate color="orange"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                    </v-app-bar-nav-icon>

                    <v-spacer></v-spacer>

                    <!-- search component -->
                    <v-flex>
                        <search ></search >
                    </v-flex>
                    <!-- search component -->

                    <v-spacer></v-spacer>



                    <!-- <cart_wishlist_compare > </cart_wishlist_compare > -->




                    <v-btn
                        outlined
                        color="indigo darken-1 ml-1"
                        v-if="isLoggedIn==false"
                        @click="gotorouterview('/login')"
                        >
                            Sign In
                    </v-btn>

                    <!-- <v-menu
                        offset-y
                        transition="slide-x-transition"
                        bottom
                         v-if="isLoggedIn"
                        >
                        <template v-slot:activator="{ on }">
                            <v-btn text icon>
                                <v-avatar v-if="isLoggedIn" color="indigo" v-on="on" size="30">
                                    <v-icon color="white" v-if="!userInfo.photoPath">person</v-icon>
                                    <img
                                        :src="userInfo.photoPath"
                                        :alt="((userInfo.name).match(/\b(\w)/g)).join('')"
                                        v-if="userInfo.photoPath"
                                    >
                                </v-avatar>
                            </v-btn>
                        </template>
                        <v-list min-width="220">
                            <profile_menu></profile_menu>
                        </v-list>
                    </v-menu> -->

                </v-app-bar>

            </v-card>

            <v-card style=" margin-bottom:40px;">
                <v-app-bar app elevation="1" v-if="isMDAGT" :class="menumargintop" color="rgba(255, 165, 0, 0.38)"    dense height="35" clipped-left>
                    <v-spacer></v-spacer>
                    <v-toolbar dense elevation="0" color="rgba(0,0,0,0)">





                        <!-- home -->
                        <!-- home -->
                        <v-btn
                            text
                            class="text-capitalize text-decoration-none"
                            to="/"  @click="gotorouterview('/')"
                        >
                            <v-icon left>home</v-icon>
                            Home
                        </v-btn>



                        <!-- Categories -->
                        <!-- Categories -->
                        <v-menu offset-y  transition="slide-x-transition"  bottom>
                            <template v-slot:activator="{ on}">
                                <v-btn
                                    v-on="on"
                                    text
                                    class="text-capitalize"
                                >
                                    Categories
                                    <v-icon>keyboard_arrow_down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-treeview
                                    :items="categoriesTree"
                                    item-key="categoryId"
                                    shaped
                                    open-on-click
                                    dense
                                    activatable
                                    color="orange"
                                >
                                    <template slot="label" slot-scope="{ item }">
                                        <a   @click="setSearchCategoryProducts(item.categorySlug)" class="black--text tree-node"  >{{item.category}}</a>
                                    </template>
                                </v-treeview>
                            </v-list>
                        </v-menu>



                        <v-btn
                            text
                            class="text-capitalize"
                            @click="gotorouterview('/brands'); "
                            to="/brands"
                        >
                            Brands
                        </v-btn>


                        <!-- Limited Editions -->
                        <!-- Limited Editions -->
                        <v-btn
                            text
                            class="text-capitalize"
                            @click="gotorouterview('/productlist?limitededitions=1'); qpClear();"
                            to="/productlist?limitededitions=1"
                        >
                            Limited Editions
                        </v-btn>


                        <!-- New Arrivals -->
                        <!-- New Arrivals -->
                        <v-btn
                            text
                            class="text-capitalize"
                            @click="gotorouterview('/productlist?newarrivals=1'); qpClear();"
                            to="/productlist?newarrivals=1"
                        >
                            New Arrivals
                        </v-btn>


                        <!-- Gift -->
                        <!-- Gift -->
                        <v-menu offset-y  transition="slide-x-transition"  bottom>
                            <template v-slot:activator="{ on}">
                                <v-btn
                                    v-on="on"
                                    text
                                    class="text-capitalize"
                                >
                                    Gift Set
                                    <v-icon>keyboard_arrow_down</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in gifttypes"
                                    :key="i"
                                    @click="gotorouterview('/productlist?giftTypeSlug='+item.giftTypeSlug); qpClear(); qpGiftTypeSlug=item.giftTypeSlug"
                                    :class="item.giftTypeSlug==qpGiftTypeSlug?'list-active-item':''"
                                    dense
                                    >
                                    <v-list-item-title >{{ item.giftType }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>



                    </v-toolbar>
                    <v-spacer></v-spacer>
                </v-app-bar>
            </v-card>

            <v-card width="960" class=" mx-auto" v-if="isSMALT" >
                <v-app-bar fixed>
                    <v-toolbar dense elevation="0">
                        <v-spacer></v-spacer>

                        <v-app-bar-nav-icon
                            v-show="subheading_dropdown_list==false"
                            @click="subheading_dropdown_list=true"
                            small

                        ></v-app-bar-nav-icon>
                        <v-btn
                            icon
                            v-show="subheading_dropdown_list==true"
                            @click="subheading_dropdown_list=false"
                        >
                            <v-icon small>close</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>

                        <!-- <v-icon @click="gotorouterview('/')" color="orange" v-show="subheading_dropdown_list==false">home</v-icon> -->

                        <search></search>
                        <v-spacer></v-spacer>
                        <!-- <cart_wishlist_compare></cart_wishlist_compare> -->
                        <v-spacer></v-spacer>

                    </v-toolbar>


                </v-app-bar>

                <v-list elevation="5" dense v-show="subheading_dropdown_list==true" v-if="isSMALT" class=" fluid" style="margin-top:57px; position:fixed; width:100%; z-index:100;" >
                    <v-list-item-group class="pl-3">
                        <v-list-item to="/"  @click="gotorouterview('/')" style="text-decoration: none;">
                            <v-list-item-icon>
                                <v-icon>home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title >Home</v-list-item-title>
                        </v-list-item>
                        <v-list-item v-if="!($auth.loggedIn)" to="/login"  @click="gotorouterview('/login')" style="text-decoration: none;">
                            <v-list-item-icon>
                                <v-icon>lock_open</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title >Sign In</v-list-item-title>
                        </v-list-item>

                        <v-list-item v-if="$auth.loggedIn">

                            <v-menu offset-y transition="slide-x-transition" bottom >
                                <template v-slot:activator="{ on }">
                                    <v-list-item-icon  v-on="on">
                                        <v-icon>person</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-on="on">Profile</v-list-item-title>
                                </template>
                                <v-list min-width="220">
                                    <profile_menu></profile_menu>
                                </v-list>
                            </v-menu>

                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item>
                            <v-menu offset-y transition="slide-x-transition" bottom >
                                <template v-slot:activator="{ on }">
                                    <v-list-item-icon  v-on="on">
                                        <v-icon>category</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-on="on">Categories</v-list-item-title>
                                </template>
                                <v-list min-width="220">
                                    <v-treeview
                                            :items="categoriesTree"
                                            item-key="categoryId"
                                            shaped
                                            open-on-click
                                            dense
                                            activatable
                                            color="orange"
                                        >
                                            <template slot="label" slot-scope="{ item }">
                                                <a   @click="setSearchCategoryProducts(item.categorySlug)" class="black--text tree-node"  >{{item.category}}</a>
                                            </template>
                                    </v-treeview>
                                </v-list>
                            </v-menu>
                        </v-list-item>



                        <v-list-item  to="/brands"  @click="gotorouterview('/brands')">
                            <v-list-item-icon>
                                <v-icon>business</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title >Brands</v-list-item-title>
                        </v-list-item>


                        <v-list-item>
                            <v-menu offset-y transition="slide-x-transition" bottom >
                                <template v-slot:activator="{ on }">
                                    <v-list-item-icon  v-on="on">
                                        <v-icon>card_giftcard</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title v-on="on">Gift Set</v-list-item-title>
                                </template>
                                <v-list min-width="220">
                                    <v-list-item
                                        v-for="(item, i) in gifttypes"
                                        :key="i"
                                        @click="gotorouterview('/productlist?giftTypeSlug='+item.giftTypeSlug); qpClear(); qpGiftTypeSlug=item.giftTypeSlug"
                                        :class="item.giftTypeSlug==qpGiftTypeSlug?'list-active-item':''"
                                        dense
                                        >
                                        <v-list-item-title >{{ item.giftType }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-list-item>





                    </v-list-item-group>
                </v-list>
            </v-card>

        </v-row>
    </div>
</template>


<script>


import topsystembar from '@/components/topsystembar.vue'
import responsiveMixins from '@/plugins/mixins/responsiveMixins.js'



export default {
    mounted() {
      window.addEventListener("scroll", this.handleScroll);

      this.getCategories();
      this.getCompanyInfo();
      this.getGiftTypes();

    },
    components: {
      topsystembar
    },
    data() {
        return {
            subheading_dropdown_list : false,

            menumargintop:'mt89px',
            // brands:[],
            categories: [],

            // query params
            // qpBrandSlug:'',
            qpMen:'',
            qpWomen:'',
            qpMakup:'',
            qpToolsandbrush:'',
            qpSkinCare:'',
            companyinfo: {},
            qpGiftTypeSlug:'',
            gifts:[],
            gifttypes:[]

        }
    },
    mixins:[responsiveMixins],
    computed: {
      categoriesTree: function () {
          let categorieswithchild=this.categories
          categorieswithchild.forEach(function (category) {
              category.children=[]
          });
          return this.getTree(categorieswithchild)
      },
    },
    methods: {
        handleScroll() {
            if (window.scrollY >= 100) {
                this.menumargintop = 'mt64px'
            } else {
                this.menumargintop = 'mt89px'
            }
        },

        getCategories(){
            var _this = this;
            this.$axios.$get('/api/getCategories')
            .then(function (response) {
                _this.categories = response.data;
            })
            .catch(function (error) {
            })
        },

        getCompanyInfo(){
            var _this = this;
            this.$axios.$get('/api/getCompanyInfo')
            .then(function (response) {
                _this.companyinfo = response.data;
            })
            .catch(function (error) {
            })
        },

        getGiftTypes(){
            var _this = this;
            this.$axios.$get('/api/getGiftTypes')
            .then(function (response) {
                _this.gifttypes = response.data;
            })
            .catch(function (error) {
            })
        },

        getTree(arr) {
            // return arr

            var tree = [],
                mappedArr = {},
                arrElem,
                mappedElem;

            // First map the nodes of the array to an object -> create a hash table.
            for(var i = 0, len = arr.length; i < len; i++) {
                arrElem = arr[i];
                mappedArr[arrElem.categoryId] = arrElem;
                mappedArr[arrElem.categoryId]['children'] = [];
            }


            for (var categoryId in mappedArr) {
                if (mappedArr.hasOwnProperty(categoryId)) {
                mappedElem = mappedArr[categoryId];
                // If the element is not at the root level, add it to its parent array of children.
                if (mappedElem.parentCategoryId) {
                    mappedArr[mappedElem['parentCategoryId']]['children'].push(mappedElem);
                }
                // If the element is at the root level, add it to first level elements array.
                else {
                    tree.push(mappedElem);
                }
                }
            }
            return tree;
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

