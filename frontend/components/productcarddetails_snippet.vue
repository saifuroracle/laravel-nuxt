<template>
    <v-list-item >
        <v-list-item-icon class="mx-0">
            <v-img
                :aspect-ratio="16/9"
                :src="backend_baseUrl+'/imageResize?url='+product.productPicturePath+(isSMALT? '&sizeX=50&sizeY=50': '&sizeX=80&sizeY=80') || '/uploads/no_image.png'"
                contain
                :width="isSMALT? 50: 80"
                @click="imageZoom(backend_baseUrl+product.productPicturePath)"
                style="cursor: zoom-in;"
            >
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
        </v-list-item-icon>
        <v-list-item-content
        @click=" gotorouterviewwithloadprops!=true? gotorouterview('/productdetails/'+string_to_slug(product.productName)+'/'+product.productId):  gotorouterviewwithload('/productdetails/'+string_to_slug(product.productName)+'/'+product.productId)"
        >
            <v-list-item-title v-text="product.productName+' '+(product.qty||'')+(product.uom||'')"

            style="cursor: pointer; white-space:normal;"
            class="subtitle-2 font-weight-bold grey--text text--darken-1"

            ></v-list-item-title>
            <!-- <p
            class="subtitle-2 font-weight-light grey--text text--darken-1"
            >{{(product.qty||"")+" "+(product.uom||"")}}</p> -->

            <v-rating
                background-color="orange lighten-3"
                color="orange"
                medium
                dense
                readonly
                v-model="product.rating"
                half-increments
                v-if="product.rating"
            >
            </v-rating>

        </v-list-item-content>

        <zoom_modal
            :zoomDialog="zoomDialog"
            :zoomPath="zoomPath"
            @cancelZoom="cancelZoom()"
        ></zoom_modal>
    </v-list-item>
</template>



<script>

// zoom
import zoom_modal from '@/components/zoom.vue'
import zoomMixins from '@/plugins/mixins/zoomMixins.js'
import responsiveMixins from '@/plugins/mixins/responsiveMixins.js'



export default {

    components:{
           zoom_modal,
        },
    mixins: [zoomMixins, responsiveMixins ],
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {


    },
    props: ["product", "gotorouterviewwithloadprops"],
    computed: {

    },
}
</script>



